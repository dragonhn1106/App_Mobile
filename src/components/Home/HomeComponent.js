import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ListItemNhaThauUyTin from '../../common/ListItemComponent'
export default class HomeComponent extends Component {
  render() {
    return (
      <ScrollView>
        <View style = {Styles.container}>            
          <ListItemNhaThauUyTin />
        </View>
      </ScrollView>
    )
  }
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
})
