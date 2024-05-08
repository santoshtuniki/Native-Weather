// module imports
import {
    useColorScheme,
} from 'react-native';
import { Button } from 'react-native-paper';

// util imports
import { themeStyle } from '../utils';

export const ButtonComp = ({ message, icon, callback }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Button
            icon={icon}
            mode="contained"
            theme={themeStyle()}
            dark={isDarkMode}
            style={{ margin: 20 }}
            onPress={() => callback()}
        >
            {message}
        </Button>
    );

};
