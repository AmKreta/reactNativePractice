import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddGoals = ({ add }) => {

    const [textInput, setTextInput] = useState('');

    const inputRef = useRef();

    const clearTextInput = () => {
        inputRef.current.clear();
    };

    const styleSheet = StyleSheet.create({
        child1: {
            height: '8vh',
            width: '90vw',
            margin: '1%',
            flexWrap: 'no-wrap',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        textInput: {
            borderBottomColor: 'black',
            width: '50%',
            borderWidth: 1,
            padding: 5
        }
    });

    return (
        <View style={styleSheet.child1}>
            <Text>points</Text>
            <TextInput
                ref={inputRef}
                onChangeText={changedText => setTextInput(changedText)}
                placeHolder='enter something'
                style={styleSheet.textInput}
            />
            <Button
                onPress={() => {
                    add(textInput);
                    clearTextInput();
                }}
                title='Add'
            />
        </View>
    );
}

export default AddGoals;