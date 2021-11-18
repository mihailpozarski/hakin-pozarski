import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXIMOUCzLpU1VqTthTD6soIkpFzwEIoeM",
    authDomain: "hakin-pozarski.firebaseapp.com",
    projectId: "hakin-pozarski",
    storageBucket: "hakin-pozarski.appspot.com",
    messagingSenderId: "642880611971",
    appId: "1:642880611971:web:742fdfe558d6cd29f15db6",
    measurementId: "G-7LVQBDGCJ9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export function getFirestore() {
    return firebase.firestore(app);
}