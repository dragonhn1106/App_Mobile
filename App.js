import React, { Component } from 'react'
import AppRouter from './src/router/appRouter'
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

export default class App extends Component {
  render() {
    return (
       
          <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
    )
  }
}
