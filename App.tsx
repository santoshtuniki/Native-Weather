/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import { backgroundStyle, textStyle, viewStyle } from './src/utils';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={backgroundStyle(isDarkMode)}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle(isDarkMode).backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle(isDarkMode)}
            >
                <View style={viewStyle(isDarkMode)}>
                    <Text style={[styles.text, textStyle(isDarkMode)]}>
                        Hello World
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        paddingVertical: 5,
    },
});
