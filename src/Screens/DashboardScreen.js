import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import DashboardData from '../component/Component/DashboardData'
import LinearGradient from 'react-native-linear-gradient'


const DashboardScreen = ({navigation}) => {
    return (
        <LinearGradient style={styles.linearGradient} colors={['grey', 'white']} >
            <ScrollView style={{ top: 10 }}>
                <View>
                    <View style={styles.topcard}>
                        <Image resizeMode='cover' source={{ uri: 'https://media.istockphoto.com/id/1334408594/photo/farmer-in-the-field.jpg?s=612x612&w=0&k=20&c=L-oyfEPkHqy97AcnN8sD13Opdwaa9VfXQJBQc0svYCg=' }} style={styles.adminIcon} />
                        <View style={{ bottom: 30 }}>
                            <Text style={{ paddingBottom: 6, textAlign: 'center', color: 'black', fontSize: 22, fontWeight: '700', color: 'black', letterSpacing: 1 }}>Test - 1</Text>
                            <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>8526187881</Text>
                            <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>8610794589</Text>
                        </View>
                    </View>
                    <View><Text></Text></View>
                    <View style={styles.centerCard}>
                        <Text style={{ left: 20, paddingBottom: 6, textAlign: 'center', color: 'black', fontSize: 22, fontWeight: '700', color: 'black', letterSpacing: 1 }}>Test Farm</Text>
                        <View style={{ right: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp53HfW_t-wd5SZLNsoPNgf5h8AeFhVDC94g&usqp=CAU' }} style={{ height: 50, width: 50 }} resizeMode='cover' />
                            <Text style={{ top: 10, color: 'black', fontSize: 20, fontWeight: 'bold', letterSpacing: 1, }}>  28 <Text style={{ fontSize: 14, marginBottom: 20 }}>o</Text> C</Text>
                        </View>
                    </View>
                    {/* <View><Text></Text></View> */}
                    <View style = {{top : 10, botton : 20}}>
                        <View style={{ flex: 4, flexDirection: "row", flexWrap: 'wrap' }}>
                            {
                                DashboardData.map((item, index) => {
                                    return (
                                        <View key={index}>
                                            <TouchableOpacity style={styles.dashboardOptions} onPress={()=>navigation.navigate(item.CardNavi)}>
                                                <Text style={styles.dashboardOptionsText}>{item.CardName}</Text>
                                                <Image source={{ uri: item.CardImg }} style={{ height: 100, width: 100, alignSelf: "center" }} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View><Text></Text></View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    topcard: {
        flex: 1,
        width: 390,
        height: 220,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        marginLeft : 10
    },
    dashboardOptions: {
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 15,
        left: 15,
        // height:130,
        paddingVertical: 8,
        elevation: 5,
        width: 170,
        hheight: 170,
        borderRadius: 15,
        // justifyContent:'space-between'
    },
    dashboardOptionsText: {
        marginVertical: 10,
        marginHorizontal: 15,
        //   alignSelf:"center",
        textAlign: 'center',
        fontSize: 16,
    },
    linearGradient: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderRadius: 5,
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adminIcon: {
        height: 180,
        width: 180,
        borderRadius: 100,
    },
    centerCard: {
        flex: 1,
        width: 390,
        height: 70,
        marginLeft : 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    }

});

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

