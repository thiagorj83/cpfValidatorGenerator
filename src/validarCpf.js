import * as React from 'react';
import { Text, View, TextInput, styles , StyleSheet, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {cpfValidator} from './validator';
import { genFakeCpf } from './generator';


export function ValidarCpf() {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: 'black'
    },
  });


  const [text, setText] = React.useState('');
  const [resultado, setResultado] = React.useState('...');
  const f1= new cpfValidator()
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{flex:2, color:'black',fontSize: 20,top:80}}>O número fornecido é {resultado} </Text>
      <Text></Text>
      <TextInput
        placeholder='Digite o número a verificar'
        placeholderTextColor={'black'}
        style={styles.input}
        onChangeText={setText}
        value={text}
        
      />
      <View style={{flex:2, flexDirection: "row", top:80 }}>
                <View style={{ marginRight: 10 }}>
                    <Button
                        title="Analisar"
                        onPress={(resultado) => setResultado(f1.isvalid(text))}
                    />
                </View>
                <View>
                    <Button
                        title="Limpar"
                        onPress={(text) => setText('')}
                    />
                </View>
            </View>
    </View>
  );
}
