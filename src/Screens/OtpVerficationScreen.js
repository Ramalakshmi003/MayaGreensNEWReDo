import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

export default function OtpVerficationScreen({navigation}) {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const [timeRemaining, setTimeRemaining] = useState(30);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setTimer(
      setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000)
    );

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      clearInterval(timer);
    }
  }, [timeRemaining]);

  // useEffect(() => {
  //   var timer = setInterval(() => {
  //     setTimeRemaining(prevTime => prevTime - 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // useEffect(() => {
  //   if (timeRemaining === 0) {
  //     clearInterval();
  //   }
  // }, [timeRemaining]);

  const handleInputChange1 = (text) => {
    setNumber1(text);
    inputRef2.current.focus();
  };

  const handleInputChange2 = (text) => {
    setNumber2(text);
    inputRef3.current.focus();
  };

  const handleInputChange3 = (text) => {
    setNumber3(text);
    inputRef4.current.focus();
  };

  const handleInputChange4 = (text) => {
    setNumber4(text);
  };

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
            top: 100
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Icon style={{ top: 10 }} name="clock" size={24} color="grey" />
            <Text style={{ fontSize: 18, padding: 10 }}>
              <Text style={{ backgroundColor: "red", height: 20, width: 30 }}>
                {timeRemaining}
              </Text>{" "}
              sec
            </Text>
          </View>
          <Text
            style={{
              color: "grey",
              textAlign: "center",
              fontSize: 22,
              fontWeight: 700
            }}
          >
            OTP Verification
          </Text>
          <View
            style={{
              top: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TextInput
              ref={inputRef1}
              value={number1}
              onChangeText={handleInputChange1}
              style={styles.input}
              placeholder="-"
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              ref={inputRef2}
              value={number2}
              onChangeText={handleInputChange2}
              style={styles.input}
              placeholder="-"
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              ref={inputRef3}
              value={number3}
              onChangeText={handleInputChange3}
              style={styles.input}
              placeholder="-"
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              ref={inputRef4}
              value={number4}
              onChangeText={handleInputChange4}
              style={styles.input}
              placeholder="-"
              maxLength={1}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10
          }}
        >
          <TouchableOpacity
           onPress={() => navigation.navigate('dashboard')}
            style={{
              height: 50,
              width: 300,
              borderRadius: 25,
              backgroundColor: "grey",
              top: 160
            }}
            disabled={(number1 || number2 || number3 || number4) == null}
          >
            <Text
              style={{
                textAlign: "center",
                top: 9,
                fontSize: 20,
                fontWeight: 700,
                color: "white"
              }}
            >
              Verify
            </Text>
          </TouchableOpacity>
        </View>
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
            }}
          >
            <Text
              style={{
                textAlign: "center",
                top: 9,
                fontSize: 20,
                fontWeight: 700,
                color: "white"
              }}
            >
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
        {/* <ButtonGrey1 value="Verify" />
        <ButtonGrey1 value="Resend OTP" /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    height: 50,
    width: 30,
    margin: 12,
    paddingLeft: 10
  }
});
