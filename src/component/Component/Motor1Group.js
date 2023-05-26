import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { IrrigationPageStyle } from '../Styles/IrrigationPageStyle'
import { Gap } from '../../Screens/DashboardScreen'
import Icons from 'react-native-vector-icons/FontAwesome'

export const tabBTNGreen = (title, width) => {
    return (
        <TouchableOpacity style={[IrrigationPageStyle.tabBTNGreen, { width: width }]}>
            <Text style={IrrigationPageStyle.tabBTNGreenText}>{title}</Text>
        </TouchableOpacity>
    )
}

const Motor1Group = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [groupManualtoggle, setGroupManualToggle] = useState(false);
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [activeTab, setActiveTab] = useState();

    const handleToggle = () => {
        setGroupManualToggle(!groupManualtoggle);
    };

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
        setActiveTab(tab);
    };

    const handleToggle1 = () => {
        setIsExpanded1(!isExpanded1);
    };

    const motor1GroupSensor = (groupName) => {
        return(
            <View>
                <View style={[IrrigationPageStyle.motor1GroupManualCard, { height: 220 }]}>
                    <Text style={IrrigationPageStyle.modeText}>{groupName}</Text>
                    <View style={IrrigationPageStyle.valveCardParts}>
                        <View style = {{alignItems : 'center'}}>
                            <Text style={IrrigationPageStyle.modeText}>START VALUE</Text>
                            <Text style={IrrigationPageStyle.tabText}>Pressure</Text>
                            <Text style={IrrigationPageStyle.tabText}>SET : 25</Text>
                        </View>
                        <View style = {{alignItems : 'center'}}>
                            <Text style={IrrigationPageStyle.modeText}>STATUS</Text>
                            <Text style={[IrrigationPageStyle.tabText, {color : 'red'}]}>OFF</Text>
                        </View>
                        <View style = {{alignItems : 'center'}}>
                            <Text style={IrrigationPageStyle.modeText}>END VALUE</Text>
                            <Text style={IrrigationPageStyle.tabText}>Water Level</Text>
                            <Text style={IrrigationPageStyle.tabText}>SET : 25</Text>
                        </View>
                    </View>
                    <View style={[IrrigationPageStyle.valveCardParts, { top: 20 }]}>
                        {tabBTNGreen('SUSPEND', 100)}
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={handleToggle1}>
                                <Icons style={{ height: 25, width: 25 }} name={isExpanded1 ? 'angle-double-up' : 'angle-double-down'} size={32} color='black' />
                            </TouchableOpacity>
                        </View>
                        {tabBTNGreen('EDIT', 80)}
                    </View>
                </View>
                {Gap()}
                <View>
                    {isExpanded1 && (
                        <View>
                            <Text>hi</Text>
                        </View>
                    )}
                    {Gap()}
                </View>
                <View style={[IrrigationPageStyle.tabContainer, { height: 70 }]}>
                    {tabBTNGreen('CREATE NEW GROUP', 220)}
                </View>
            </View>
        )
    }


    const motor1GroupCycle = (groupName, lastTimeOff, nextOnTime, rescheduled, status) => {
        return (
            <View>
                <View style={[IrrigationPageStyle.motor1GroupManualCard, { height: 220 }]}>
                    <Text style={IrrigationPageStyle.modeText}>{groupName}</Text>
                    <View style={IrrigationPageStyle.valveCardParts}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <Text style={IrrigationPageStyle.modeText}>LAST TIME OFF : <Text style={IrrigationPageStyle.tabText}>{lastTimeOff}</Text></Text>
                            <Text style={IrrigationPageStyle.modeText}>NEXT ON TIME : <Text style={IrrigationPageStyle.tabText}>{nextOnTime}</Text></Text>
                            <Text style={IrrigationPageStyle.modeText}>RESCHEDULED : <Text style={IrrigationPageStyle.tabText}>{rescheduled}</Text></Text>
                        </View>
                        <View>
                            <Text style={IrrigationPageStyle.modeText}>STATUS{'\n'}<Text style={{ color: 'red' }}>{status}</Text></Text>
                        </View>
                    </View>
                    <View style={[IrrigationPageStyle.valveCardParts, { top: 20 }]}>
                        {tabBTNGreen('SHOW', 80)}
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={handleToggle1}>
                                <Icons style={{ height: 25, width: 25 }} name={isExpanded1 ? 'angle-double-up' : 'angle-double-down'} size={32} color='black' />
                            </TouchableOpacity>
                        </View>
                        {tabBTNGreen('EDIT', 80)}
                    </View>
                </View>
                {Gap()}
                <View>
                    {isExpanded1 && (
                        <View>
                            <Text>hi</Text>
                        </View>
                    )}
                    {Gap()}
                </View>
                <View style={[IrrigationPageStyle.tabContainer, { height: 70 }]}>
                    {tabBTNGreen('CREATE NEW GROUP', 220)}
                </View>
            </View>
        )
    }


    motor1GroupManual = (groupName, duration, lastTimeOff) => {
        return (
            <View>
                <View style={[IrrigationPageStyle.motor1GroupManualCard, { height: 180 }]}>
                    <Text style={IrrigationPageStyle.modeText}>{groupName}</Text>
                    <View style={IrrigationPageStyle.valveCardParts}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <Text style={IrrigationPageStyle.modeText}>DURATION : <Text style={IrrigationPageStyle.tabText}>{duration}</Text></Text>
                            <Text style={IrrigationPageStyle.modeText}>LAST TIME OFF : <Text style={IrrigationPageStyle.tabText}>{lastTimeOff}</Text></Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[IrrigationPageStyle.button, groupManualtoggle ? IrrigationPageStyle.activeButton : IrrigationPageStyle.inactiveButton, { left: 4 }]}
                                onPress={handleToggle}>
                                <Text style={IrrigationPageStyle.buttonText}>{groupManualtoggle ? 'ON' : 'OFF'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[IrrigationPageStyle.valveCardParts, { top: 20 }]}>
                        {tabBTNGreen('SHOW', 80)}
                        {tabBTNGreen('EDIT', 80)}
                    </View>
                </View>
                {Gap()}
                <View style={[IrrigationPageStyle.tabContainer, { height: 70 }]}>
                    {tabBTNGreen('CREATE NEW GROUP', 220)}
                </View>
            </View>

        )
    }

    const renderTabContent = () => {
        if (selectedTab == 'manual')
            return motor1GroupManual('AA', '00:10', '00:00')
        else if (selectedTab == 'cycle')
            return motor1GroupCycle('MM', '12-05-2023 11:34', 'Saturday 11:14 AM', 'Will Be Reschedule', 'OFF')
        else if (selectedTab == 'sensor')
            return motor1GroupSensor('Motor 7')
        else
            // return <></>
            return null


        // switch (selectedTab) {
        //   case 'manual':
        //     return <Text>Manual</Text>
        //   case 'cycle':
        //     return <Text>Cycle</Text>
        //   case 'sensor':
        //     return <Text>Sensor</Text>
        //   default:
        //     return null;
        // }
    };



    return (
        <View>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tabItem, {borderBottomWidth : activeTab === 'manual' ? 2 : 0 }]} onPress={() => handleTabPress('manual')}>
                    <Text style={[styles.tabText, {color : activeTab === 'manual' ? 'green' : 'black'}]}>MANUAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabItem, {borderBottomWidth : activeTab === 'cycle' ? 2 : 0 }]} onPress={() => handleTabPress('cycle')}>
                    <Text style={[styles.tabText, {color : activeTab === 'cycle' ? 'green' : 'black'}]}>CYCLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabItem, {borderBottomWidth : activeTab === 'sensor' ? 2 : 0 }]} onPress={() => handleTabPress('sensor')}>
                    <Text style={[styles.tabText, {color : activeTab === 'sensor' ? 'green' : 'black'}]}>SENSOR</Text>
                </TouchableOpacity>
            </View>
            <View>
                {renderTabContent()}
            </View>
        </View>
    )
}

export default Motor1Group;

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