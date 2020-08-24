import React, { Component } from 'react';
import { View, Text, SafeAreaView , StyleSheet} from 'react-native';

class index extends Component {
    render() {
        return (
            // <SafeAreaView>
                <View style={Styles.MainWrap}>
                    <View style={Styles.container}>
                        <Text style={Styles.ContentTitleTop}>Chao DuongCv</Text>
                        <Text style={Styles.ContentTitleBottom}>Điểm bạn đang có 20000</Text>
                    </View>
                </View>
            // </SafeAreaView>
        );
    }
}

const Styles = StyleSheet.create({
    MainWrap:{
    //   flex :1,
    height: 130,
    backgroundColor:"orange"

    },
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    ContentTitleTop:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    ContentTitleBottom:{
        color: "#fff",
        fontSize: 18
    }

})

export default index;