import React, { Component } from 'react'
import HeaderHomeComponent from './HeaderHomeComponent'
import { View } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderHomeComponent />
      </View>
    )
  }
}
