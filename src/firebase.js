import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAl0sWvDM5yWaSrwnJaPiRQlIB_tDDm0v0",
    authDomain: "react-slack-clone-da31e.firebaseapp.com",
    databaseURL: "https://react-slack-clone-da31e.firebaseio.com",
    projectId: "react-slack-clone-da31e",
    storageBucket: "react-slack-clone-da31e.appspot.com",
    messagingSenderId: "822468626276",
    appId: "1:822468626276:web:17c35bb6831b55194e1c71",
    measurementId: "G-Q3PZRK2BW4"
};

firebase.initializeApp(config);

export default firebase;