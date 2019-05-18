import {Component} from 'react';
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from '../styles';

class TitlesScreen extends Component {
    render() {
        const data = require('../data/data');
        const title = this.props.navigation.getParam('title', '');
        const titleButtons = data.map(({title, desc}, index) => {
            return (
                <TouchableOpacity key={index} style={styles.titleButton}
                                  onPress={() => this.props.navigation.navigate('DataScreen', {
                                      title: title,
                                      body: desc
                                  })}>
                    <Text style={styles.bodyTextStyle}> {title} </Text>
                </TouchableOpacity>
            )
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.headerTextStyle}> Back </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                </View>
                <ScrollView style={styles.body}>
                    {titleButtons}
                </ScrollView>
            </View>
        );
    }
}

export default TitlesScreen
