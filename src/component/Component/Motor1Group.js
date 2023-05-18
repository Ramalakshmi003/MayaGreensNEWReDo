import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'

export default function Motor1Group() {
    const [selectedTab, setSelectedTab] = useState('');

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
    };

    const renderTabContent = () => {
        if(selectedTab == 'manual')
            return <Text>Manual</Text>
        else if(selectedTab == 'cycle')
            return <Text>Cycle</Text>
        else if(selectedTab == 'sensor')
            return <Text>Sensor</Text>
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
                <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('manual')}>
                    <Text style={styles.tabText}>MANUAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('cycle')}>
                    <Text style={styles.tabText}>CYCLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('sensor')}>
                    <Text style={styles.tabText}>SENSOR</Text>
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