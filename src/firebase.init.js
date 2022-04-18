// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5NM0Knor5p6OXMqkChIjhD8XBBuB8cds",
    authDomain: "gym-center-f59ed.firebaseapp.com",
    projectId: "gym-center-f59ed",
    storageBucket: "gym-center-f59ed.appspot.com",
    messagingSenderId: "783646735202",
    appId: "1:783646735202:web:107fd8e8580c97a4b28a3b"
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
