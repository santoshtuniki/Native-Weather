// module imports
import {
    StyleSheet,
    useColorScheme,
} from 'react-native';
import { Appbar } from 'react-native-paper';

// util imports
import { COLORS } from '../utils';

export const Header = ({ name }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Content
                title={name}
                titleStyle={styles.title}
                color={isDarkMode ? COLORS.WHITE : COLORS.BLACK}
            />
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.PRIMARY,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },
});
