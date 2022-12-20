// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {ValidarCpf} from './src/validarCpf';
import {CpfSalvos} from './src/CpfSalvos';
import {Gerarcpf} from './src/GerarCpf';




const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',

        })}
      >
        <Tab.Screen options={{
          tabBarLabelStyle: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom:10,
          }
        }} name="Validar" component={ValidarCpf} />
        <Tab.Screen options={{
          tabBarLabelStyle: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom:10,
          }
        }} name="Gerar" component={Gerarcpf} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

