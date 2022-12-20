import { cpfValidator } from './validator';
import { Text, View, TextInput, styles, StyleSheet, Button } from 'react-native';
import * as React from 'react';




export function genFakeCpf() {
    f1=new cpfValidator()
    let isFakeCpfValid = false
    let fakeCpf = 0
    while (isFakeCpfValid === false) {
        fakeCpf = parseInt(Math.random() * (99999999999 - 11111111111))
        isFakeCpfValid = f1.isvalid(fakeCpf.toString())?true:false;

    }

    return fakeCpf
}