// module imports
import React, { useState } from 'react';
import {
    useColorScheme,
    StyleSheet,
    View,
    Text,
    Image,
    Keyboard,
} from 'react-native';
import { TextInput } from 'react-native-paper';

// util imports
import {
    COLORS, ICONS, MESSAGE, CONSTANTS, textStyle, viewStyle, themeStyle,
} from '../utils';
import { SECRET } from '../secrets';

// component imports
import { ButtonComp, Header } from '../components';
import { weatherImage } from './getImage';

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
                setData(dataResponse);
                setError('');
            } else {
                setError(dataResponse?.message ?? '');
                setData(null);
            }
        } catch (err) {
            console.log('Error fetching data', err);
        }

        Keyboard.dismiss();
    };

    const clearInput = () => {
        setData(null);
        setError('');
        setCity('');
    };

    return (
        <View style={[{ height: '100%' }, viewStyle(isDarkMode)]}>
            <Header name={CONSTANTS.TITLE} />
            <TextInput
                label={CONSTANTS.LABEL}
                theme={themeStyle()}
                value={city}
                onChangeText={(text) => setCity(text)}
            />
            {
                error?.length > 0 &&
                <>
                    <ButtonComp
                        icon={ICONS.CLEAR}
                        message={MESSAGE.CLEAR}
                        callback={clearInput}
                    />
                    <Text style={styles.error}>{error}</Text>
                </>
            }
            {
                (city?.length > 0 && error?.length === 0 && !data) &&
                <ButtonComp
                    icon={ICONS.SAVE}
                    message={MESSAGE.ENTER}
                    callback={fetchCity}
                />
            }
            {
                data &&
                <>
                    <ButtonComp
                        icon={ICONS.CLEAR}
                        message={MESSAGE.CLEAR}
                        callback={clearInput}
                    />
                    <View>
                        <Text style={[styles.name, textStyle(isDarkMode)]}>{data?.name}</Text>
                        <Image
                            source={weatherImage(data?.weather[0].main)}
                            style={styles.image}
                        />
                        <Text style={[styles.description, textStyle(isDarkMode)]}>{data?.weather[0]?.description}</Text>
                        <View style={styles.row}>
                            <Text style={[styles.header, textStyle(isDarkMode)]}>Weather</Text>
                            <Text style={[styles.body, textStyle(isDarkMode)]}>{data?.weather[0].main}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={[styles.header, textStyle(isDarkMode)]}>Temp</Text>
                            <Text style={[styles.body, textStyle(isDarkMode)]}>{Math.round(data?.main?.temp)} &deg;C</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={[styles.header, textStyle(isDarkMode)]}>Humidity</Text>
                            <Text style={[styles.body, textStyle(isDarkMode)]}>{data?.main?.humidity}%</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={[styles.header, textStyle(isDarkMode)]}>Wind</Text>
                            <Text style={[styles.body, textStyle(isDarkMode)]}>{data?.wind.speed} km/h</Text>
                        </View>
                    </View>
                </>
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
    },
    image: {
        margin: 10,
        width: '90%',
        aspectRatio: 14 / 9,
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        padding: 5,
        marginBottom: 5,
        borderColor: COLORS.ASH,
        borderWidth: 1,
    },
    description: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 1,
    },
    header: {
        flex: 3,
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
        borderColor: COLORS.ASH,
        borderWidth: 1,
    },
    body: {
        flex: 2,
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
        borderColor: COLORS.ASH,
        borderWidth: 1,
    },
});
