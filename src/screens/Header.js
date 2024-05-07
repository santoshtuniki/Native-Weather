// module imports
import { StyleSheet, useColorScheme } from 'react-native';
import { Appbar } from 'react-native-paper';

// util imports
import { COLORS } from '../utils';

export const Header = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Content
                title="Weather App"
                titleStyle={styles.title}
                color={isDarkMode ? COLORS.white : COLORS.black}
            />
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },
});
