import React from 'react';
import {StyleSheet, View, TextInput } from 'react-native';

const TextArea = ({placeholder, onChangeText}) => {
    return (
                       
        <View style={styles.textAreaWrapper}>
            <TextInput placeholder={placeholder}
                       onChangeText={onChangeText}
                       multiLine={true}
                       style={styles.textArea}
                       />            
        </View>
    )
}

const styles = StyleSheet.create({
    textAreaWrapper:{
        borderWidth: 1,
        borderColor: '#cfd8dc',
        height: 200        
    },
    textArea: {
        height: 200,
        fontSize: 18,
        color: '#7b8d93'
    }
});

export { TextArea };