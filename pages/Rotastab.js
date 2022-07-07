import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "./Home.js";
import Pesquisa from "./Pesquisa.js";
import Frutas from "./Frutas"

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
   <Tab.Navigator initialRouteName="Home">

        <Tab.Screen
            name="Frutas"
            component={Frutas}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="apple" color=
                {'black'} size={size}/>}}
       />
       
       <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color=
                {'black'} size={size}/>}}
       />

        <Tab.Screen
            name="Pesquisa"
            component={Pesquisa}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="magnify" color=
                {'black'} size={size}/>}}
       />

      

   </Tab.Navigator>
  );
}
