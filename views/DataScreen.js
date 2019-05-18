import {Component} from 'react';
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from '../styles';

class DataScreen extends Component {
    render() {
        const {navigation} = this.props;
        const title = navigation.getParam('title', '');
        const body = navigation.getParam('body', '');
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.headerTextStyle}> Back </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTextStyle}> {title}</Text>
                </View>
                <ScrollView style={styles.body}>
                    <Text style={styles.bodyTextStyle}>{body}</Text>
                </ScrollView>
            </View>
        );
    }
}

export default DataScreen
