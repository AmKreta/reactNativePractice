import React from 'react';
import { View, ScrollView, Text, FlatList, Button, StyleSheet } from 'react-native';

const RenderList = ({ data, pop }) => {

    const styleSheet = StyleSheet.create({
        child2: {
            flex: 1,
            margin: '1%',
            textAlign: 'center'
        },
        list: {
            flexWrap: 'no-wrap',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1%',
            backgroundColor: '#ccc',
            borderColor: 'black',
            borderWidth: '1px',
            margin: '1%'
        }
    });
    return (
        <ScrollView style={styleSheet.child2}>
            <Text>AddedPoints:-</Text>
            <FlatList
                keyExtractor={(item, index) => index}
                data={data}
                renderItem={data => (
                    <View style={styleSheet.list} key={data.index}>
                        <Text>{data.item.value}</Text>
                        <Button title='delete' onPress={e => pop(data.index)} />
                    </View>
                )}
            />
        </ScrollView>
    );
}

export default RenderList;
