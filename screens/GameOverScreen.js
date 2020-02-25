import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    // source={{uri: 'url here')}}  always set width and height on web images
                    style={styles.image} />
            </View>
            <View style={styles.resultsContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}.</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultsContainer: {
        marginHorizontal: 30,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
});

export default GameOverScreen;