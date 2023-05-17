import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'

export default function Motor1Group() {

    const [selectedTab1, setSelectedTab1] = useState('');

    const handleGroupTabPress = (tab) => {
        setSelectedTab1(tab);
    };

    const renderGroupTabContent = () => {
        switch (selectedTab1) {
          case 'manual':
            return manualtab();
          case 'cycle':
            return cycletab();
          case 'sensor':
            return sensortab();
          default:
            return null;
        }
      };

    const manualtab = () => {
        return(
            <Text>Manual</Text>
        )
    }

    const cycletab = () => {
        return(
            <Text>Cycle</Text>
        )
    }

    const sensortab = () => {
        return(
            <Text>Sensor</Text>
        )
    }


    return (
        <View>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleGroupTabPress('manual')}>
                    <Text style={styles.tabText}>MANUAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleGroupTabPress('cycle')}>
                    <Text style={styles.tabText}>CYCLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleGroupTabPress('sensor')}>
                    <Text style={styles.tabText}>SENSOR</Text>
                </TouchableOpacity>
            </View>
            <View>
                {renderGroupTabContent()}
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