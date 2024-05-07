// module imports
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

// util imports
import { textStyle, CONSTANTS } from '../utils';

// component im ports
import { Header } from './Header';

export const Search = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.container}>
            <Header name={CONSTANTS.TITLE} />
            <Text style={textStyle(isDarkMode)}>Search Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
