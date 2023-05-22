import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity, Alert
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

const OtpVerficationScreen = ({ navigation }) => {

  const [timer, setTimer] = useState(30);
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  const [verifyEnabled, setVerifyEnabled] = useState(false);
  const [resendEnabled, setResendEnabled] = useState(false);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  useEffect(() => {
    // Start the timer countdown
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Handle timer reaching 0
    if (timer === 0) {
      setVerifyEnabled(false);
      setResendEnabled(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [timer]);

  useEffect(() => {
    // Check if all codes are valid and enable/disable buttons accordingly
    if (code1 === '1' && code2 === '1' && code3 === '1' && code4 === '1' && timer > 0) {
      setVerifyEnabled(true);
    } else {
      setVerifyEnabled(false);
    }
  }, [code1, code2, code3, code4, timer]);

  const handleVerify = () => {
    if (code1 === '1' && code2 === '1' && code3 === '1' && code4 === '1') {
      Alert.alert('Success', 'Verification successful');
      navigation.navigate('dashboard');
    } else {
      Alert.alert('Failure', 'Verification failed');
    }
  };

  const handleResend = () => {
    setCode1('');
    setCode2('');
    setCode3('');
    setCode4('');
    setTimer(30);
    setResendEnabled(false);
  };

  const handleInputChange1 = (text) => {
    setCode1(text);
    inputRef2.current.focus();
  };

  const handleInputChange2 = (text) => {
    setCode2(text);
    inputRef3.current.focus();
  };

  const handleInputChange3 = (text) => {
    setCode3(text);
    inputRef4.current.focus();
  };

  const handleInputChange4 = (text) => {
    setCode4(text);
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
                {timer}
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
              value={code1}
              onChangeText={handleInputChange1}
              style={styles.input}
              placeholder="-"
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              ref={inputRef2}
              value={code2}
              onChangeText={handleInputChange2}
              style={styles.input}
              placeholder="-"
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              ref={inputRef3}
              value={code3}
              onChangeText={handleInputChange3}
              style={styles.input}
              placeholder="-"
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              ref={inputRef4}
              value={code4}
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
            onPress={handleVerify}
            disabled = {!verifyEnabled}
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
            onPress={handleResend}
            disabled = {!resendEnabled}
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

export default OtpVerficationScreen

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    height: 50,
    width: 50,
    margin: 12,
    paddingLeft: 10,
    fontSize: 24,
    textAlign: 'center'
  }
});
