// module imports
import React, { useState } from 'react';
import {
    useColorScheme,
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import { TextInput } from 'react-native-paper';

// util imports
import { COLORS, CONSTANTS, themeStyle, viewStyle } from '../utils';
import { SECRET } from '../secrets';

// component im ports
import { ButtonComp, Header } from '../components';

const weatherImage = (weather) => {
    switch (weather) {
    case 'Clear':
        return require('../images/clear.png');
    case 'Clouds':
        return require('../images/clouds.png');
    case 'Rain':
        return require('../images/rain.png');
    case 'Drizzle':
        return require('../images/drizzle.png');
    case 'Mist':
        return require('../images/mist.png');
    case 'Snow':
        return require('../images/snow.png');
    default:
        return require('../images/clear.png');
    }
};

export const Search = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [data, setData] = useState(null);

    const fetchCity = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${SECRET}`;
            const response = await fetch(url);
            const dataResponse = await response.json();
            if (dataResponse?.cod === 200) {
                setError('');
                setData(dataResponse);
                console.log(dataResponse?.weather[0].icon);
            } else {
                setError(dataResponse?.message ?? '');
                setData(null);
            }
        } catch (err) {
            console.log('Error fetching data', err);
        }
    };

    return (
        <View style={viewStyle(isDarkMode)}>
            <Header name={CONSTANTS.TITLE} />
            <TextInput
                label={'City Name'}
                theme={themeStyle()}
                value={city}
                onChangeText={(text) => setCity(text)}
            />
            {
                error?.length > 0 &&
                <Text style={styles.error}>{error}</Text>
            }
            {
                error?.length === 0 &&
                <ButtonComp fetchCity={fetchCity} />
            }
            {
                data &&
                <Image
                    source={weatherImage(data.weather[0].main)}
                    // source={require('../images/clear.png')}
                    style={styles.image}
                />
            }
        </View>
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '700',
    },
    error: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: COLORS.RED,
        marginVertical: 10,
    },
    image: {
        margin: 20,
        width: '90%',
        aspectRatio: 14 / 9,
        borderColor: 'red',
        borderWidth: 2,
    },
});
