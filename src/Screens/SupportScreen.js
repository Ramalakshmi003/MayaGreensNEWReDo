import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import EditIcon from 'react-native-vector-icons/Feather'
import DeleteIcon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SupportScreenStyles } from '../component/Styles/SupportScreenStyles'
import { useSelector,useDispatch } from 'react-redux'
import { addBook, updateBook, deleteBook, deleteAllBooks } from '../reduxToolkit/sliceReducer/BookReducer'
import { images } from '../assets/images/image'

const SupportScreen = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [book, setBook] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const handleViewDetails = (book) => {
    setSelectedBook(book);
    setModalVisible(true);
  };


  useEffect(() => {
    retrieveBookData();
  }, []);

  useEffect(() => {
    saveData();
  }, [book]);

  const retrieveBookData = async () => {
    try {
      const storedBook = await AsyncStorage.getItem('book');
      if (storedBook !== null) {
        // setBook(JSON.parse(storedBook));
      }
    } catch (error) {
      console.log(error);
    }
  };


  const saveData = async () => {
    try {
      await AsyncStorage.setItem('book', JSON.stringify(book));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = () => {
    if(editIndex) {
      dispatch(updateBook({id : editIndex, title, description}));
      setEditIndex(null);
    } else {
      dispatch(addBook({id, title, description}));
    }
    setId('');
    setTitle('');
    setDescription('')

    // if (editIndex) {
    //   const updateBook = book.map((item) => {
    //     if (item.id === editIndex) {
    //       return { id: item.id, title, description };
    //     }
    //     return item;
    //   });
    //   setBook(updateBook);
    //   setEditIndex(null);
    // } else {
    //   // const newBookItem = { id, title, description };
    //   // const updatedBook = [...book, newBookItem];
    //   setBook([...book, { id, title, description }]);
    //   // setBook([...book, {id, title, description}]);
    // }
    // setId('');
    // setTitle('');
    // setDescription('');

    // try {
    //   await AsyncStorage.setItem('book', JSON.stringify(book));
    // } catch (error) {
    //   console.log('Error saving book data:', error);
    // }
    // // console.log(id, title, description)
    // setBook([...book, { id: id, title: title, description: description }]);
    // setId('');
    // setTitle('');
    // setDescription('');
  }

  const handleEdit = (id) => {
    const item = book.find((e) => e.id === id);
    setId(item.id);
    setTitle(item.title);
    setDescription(item.description);
    setEditIndex(id);
  }

  const handleDeleteIndividualItem = (id) => {
    // console.log(id)
    dispatch(deleteBook(id));
    // setBook(book.filter(e => e.id !== id));

    // try {
    //   await AsyncStorage.setItem('book', JSON.stringify(book));
    // } catch (error) {
    //   console.log('Error saving book data:', error);
    // }
    // try {
    //   await AsyncStorage.setItem('book', JSON.stringify(book));
    // } catch (error) {
    //   console.log('Error saving book data:', error);
    // }

  }

  const handleDeleteAll = () => {
    dispatch(deleteAllBooks());
    // setBook([]);

    // try {
    //   await AsyncStorage.removeItem('book');
    // } catch (error) {
    //   console.log('Error removing book data:', error);
    // }
  }

  const viewDetailsModal = () => {
    return (
      <View>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={SupportScreenStyles.modalCard}>
            <View style={SupportScreenStyles.innerCard}>
              <Text style={[SupportScreenStyles.textItem, { color: '#067a48', fontSize: 22 }]}>Book Details</Text>
              {selectedBook && (
                <View style={{ top: 30 }}>
                  <Text style={[SupportScreenStyles.textItem, { color: '#067a48' }]}>Book Id : <Text style={SupportScreenStyles.textItem}>{selectedBook.id}</Text></Text>
                  <Text style={[SupportScreenStyles.textItem, { color: '#067a48' }]}>Title : <Text style={SupportScreenStyles.textItem}>{selectedBook.title}</Text></Text>
                  <Text style={[SupportScreenStyles.textItem, { color: '#067a48' }]}>Description : <Text style={SupportScreenStyles.textItem}>{selectedBook.description}</Text></Text>
                </View>
              )}
              <TouchableOpacity style={SupportScreenStyles.AddBtn1} onPress={() => setModalVisible(false)}>
                <Text style={SupportScreenStyles.btnText1}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  // const textInputCon = (onchangeTextInput, placeholder, keyType) => {
  //   return (
  //     <TextInput
  //       style={SupportScreenStyles.input}
  //       onChangeText={(e) => onchangeTextInput(e)}
  //       value={id}
  //       placeholder={placeholder}
  //       maxLength={10}
  //       keyboardType={keyType}
  //     />
  //   )
  // }

  return (
    <View>
      {viewDetailsModal()}
      <View style={SupportScreenStyles.body}>
        <ScrollView>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={SupportScreenStyles.logo} source={images.supportScreenLogo} />
            <Text style={SupportScreenStyles.text}>To-Do List</Text>
            <TextInput
              style={SupportScreenStyles.input}
              onChangeText={(e) => setId(e)}
              value={id}
              placeholder='Enter the ID'
              keyboardType="numeric"
            />
            <TextInput
              style={SupportScreenStyles.input}
              onChangeText={(e) => setTitle(e)}
              value={title}
              placeholder='Enter the title'
              keyboardType="name-phone-pad"
            />
            <TextInput
              style={SupportScreenStyles.input}
              onChangeText={(e) => setDescription(e)}
              value={description}
              placeholder='Enter the description'
              keyboardType="name-phone-pad"
            />
            {/* {textInputCon(setId, "Enter the ID", "numeric")} */}
            {/* {textInputCon(setTitle, "Enter the title", "name-phone-pad")} */}
            {/* {textInputCon(setId, "Enter the description", "name-phone-pad")} */}
            <TouchableOpacity style={SupportScreenStyles.AddBtn} onPress={() => handleAdd()}>
              <Text style={SupportScreenStyles.btnText}>CREATE or UPDATE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SupportScreenStyles.DeleteAllBtn} onPress={() => handleDeleteAll()}>
              <Text style={SupportScreenStyles.btnText}>DELETE ALL</Text>
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {book.map((e) => {
              return (
                <View style={SupportScreenStyles.card} key={e.id}>
                  <View>
                    <Text style={SupportScreenStyles.textItem}>{e.id}</Text>
                    <Text style={SupportScreenStyles.textItem}>{e.title}</Text>
                    <Text style={SupportScreenStyles.textItem}>{e.description}</Text>
                  </View>
                  <View >
                    <TouchableOpacity onPress={() => handleEdit(e.id)}>
                      <EditIcon style={{ margin: 10 }} name='edit' size={26} color='black' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { handleDeleteIndividualItem(e.id) }}>
                      <DeleteIcon style={{ margin: 6 }} name='delete' size={30} color='red' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleViewDetails(e)}>
                      <DeleteIcon style={{ margin: 6 }} name='remove-red-eye' size={30} color='black' />
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    </View>

  )
}

export default SupportScreen
