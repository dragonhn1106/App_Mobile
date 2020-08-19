import React, { Component } from 'react'
import AppRouter from './src/router/appRouter'
import { View, Text } from 'react-native'



export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
      
        <AppRouter />
      </View>
    )
  }
}
