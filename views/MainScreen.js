import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

const details = require('../data/details');

type Props = {};
export default class MainScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to VinJyo!
                </Text>
                <View style={styles.desContainer}>
                    <Text style={styles.instructions}>
                        {details.appDescription}
                    </Text>
                </View>
                <Button title={'Click to proceed'} onPress={() => this.props.navigation.navigate('TitlesScreen', {
                    title: details.title
                })}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontFamily: 'NanumBrushScript-Regular',
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
    },
    desContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 80,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        fontSize: 18,
        marginBottom: 5,
        fontFamily: 'NanumBrushScript-Regular',
    },
});
