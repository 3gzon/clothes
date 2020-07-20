import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()
firestore.collection('users').doc('FU7ocCUX9D2Ol4zsTOKP').collection('cartItems').doc('0DMn2SOLyLExeR0AepjC')

//second way of query db
firestore.doc('/users/FU7ocCUX9D2Ol4zsTOKP/cartItems/0DMn2SOLyLExeR0AepjC')

firestore.collection('/users/FU7ocCUX9D2Ol4zsTOKP/cartItems')