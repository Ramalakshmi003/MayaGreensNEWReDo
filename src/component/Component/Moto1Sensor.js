import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import TowerIcon from 'react-native-vector-icons/FontAwesome5'

export default function Moto1Sensor() {
  return (
    <View style = {styles.card}>
        <View style = {styles.item}>
            <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                <Text style = {{fontSize : 16, fontWeight : 700, color : 'black'}}>Water Level</Text>
                <TowerIcon style={{ left: 3 }} name='broadcast-tower' size={22} color='red' />
            </View>
            <View style = {{top : 20, flexDirection : 'row', justifyContent : 'space-around' }}>
                <Image style={{ height: 40, width: 40 }} source = {{uri : 'https://cdn-icons-png.flaticon.com/128/505/505439.png'}} />
                <Image style={{ height: 40, width: 40 }} source = {{uri : 'https://cdn-icons-png.flaticon.com/128/920/920148.png'}} />
                <Image style={{ height: 40, width: 40 }} source = {{uri : 'https://cdn-icons-png.flaticon.com/128/7078/7078135.png'}} />
            </View>
        </View>
        <View style = {styles.item}>
            <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                <Text style = {{fontSize : 16, fontWeight : 700, color :'black'}}>Pressure</Text>
                <TowerIcon style={{ left: 3 }} name='broadcast-tower' size={22} color='black' />
            </View>
            <View style = {{top : 20, flexDirection : 'row', justifyContent : 'space-around' }}>
                <Image style={{ height: 40, width: 40 }} source = {{uri : 'https://cdn-icons-png.flaticon.com/128/5444/5444862.png'}} />
                <Image style={{ height: 40, width: 40 }} source = {{uri : 'https://cdn-icons-png.flaticon.com/128/920/920148.png'}} />
                <Image style={{ height: 40, width: 40 }} source = {{uri : 'https://cdn-icons-png.flaticon.com/128/7078/7078149.png'}} />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection : 'row',
        justifyContent : 'space-around' ,
        alignItems : 'center',
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
})