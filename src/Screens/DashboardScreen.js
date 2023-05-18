import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import DashboardData from '../component/Data/DashboardData'
import LinearGradient from 'react-native-linear-gradient'
import { DashboardScreenStyles } from '../component/Styles/DashboardScreenStyles'

const userDetailsCard = (userName, userMobileNo1, userMobileNo2, userImage) => {
    return (
        <View style={DashboardScreenStyles.topcard}>
            <Image resizeMode='cover' source={{ uri: userImage }} style={DashboardScreenStyles.adminIcon} />
            <View style={{ bottom: 30 }}>
                <Text style={DashboardScreenStyles.header1}>{userName}</Text>
                <Text style={DashboardScreenStyles.text1}>{userMobileNo1}</Text>
                <Text style={DashboardScreenStyles.text1}>{userMobileNo2}</Text>
            </View>
        </View>
    )
}

const userFarmDetails = (userFarmName,temperature) => {
    return (
        <View style={DashboardScreenStyles.centerCard}>
            <Text style={[DashboardScreenStyles.header1,{left :15}]}>{userFarmName}</Text>
            <View style={{ right: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp53HfW_t-wd5SZLNsoPNgf5h8AeFhVDC94g&usqp=CAU' }} style={{ height: 50, width: 50 }} resizeMode='cover' />
                {/* <Text style={DashboardScreenStyles.text}>{temperature}<Text style={DashboardScreenStyles.superscript}>o</Text>C</Text> */}
                <Text style={{ top: 10, color: 'black', fontSize: 20, fontWeight: 'bold', letterSpacing: 1, }}>  28 <Text style={{ fontSize: 14, marginBottom: 20 }}>o</Text> C</Text>
            </View>
        </View>
    )
}

export const Gap = () => {
    return (
        <View><Text></Text></View>
    )
}


const DashboardScreen = ({ navigation }) => {
    return (
        <LinearGradient style={DashboardScreenStyles.linearGradient} colors={['grey', 'white']} >
            <ScrollView>
                {Gap()}
                <View>
                    {userDetailsCard('Test - 1', '8526187881', '8610794589', 'https://media.istockphoto.com/id/1334408594/photo/farmer-in-the-field.jpg?s=612x612&w=0&k=20&c=L-oyfEPkHqy97AcnN8sD13Opdwaa9VfXQJBQc0svYCg=')}
                    {Gap()}
                    {userFarmDetails('Test Farm','28')}
                    {/* <View><Text></Text></View> */}
                    <View style={{ top: 10, botton: 20 }}>
                        <View style={{ flex: 4, flexDirection: "row", flexWrap: 'wrap' }}>
                            {
                                DashboardData.map((item, index) => {
                                    return (
                                        <View key={index}>
                                            <TouchableOpacity style={DashboardScreenStyles.dashboardOptions} onPress={() => navigation.navigate(item.CardNavi)}>
                                                <Text style={DashboardScreenStyles.dashboardOptionsText}>{item.CardName}</Text>
                                                <Image source={{ uri: item.CardImg }} style={{ height: 100, width: 100, alignSelf: "center" }} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    {Gap()}
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default DashboardScreen;



// import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
// import React from 'react'
// import LinearGradient from 'react-native-linear-gradient'
// import DashboardData from '../components/Component/DashboardData'

// const Card = ({ name, imageUri }) => {
//     return (
//         <View style={styles.card}>
//             <Text style={styles.cardText}>{name}</Text>
//             <Image
//                 resizeMode="contain"
//                 style={styles.cardImage}
//                 source={{ uri: imageUri }}
//             />
//         </View>
//     );
// };

// const renderCard = ({ item }) => (
//     <Card name={item.CardName} imageUri={item.CardImg} />
// );

// export default function DashboardScreen() {
//     return (
//         <View style={styles.container}>
//             <LinearGradient
//                 colors={['grey', 'white']}
//                 style={styles.linearGradient}
//             >
//                 <ScrollView>
//                     <View style={styles.farmerIcon}>

//                     </View>
//                     <FlatList
//                         data={DashboardData}
//                         renderItem={renderCard}
//                         keyExtractor={(item) => item.id}
//                         numColumns={2}
//                     />
//                 </ScrollView>
//             </LinearGradient>
//         </View>

//     )
// }

// const styles = StyleSheet.create({
//     // topContainer: {
//     //     backgroundColor: 'white',
//     //     height: '100%',
//     //     width: '100%'
//     // },
//     container: {
//         flex: 1,
//         height: '100%',
//         width: "100%"
//         // paddingHorizontal: 10,
//         // paddingVertical: 20
//     },
//     card: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         margin: 10,
//         borderWidth: 1,
//         borderColor: "#ccc",
//         borderRadius: 20,
//         padding: 10,
//         backgroundColor: 'white'
//     },
//     cardImage: {
//         width: 100,
//         height: 100,
//         marginBottom: 10
//     },
//     cardText: {
//         fontSize: 16,
//         fontWeight: "bold",
//         textAlign: "center"
//     },
    // linearGradient: {
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //     // borderRadius: 5,
    //     height: '100%',
    //     width: '100%',
    // },
//     farmerIcon: {
//         flex: 4,
//         flexDirection: 'column',
//         backgroundColor: 'white',
//         margin: 10,
//         borderRadius: 5
//     }
// });

