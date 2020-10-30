import React from 'react';

import { View, StyleSheet, Text, Button, ScrollView, FlatList } from 'react-native';

import AddGoals from './AddGoals/AddGoals.component';
import RenderList from './renderList/RenderList.component';

class Component extends React.Component {
    constructor() {
        super();
        this.state = { list: [] };
        this.styleSheet = StyleSheet.create({
            parent: {
                backgroundColor: '#afaeae',
                height: '100vh',
                width: '100vw',
                fontFamily: 'Algerian'
            },
            child3: {
                backgroundColor: 'green',
                flex: 5,
                margin: '1%',
                alignItems: 'center'
            }
        })
    }

    pushToList = (value) => {
        this.setState(prevState => {
            let list = prevState.list;
            let key = prevState.list.length ? prevState.list[prevState.list.length - 1].key + 1 : 0;
            return ({
                list: [...list, { key: key, value: value }]
            });
        });
    }

    popFromList = (index) => {
        this.setState(prevState => {
            var list = prevState.list;
            list.splice(index, 1);
            return { list: list };
        });
    }

    render() {
        return (
            <View style={this.styleSheet.parent}>
                <AddGoals add={this.pushToList} />
                <RenderList data={this.state.list} pop={this.popFromList} />
            </View>
        );
    }
}

export default Component;