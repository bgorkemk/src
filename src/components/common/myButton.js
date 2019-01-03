import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Spinner} from './spinner';

const MyButton = ({spinner, title, onPress, color}) => {

    const content = spinner ? (
        <Spinner></Spinner>
    ): (
        <Button onPress={onPress} 
                    color={color}
                    title={title}/>       
    )

    return (
        <View style= {styles.buttonWrapper}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper:{
        marginTop: 20,
        borderRadius: 15,
        height: 19,
        fontSize: 20
    },
});

export {MyButton}