// module imports
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

// component im ports
import { Header } from './Header';
import { textStyle } from '../utils';

export const Search = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.container}>
            <Header/>
            <Text style={textStyle(isDarkMode)}>Search Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
