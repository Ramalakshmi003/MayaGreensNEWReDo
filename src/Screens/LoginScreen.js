import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import Icons from 'react-native-vector-icons/AntDesign'
import ButtonGrey1 from "../component/Component/ButtonGrey1";
// import { useNavigation } from "@react-navigation/native";



export default function LoginScreen({navigation}) {
    // const navigation = useNavigation();
    const [mobileNumber, onChangeMobileNumber] = useState("");

    const handleOnpress =  () => {
        if(mobileNumber.length == 10){
            if(mobileNumber == '9677398605'){
                navigation.navigate('otp')
            }else {
                Alert.alert('Warning, Enter the correct number')
            }
        }
        // console.log({mobileNumber})
    }
    
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
                <View>
                    <Image
                        style={{ height: 250, width: "100%", top: 40 }}
                        source={{
                            uri:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXIvcNc1E311RPrFjVF-idUi7lU6J_mos-A&usqp=CAU"
                        }}
                        resizeMode="cover"
                    />
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        top: 130
                    }}
                >
                    <View style = {{flexDirection : 'column', justifyContent : 'flex-start', marginHorizontal : 30}}> 
                    <Text
                        style={{
                            color: "grey",
                            fontSize: 22,
                            left : 15,
                            fontFamily: "Roboto-BoldItalic"
                        }}
                    >
                        Phone Number :
                    </Text>
                    <View style={{ flexDirection: "row", top :15 }}>
                        <Icon
                            name="person"
                            size={30}
                            color="grey"
                            style={{ top: 5, padding: 10 }}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeMobileNumber}
                            value={mobileNumber}
                            placeholder="Enter the number"
                            maxLength={10}
                            keyboardType={"numeric"}
                        />
                    </View>
                    </View>
                </View>
                <View style = {{top : 30}}>
                <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
      }}
    >
      <TouchableOpacity
        style={{
          height: 50,
          width: 300,
          borderRadius: 25,
          backgroundColor: "grey",
          top: 160
        }} onPress={() => handleOnpress()}
      >
        <Text
          style={{
            textAlign: "center",
            top: 9,
            fontSize: 20,
            fontWeight: 700,
            color: "white",
            // fontFamily : 'DancingScript-VariableFont_wght'
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
                    {/* <ButtonGrey1 value="Login" /> */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        height: 40,
        width : 220,
        margin: 12,
        padding: 10,
        fontSize : 20,
        color : 'black',
    }
});