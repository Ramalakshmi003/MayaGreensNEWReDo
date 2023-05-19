import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import TowerIcon from 'react-native-vector-icons/FontAwesome5'


const boxHead = (value, signalColor) => {
    return (
        <View style={styles.box}>
            <Text style={styles.boxText}> {value} </Text>
            <TowerIcon style={{ left: 3 }} name='broadcast-tower' size={22} color= {signalColor} />
        </View>
    )
}

const graphIcon = (graph) => {
    return (
        <View>
            <Image style={styles.img} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/920/920148.png' }} />
            <Text style = {{color : 'black'}}>{graph}</Text>
        </View>
    )
}

const waterLevel = (waterLevel) => {
    return (
        <View>
            <Image style={styles.img} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/505/505439.png' }} />
            <Text style = {{color : 'black', textAlign : 'center', fontWeight : 500}}>{waterLevel}</Text>
        </View>
    )
}

const batteryLow = (batteryLowPercent) => {
    return (
        <View>
            <Image style={styles.img} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/7078/7078135.png' }} />
            <Text style = {{color : 'black', textAlign : 'center', fontWeight : 500}}>{batteryLowPercent}</Text>
        </View>
    )
}

const batteryFull = (batteryHighPercent) => {
    return (
        <View>
            <Image style={styles.img} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/7078/7078149.png' }} />
            <Text style = {{color : 'black', textAlign : 'center', fontWeight : 500}}>{batteryHighPercent}</Text>
        </View>
    )
}

const pressureCage = (pressureVal) => {
    return (
        <View>
            <Image style={styles.img} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5444/5444862.png' }} />
            <Text style = {{color : 'black', textAlign : 'center', fontWeight : 500}}>{pressureVal}</Text>
        </View>
    )
}


const Motor1Sensor = () => {
    return (
        <View style={styles.card}>
            <View style={styles.item}>
                {boxHead('Water Level', 'red')}
                <View style={styles.bottomImgs}>
                    {waterLevel('50%')}
                    {graphIcon('View')}
                    {batteryLow('9%')}
                </View>
            </View>
            <View style={styles.item}>
                {boxHead('Pressure', 'black')}
                <View style={styles.bottomImgs}>
                    {pressureCage('0 Psi')}
                    {graphIcon('View')}
                    {batteryFull('90%')}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    img: {
        height: 40,
        width: 40
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxText: {
        fontSize: 16,
        fontWeight: 700,
        color: 'black'
    },
    bottomImgs: {
        top: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

})

export default Motor1Sensor