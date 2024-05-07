export const weatherImage = (weather) => {
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
