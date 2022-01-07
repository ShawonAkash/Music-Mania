import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAeIWDSQy8_CYWjwYgdTvNXHgZHTdoYcDc",
  authDomain: "muso-ninjas-c109c.firebaseapp.com",
  projectId: "muso-ninjas-c109c",
  storageBucket: "muso-ninjas-c109c.appspot.com",
  messagingSenderId: "1080562454669",
  appId: "1:1080562454669:web:7bd15026cab96749b892c4"
};
//init firebase
firebase.initializeApp(firebaseConfig)
//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }

