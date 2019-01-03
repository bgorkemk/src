import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

const Input = ({text, inputPlaceHolder, secureTextEntry, onChangeText, value}) => {

    const {inputWrapper, textStyle, inputStyle} = styles;

    return (
        <View style={inputWrapper}>
            <Text style={textStyle}> {text}</Text>
            <TextInput style={inputStyle}
                       secureTextEntry={secureTextEntry}
                       placeholder={inputPlaceHolder}
                       onChangeText={onChangeText}
                       value={value}
                       ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({ 
    inputWrapper:{
        flexDirection: 'row',
        height: 50,
        width: 'auto',
        borderColor:'#e5e5e8',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    textStyle:{
        fontSize: 17,
        paddingLeft: 20,
        flexGrow:1
    },
    inputStyle:{
        fontSize: 17,
        flexGrow:2
    }
});

export {Input}