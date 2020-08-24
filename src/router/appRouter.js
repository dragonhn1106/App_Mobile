import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from '../components/Home/HomeComponent';
import HeaderComponent  from '../common/HeaderComponent'

export default class AppRouter extends Component {
  render() {
    const TabBottom = createBottomTabNavigator();
    const HomeStack = createStackNavigator();
    const StackHomePage = ()=>(
      <HomeStack.Navigator
        
      >
        <HomeStack.Screen name="Home" component={HomeComponent} 
        options={{
          title: "Trang chu",
          header: (props)=> (
            <HeaderComponent {...props}/>
        ),
      
      }}

        
        />

        
       
    </HomeStack.Navigator>
    )
    return (
      
        <TabBottom.Navigator>
          <TabBottom.Screen name="Home" component={StackHomePage}  options={{title: "Trang chu"}}/>
          <TabBottom.Screen name="Settings" component={HomeComponent} />
        </TabBottom.Navigator>

    )
  }
}
