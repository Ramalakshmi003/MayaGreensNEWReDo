import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Motor1Data from '../component/Data/Motor1Data'
import TowerIcon from 'react-native-vector-icons/FontAwesome5'
import ClockIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Motor1Sensor from '../component/Component/Motor1Sensor'
import Motor1Group from '../component/Component/Motor1Group'
import Motor1Valve from '../component/Component/Motor1Valve'
import { IrrigationPageStyle } from '../component/Styles/IrrigationPageStyle'
import { Gap } from './DashboardScreen'
import Motor1Filter from '../component/Component/Motor1Filter'
import { images } from '../assets/images/image'


export const separator = () => {
  return (
    <View style={IrrigationPageStyle.separator} />
  )
}

const powerBtn = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image resizeMode='contain' style={{ height: 65, width: 65, borderRadius: 35 }} source={images.powerImg} />
      </TouchableOpacity>
    </View>
  )
}

const calenderImg = (CalenderImg) => {
  return (
    <View>
      <TouchableOpacity>
        <Image style={{ bottom: 15, height: 85, width: 85 }} source={CalenderImg} />
      </TouchableOpacity>
    </View>
  )
}

const valvenText = (valveImg, pluText) => {
  return (
    <View style={IrrigationPageStyle.valvenTextView}>
      <Image resizeMode='contain' style={{ height: 55, width: 55 }} source={valveImg} />
      <Text style={IrrigationPageStyle.valvenTexttext}>{pluText}</Text>
    </View>
  )
}

const MotorImgName = (motorName, motorImg) => {
  return (
    <View>
      <TouchableOpacity style={IrrigationPageStyle.MotorImg}>
        <Image resizeMode='contain' style={{ top: 5, height: 60, width: 60 }} source={motorImg} />
      </TouchableOpacity>
      <Text style={IrrigationPageStyle.motorName}>{motorName}</Text>
    </View>
  )
}

const modeStatusText = () => {
  return (
    <Text style={IrrigationPageStyle.modeText}>MODE - MANUAL</Text>
  )
}




export default function IrrigationScreen() {

  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [selectedTab, setSelectedTab] = useState('');

  const [activeTab, setActiveTab] = useState('');

  const handleToggle1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'valve':
        return <Motor1Valve />
      case 'sensor':
        return <Motor1Sensor /> // need to render as tag
      case 'group':
        return <Motor1Group />
      case 'filter':
        return <Motor1Filter />
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

  const FarmTopCard = (farmName) => {
    return (
      <View style={IrrigationPageStyle.topCard}>
        <View style={IrrigationPageStyle.topCardPartSlpit}>
          <Text style={IrrigationPageStyle.farmNameStyle}>{farmName}</Text>
          <Image resizeMode='cover' style={IrrigationPageStyle.topCardimg} source={images.locationImg} />
        </View>
        <View style={[IrrigationPageStyle.topCardPartSlpit, { justifyContent: 'space-around' }]}>
          <Image style={[{ left: 70 }, IrrigationPageStyle.topCardimg]} source={images.ebImg} />
          <Text style={IrrigationPageStyle.dateStyle}>{formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
        </View>
      </View>
    )
  }

  const motorStatusPart = (statusName, Status) => {
    return (
      <View>
        <Text style={IrrigationPageStyle.statusHead}>{statusName}</Text>
        <Text style={IrrigationPageStyle.statusText}>{Status}</Text>
        <Text style={[IrrigationPageStyle.statusText, { fontSize: 15, color: 'grey' }]}>{formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
      </View>
    )
  }

  const motorSettingsPart = (settingsIcon, powerName, ebImg) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <TouchableOpacity>
            <Icon style={{ margin: 10 }} name={settingsIcon} size={32} color='grey' />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
          <Text style={{ left: 10, paddingBottom: 6, textAlign: 'center', color: 'black', fontSize: 18, fontWeight: '700', color: 'black' }}>{powerName}</Text>
          <Image style={{ height: 30, width: 30 }} resizeMode='cover' source={ebImg} />
          <Text style={{ fontSize: 16, fontWeight: '400', color: 'black' }}>  {formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
        </View>
      </View>
    )
  }


  return (
    <LinearGradient style={IrrigationPageStyle.linearGradient} colors={['grey', 'white']} >
      {FarmTopCard('Test Farm')}
      <ScrollView>
        <View style={IrrigationPageStyle.CenterCard}>
          {motorSettingsPart('settings', 'POWER     ', images.electricImg)}
          {separator()}
          <View style={IrrigationPageStyle.motorCardCon}>
            {MotorImgName('Motor-1', images.motorImg)}
            {motorStatusPart('STATUS', 'OFF-Normal')}
            {powerBtn()}
          </View>
          {separator()}
          <View style={{ top: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {valvenText(images.valveImg, ' + 0')}
            {calenderImg(images.calenderImg)}
            {modeStatusText('')}
          </View>
          {separator()}
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={handleToggle1}>
              <Icons style={{ height: 25, width: 25 }} name={isExpanded1 ? 'angle-double-up' : 'angle-double-down'} size={32} color='black' />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {isExpanded1 && (
            <View>
              <View style={IrrigationPageStyle.tabContainer}>
                <TouchableOpacity style={[IrrigationPageStyle.tabItem,{borderBottomWidth : activeTab === 'valve' ? 2 : 0 }]} onPress={() => handleTabPress('valve')}>
                  <Text style={[IrrigationPageStyle.tabText, {color : activeTab === 'valve' ? 'green' : 'black'}]}>VALVE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[IrrigationPageStyle.tabItem, {borderBottomWidth : activeTab === 'sensor' ? 2 : 0 }]} onPress={() => handleTabPress('sensor')}>
                  <Text style={[IrrigationPageStyle.tabText , {color : activeTab === 'sensor' ? 'green' : 'black'}]}>SENSOR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[IrrigationPageStyle.tabItem, {borderBottomWidth : activeTab === 'group' ? 2 : 0 }]} onPress={() => handleTabPress('group')}>
                  <Text style={[IrrigationPageStyle.tabText, {color : activeTab === 'group' ? 'green' : 'black'}]}>GROUP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[IrrigationPageStyle.tabItem, {borderBottomWidth : activeTab === 'filter' ? 2 : 0 }]} onPress={() => handleTabPress('filter')}>
                  <Text style={[IrrigationPageStyle.tabText, {color : activeTab === 'filter' ? 'green' : 'black'}]}>FILTER</Text>
                </TouchableOpacity>
              </View>
              <View>
                {renderTabContent()}
              </View>
            </View>
          )}
        </View>


        <View style={IrrigationPageStyle.CenterCard}>
          {motorSettingsPart('settings', 'POWER     ', images.electricImg)}
          {separator()}
          <View style={IrrigationPageStyle.motorCardCon}>
            {MotorImgName('Motor-2', images.motorImg)}
            {motorStatusPart('STATUS', 'OFF-Normal')}
            {powerBtn()}
          </View>
          {separator()}
          <View style={{ top: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {valvenText(images.valveImg, ' + 0')}
            {calenderImg(images.calenderImg)}
            {modeStatusText('')}
          </View>
          {separator()}
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={handleToggle2}>
              <Icons style={{ height: 25, width: 25 }} name={isExpanded1 ? 'angle-double-up' : 'angle-double-down'} size={32} color='black' />
            </TouchableOpacity>
          </View>
        </View>

        {Gap()}
      </ScrollView>
    </LinearGradient>
  )
}
