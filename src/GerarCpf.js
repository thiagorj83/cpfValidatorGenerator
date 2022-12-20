import * as React from 'react';
import { Text, View,Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {genFakeCpf} from './generator';
import {cpfValidator} from './validator';


export function Gerarcpf() {

  // const [text, setText] = React.useState('');
  const [numero, setNum] = React.useState('');
  const f2= new cpfValidator()
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{flex:2, color:'black',fontSize: 20,top:80}}>Número válido: {numero}</Text>


      <View style={{flex:2, flexDirection: "row",top:80 }}>
        <View style={{ marginRight: 10 }}>
          <Button
            title="GERAR"
            onPress={(numero)=> setNum(genFakeCpf())}
          />
        </View>
        <View style={{ marginRight: 10 }}>
          <Button
            title="LIMPAR"
            onPress={(numero) => setNum('')}
          />
        </View>

      </View>
    </View>
  );
}
