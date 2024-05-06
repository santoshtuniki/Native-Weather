import { StyleSheet } from 'react-native';
import { Appbar, Title } from 'react-native-paper';

export const Header = () => {

    return (
        <Appbar.Header style={styles.header}>
            <Title>
                Weather App
            </Title>
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {

    },
});
