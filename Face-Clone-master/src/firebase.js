import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdo_kquuV_0iieQrfuxHXtpIkLfC5zZSw",
  authDomain: "facebookclone-a3052.firebaseapp.com",
  projectId: "facebookclone-a3052",
  storageBucket: "facebookclone-a3052.appspot.com",
  messagingSenderId: "101524427038",
  appId: "1:101524427038:web:7b8e259d14408d12acf90f",
  measurementId: "G-Y4MS8ETQMC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db
