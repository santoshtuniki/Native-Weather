#### Cross-platform Material Design for React Native

    npm i react-native-paper

#### From react-native-paper v5, for handling safe area.

    npm i react-native-safe-area-context

#### On React-Native-CLI, you also need 

    npm i react-native-vector-icons.

#### Now run command

    npm run android

    npm start

------

#### To make font management smoother on Android, use this method:

Edit android/app/build.gradle (NOT android/build.gradle) and add:

    apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")