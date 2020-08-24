import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class index extends Component {
    render() {
        return (
            <View style={Styles.MainWrap}>
                <View style={Styles.container} >
                    <View style={Styles.row}>
                        <View>
                            <Text style={Styles.fontTitle}>Đội thợ và nhà thầu uy tín</Text>
                        </View>
                        <View>
                            <TouchableOpacity >
                                <Text style={Styles.fontBtn}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Styles.row}>
                        <View style={Styles.items}>
                            <View style={Styles.mainContentItem}>
                                <View style={Styles.boxImage}>

                                </View>
                                <View style={Styles.boxDetail}>
                                    <Text style={{fontSize: 13, fontWeight:"bold", color:"blue"}}>Đinh thái bình</Text>
                                    <Text  numberOfLines={1} style={{fontSize: 12,  color:"gray"}}>Cái đéo gì cũng xây kể car code</Text>
                                    <Icon name="rocket" size={30} color="#900" />
                                </View>
                            </View>
                        </View>
                        <View style={Styles.items}>

                        </View>
                        <View style={Styles.items}>

                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    MainWrap:{
        marginTop: 30
    },
    container: {
        flex: 1
    },
    row:{
        flexDirection: "row",
        justifyContent:"space-between",
        marginVertical: 5
    },
    items:{
        width: Dimensions.get('screen').width / 3 - 20,
        minHeight: 150,
        backgroundColor: "red",
        borderRadius: 10,
        overflow: "hidden"
    },
    mainContentItem:{
        flex: 1,
        flexDirection: "column"
    },
    boxImage:{
        flex: 4,
    },
    boxDetail:{
        flex: 1,
        backgroundColor:"white",
        justifyContent:"space-between",
        padding: 8
    },
    titleTop:{
        marginVertical: 10
    },
    fontTitle:{
        fontSize: 16,
        fontWeight: "bold"
    },
    fontBtn:{
        color:"blue",
        fontSize: 14
    }
})
export default index;