import { Colors } from 'react-native/Libraries/NewAppScreen';

export const backgroundStyle = (isDarkMode: boolean) => ({
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
});

export const textStyle = (isDarkMode: boolean) => ({
    color: isDarkMode ? Colors.light : Colors.dark,
});

export const viewStyle = (isDarkMode: boolean) => ({
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
});
