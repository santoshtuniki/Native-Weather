// module imports
import {
    useColorScheme,
} from 'react-native';
import { Button } from 'react-native-paper';

// util imports
import { themeStyle } from '../utils';

export const ButtonComp = ({ fetchCity }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Button
            icon="content-save"
            mode="contained"
            theme={themeStyle()}
            dark={isDarkMode}
            style={{ margin: 20 }}
            onPress={() => fetchCity()}
        >
            ENTER
        </Button>
    );

};
