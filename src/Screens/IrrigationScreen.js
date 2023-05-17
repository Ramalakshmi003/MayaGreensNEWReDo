import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Motor1Data from '../component/Data/Motor1Data'
import TowerIcon from 'react-native-vector-icons/FontAwesome5'
import ClockIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function IrrigationScreen() {
  const [toggle, setToggle] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [selectedTab, setSelectedTab] = useState('');

  const handleToggle = () => {
    setToggle(!toggle);
  };



  const handleToggle1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const renderItem = ({ item }) => (

    <View style={styles.item}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <View>
          <Text style={styles.title}>{item.valveName}</Text>
          <Text style={styles.title}>{item.direction}</Text>
        </View>
        <TowerIcon style={{ left: 3 }} name={item.tower} size={22} color='black' />
        <TouchableOpacity
          style={[styles.button, toggle ? styles.activeButton : styles.inactiveButton, { left: 4 }]}
          onPress={handleToggle}>
          <Text style={styles.buttonText}>{toggle ? 'ON' : 'OFF'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={{ uri: 'https://img.icons8.com/?size=1x&id=bQwvmPfjcQeL&format=png' }} />
        <View>
          <ClockIcon style={{ left: 3, top: 4 }} name='timer-outline' size={32} color='black' />
          <Text style={{ fontSize: 12, color: 'red' }}>00:00</Text>
        </View>
        <Icons style={{ left: 3, top: 4 }} name={item.thunder} size={32} color='black' />
      </View>
    </View>
  );

  function valvetab() {
    return (
      <FlatList
        data={Motor1Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    )
  }

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'valve':
        return valvetab();
      case 'sensor':
        return <Text>sensor1</Text>;
      case 'group':
        return <Text>group1</Text>;
      case 'filter':
        return <Text>filter1</Text>;
      default:
        return null;
    }
  };

  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);


  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };


  return (
    <LinearGradient style={styles.linearGradient} colors={['grey', 'white']} >
      <View style={styles.topCard}>
        <View style={{ top: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ left: 10, paddingBottom: 6, textAlign: 'center', color: 'black', fontSize: 22, fontWeight: '700', color: 'black', letterSpacing: 1 }}>Test Farm</Text>
          <Image resizeMode='cover' style={{ right: 10, height: 50, width: 50 }} source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/10/03/54/icon-1968240_640.png' }} />
        </View>
        <View style={{ top: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Image style={{ left: 70, height: 50, width: 50 }} source={{ uri: 'https://cdn.pixabay.com/photo/2019/09/27/08/06/electricity-4507838_1280.png' }} />
          <Text style={{ left: 30, fontSize: 16, fontWeight: '400', color: 'black' }}>{formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.CenterCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <TouchableOpacity>
                <Icon style={{ margin: 10 }} name='settings' size={32} color='grey' />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
              <Text style={{ left: 10, paddingBottom: 6, textAlign: 'center', color: 'black', fontSize: 18, fontWeight: '700', color: 'black' }}>POWER     </Text>
              <Image style={{ height: 30, width: 30 }} resizeMode='cover' source={{ uri: 'https://cdn.pixabay.com/photo/2013/04/01/10/55/electricity-98652_640.png' }} />
              <Text style={{ fontSize: 16, fontWeight: '400', color: 'black' }}>  {formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={{ top: 5, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View>
              <TouchableOpacity style={{ height: 70, width: 70, backgroundColor: 'red', borderRadius: 10, alignItems: 'center' }}>
                <Image resizeMode='contain' style={{ top: 5, height: 60, width: 60 }} source={{ uri: 'https://cdn.pixabay.com/photo/2020/09/14/04/52/motor-5569977_640.png' }} />
              </TouchableOpacity>
              <Text style={{ top: 5, paddingBottom: 6, color: 'black', fontSize: 22, fontWeight: '700', color: 'black', letterSpacing: 1, textAlign: 'center' }}>Motor-1</Text>
            </View>
            <View>
              <Text style={{ top: 5, margin: 3, paddingBottom: 6, color: 'black', fontSize: 20, fontWeight: '700', color: 'black', letterSpacing: 1, textAlign: 'center' }}>STATUS</Text>
              <Text style={{ fontSize: 18, margin: 3, fontWeight: '400', color: 'red', textAlign: 'center' }}>OFF-Normal</Text>
              <Text style={{ fontSize: 15, margin: 3, fontWeight: '400', color: 'black', textAlign: 'center' }}>{formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image resizeMode='contain' style={{ height: 65, width: 65, borderRadius: 35 }} source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/31/17/49/button-2025915_640.png' }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={{ top: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ bottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image resizeMode='contain' style={{ height: 55, width: 55 }} source={{ uri: 'https://img.icons8.com/?size=1x&id=bQwvmPfjcQeL&format=png' }} />
              <Text style={{ top: 5, margin: 3, paddingBottom: 6, color: 'black', fontSize: 20, fontWeight: '700', color: 'black', letterSpacing: 1, textAlign: 'center' }}>  +  0</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image style={{ bottom: 15, height: 85, width: 85 }} source={{ uri: 'https://image.shutterstock.com/image-vector/calendar-image-specific-date-260nw-728810836.jpg' }} />
              </TouchableOpacity>
            </View>
            <Text style={{ top: 3, margin: 3, paddingBottom: 6, color: 'black', fontSize: 20, fontWeight: '700', color: 'black', textAlign: 'center' }}>MODE - MANUAL</Text>
          </View>
          <View style={styles.separator} />
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={handleToggle1}>
              <Icons style={{ height: 25, width: 25 }} name={isExpanded1 ? 'angle-double-up' : 'angle-double-down'} size={32} color='black' />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {isExpanded1 && (
            <View>
              <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('valve')}>
                  <Text style={styles.tabText}>Valve</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('sensor')}>
                  <Text style={styles.tabText}>Sensor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('group')}>
                  <Text style={styles.tabText}>Group</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('filter')}>
                  <Text style={styles.tabText}>Filter</Text>
                </TouchableOpacity>
              </View>
              <View>
                {renderTabContent()}
              </View>
            </View>
          )}
        </View>


        <View style={styles.CenterCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <TouchableOpacity>
                <Icon style={{ margin: 10 }} name='settings' size={32} color='grey' />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
              <Text style={{ left: 10, paddingBottom: 6, textAlign: 'center', color: 'black', fontSize: 18, fontWeight: '700', color: 'black' }}>POWER     </Text>
              <Image style={{ height: 30, width: 30 }} resizeMode='cover' source={{ uri: 'https://cdn.pixabay.com/photo/2013/04/01/10/55/electricity-98652_640.png' }} />
              <Text style={{ fontSize: 16, fontWeight: '400', color: 'black' }}>  {formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={{ top: 5, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View>
              <TouchableOpacity style={{ height: 70, width: 70, backgroundColor: 'red', borderRadius: 10, alignItems: 'center' }}>
                <Image resizeMode='contain' style={{ top: 5, height: 60, width: 60 }} source={{ uri: 'https://cdn.pixabay.com/photo/2020/09/14/04/52/motor-5569977_640.png' }} />
              </TouchableOpacity>
              <Text style={{ top: 5, paddingBottom: 6, color: 'black', fontSize: 22, fontWeight: '700', color: 'black', letterSpacing: 1, textAlign: 'center' }}>Motor-1</Text>
            </View>
            <View>
              <Text style={{ top: 5, margin: 3, paddingBottom: 6, color: 'black', fontSize: 20, fontWeight: '700', color: 'black', letterSpacing: 1, textAlign: 'center' }}>STATUS</Text>
              <Text style={{ fontSize: 18, margin: 3, fontWeight: '400', color: 'red', textAlign: 'center' }}>OFF-Normal</Text>
              <Text style={{ fontSize: 15, margin: 3, fontWeight: '400', color: 'black', textAlign: 'center' }}>{formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image resizeMode='contain' style={{ height: 65, width: 65, borderRadius: 35 }} source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/31/17/49/button-2025915_640.png' }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={{ top: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ bottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image resizeMode='contain' style={{ height: 55, width: 55 }} source={{ uri: 'https://img.icons8.com/?size=1x&id=bQwvmPfjcQeL&format=png' }} />
              <Text style={{ top: 5, margin: 3, paddingBottom: 6, color: 'black', fontSize: 20, fontWeight: '700', color: 'black', letterSpacing: 1, textAlign: 'center' }}>  +  0</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image style={{ bottom: 15, height: 85, width: 85 }} source={{ uri: 'https://image.shutterstock.com/image-vector/calendar-image-specific-date-260nw-728810836.jpg' }} />
              </TouchableOpacity>
            </View>
            <Text style={{ top: 3, margin: 3, paddingBottom: 6, color: 'black', fontSize: 20, fontWeight: '700', color: 'black', textAlign: 'center' }}>MODE - MANUAL</Text>
          </View>
          <View style={styles.separator} />
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={handleToggle2}>
              <Icons style={{ height: 25, width: 25 }} name={isExpanded2 ? 'angle-double-up' : 'angle-double-down'} size={32} color='black' />
            </TouchableOpacity>
            {isExpanded2 && (
              <View style={styles.messageContainer}>
                <Text style={styles.messageText}>Hi</Text>
              </View>
            )}
          </View>
        </View>

        <View><Text></Text></View>
      </ScrollView>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },

  linearGradient: {
    height: '100%',
    width: '100%',
  },

  topCard: {
    height: 120,
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
  },

  CenterCard: {
    height: 340,
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
  },

  separator: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
  },

  card: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16,
    marginBottom: 16,
  },

  arrowContainer: {
    alignItems: 'flex-end',
  },

  tabContainer: {
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  tabItem: {
    padding: 16,
  },

  tabText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 600
  },

  item: {
    flex: 1,
    backgroundColor: 'white',
    height: 130,
    width: '45%',
    borderRadius: 10,
    margin: 10,
    padding: 20,
  },

  title: {
    fontSize: 14,
    color: 'black',
    fontWeight: 600
  },

  button: {
    height: 25,
    width: 40,
    borderRadius: 4,
  },

  activeButton: {
    backgroundColor: 'green',
  },

  inactiveButton: {
    backgroundColor: 'red',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },

})