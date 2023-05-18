import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Motor1Data from '../Data/Motor1Data'
import TowerIcon from 'react-native-vector-icons/FontAwesome5'
import ClockIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/FontAwesome'
import { IrrigationPageStyle } from '../Styles/IrrigationPageStyle'

const valveName = (name, direction) => {
    return (
        <View>
            <Text style={IrrigationPageStyle.title}>{name}</Text>
            <Text style={IrrigationPageStyle.title}>{direction}</Text>
        </View>
    )
}

const towerIcon = (towerIconName) => {
    return (
        <TowerIcon style={{ left: 3 }} name={towerIconName} size={22} color='black' />
    )
}

const valveIcon = (valveIconUrl) => {
    return (
        <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={{ uri:  valveIconUrl  }} />
    )
}

const clockTimer = (clockIcon,timerText) => {
    return (
        <View>
            <ClockIcon style={{ left: 3, top: 4 }} name={clockIcon} size={32} color='black' />
            <Text style={{ fontSize: 12, color: 'red' }}>{timerText}</Text>
        </View>
    )
}

const thunderIcon = (thunderimg) => {
    return(
        <Icons style={{ left: 3, top: 4 }} name={thunderimg} size={32} color='black' />
    )
}

const Motor1Valve = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const renderItem = ({ item }) => (

        <View style={IrrigationPageStyle.item}>
            <View style={IrrigationPageStyle.valveCardParts}>
                {valveName(item.valveName, item.direction)}
                {towerIcon(item.tower)}
                <TouchableOpacity
                    style={[IrrigationPageStyle.button, toggle ? IrrigationPageStyle.activeButton : IrrigationPageStyle.inactiveButton, { left: 4 }]}
                    onPress={handleToggle}>
                    <Text style={IrrigationPageStyle.buttonText}>{toggle ? 'ON' : 'OFF'}</Text>
                </TouchableOpacity>
            </View>
            <View style={IrrigationPageStyle.valveCardParts}>
                {valveIcon('https://img.icons8.com/?size=1x&id=bQwvmPfjcQeL&format=png')}
                {clockTimer('timer-outline','00:00')}
                {thunderIcon(item.thunder)}
            </View>
        </View>
    );


    return (
        <FlatList
            data={Motor1Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    )
}
export default Motor1Valve
