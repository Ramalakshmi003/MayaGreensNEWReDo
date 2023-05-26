import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { IrrigationPageStyle } from '../Styles/IrrigationPageStyle';
import { separator } from '../../Screens/IrrigationScreen';
import { tabBTNGreen } from './Motor1Group';



export default function Motor1Filter() {

    const [selectedTab, setSelectedTab] = useState('');
    const [activeTab, setActiveTab] = useState();

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        if (selectedTab == 'manual')
            return Motor1FilterManual('FLUSH - 1')
        else if (selectedTab == 'auto')
            return Motor1FilterAuto('NO GROUPS')
        else
            // return <></>
            return null
    }

    const Motor1FilterManual = (name) => {
        return(
            <View>
                <View style={[IrrigationPageStyle.motor1GroupManualCard, { height: 300}]}>
                     <Text style={[IrrigationPageStyle.modeText, {textAlign : 'left', left : 15                                                  , top : 10}]}>{name}</Text>
                     <View>
                        <Image resizeMode='contain' style = {IrrigationPageStyle.motorImgFilter} source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LDeaScDYL2uaQMSvjKvwNMktEOTlNc747w&usqp=CAU'}} />
                     </View>
                     <View style = {{flexDirection : 'row', justifyContent : 'space-around', alignItems : 'center'}}>
                        <Text style={IrrigationPageStyle.modeText}>Duration: </Text>
                        <TextInput 
                            value='00:00'
                            placeholder="Enter the number"
                            maxLength={10}
                            keyboardType={"numeric"} 
                            style = {IrrigationPageStyle.textInputstyle} />
                     </View>
                </View>
            </View>
        )
    }


    const Motor1FilterAuto = (name) => {
        return(
            <View>
                <View style={[IrrigationPageStyle.motor1GroupManualCard, { height: 140}]}>
                     <Text style={[IrrigationPageStyle.modeText, {textAlign : 'center'}]}>{name}</Text>
                     {separator()}
                     <View style = {{alignSelf : 'center', top : 10}}>
                        {tabBTNGreen('CREATE NEW GROUP', 220)}
                     </View>
                </View>
            </View>
        )
    }



    return (
        <View>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tabItem, {borderBottomWidth : activeTab === 'manual' ? 2 : 0 }]} onPress={() => handleTabPress('manual')}>
                    <Text style={[styles.tabText, {color : activeTab === 'manual' ? 'green' : 'black'}]}>MANUAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabItem, {borderBottomWidth : activeTab === 'auto' ? 2 : 0 }]} onPress={() => handleTabPress('auto')}>
                    <Text style={[styles.tabText, {color : activeTab === 'auto' ? 'green' : 'black'}]}>AUTO</Text>
                </TouchableOpacity>
            </View>
            <View>
                {renderTabContent()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})