// module imports
import { useState } from 'react';
import {
    useColorScheme,
    StyleSheet,
    View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

// util imports
import { CONSTANTS, themeStyle, viewStyle } from '../utils';

// component im ports
import { Header } from './Header';

export const Search = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const [city, setCity] = useState('');
    const [cities, setCities] = useState([]);

    const fetchCity = async (city) => {
        try {
            setCity(city);
            const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=${process.env.API_KEY}`;
            const res = await fetch(url);
            const data = res.json();
            console.log(data);
        } catch (error) {
            console.log('Error fetching data', error);
        }
    };

    return (
        <View style={viewStyle(isDarkMode)}>
            <Header name={CONSTANTS.TITLE} />
            <TextInput
                label={'City Name'}
                theme={themeStyle()}
                style={{ marginBottom: 10 }}
                value={city}
                onChangeText={(text) => setCity(text)}
            />
            <Button
                icon="content-save"
                mode="contained"
                theme={themeStyle()}
                dark={isDarkMode}
                style={styles.button}
                onPress={() => console.log('Pressed')}
            >
                Save Changes
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        margin: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
    },
});
