// module imports
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// util imports
import { backgroundStyle, COLORS } from './src/utils';

// component imports
import { Search } from './src/screens';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={[styles.container, backgroundStyle(isDarkMode)]}>
            <SafeAreaProvider>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={COLORS.PRIMARY}
                />
                {/* <View style={viewStyle(isDarkMode)}> */}
                <Search />
                {/* </View> */}
            </SafeAreaProvider>
        </SafeAreaView>
    );

};

export default App;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    text: {
        fontSize: 18,
        paddingVertical: 5,
    },
});
