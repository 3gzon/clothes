import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCfrKBbzCyOjQElPbjLR0Qp_ucz5hlObjc",
    authDomain: "clothes-db-1d275.firebaseapp.com",
    databaseURL: "https://clothes-db-1d275.firebaseio.com",
    projectId: "clothes-db-1d275",
    storageBucket: "clothes-db-1d275.appspot.com",
    messagingSenderId: "732732085253",
    appId: "1:732732085253:web:cfed4060b6c24e999b786c",
    measurementId: "G-LYE2XTSLJD"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;