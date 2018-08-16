import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCRSI7MyvPceMgAfvj04iAd4EI7GyHZdio",
    authDomain: "onlinestore-84097.firebaseapp.com",
    databaseURL: "https://onlinestore-84097.firebaseio.com",
    projectId: "onlinestore-84097",
    storageBucket: "onlinestore-84097.appspot.com",
    messagingSenderId: "1033319359550"
};
firebase.initializeApp(config);

//firebase utils 
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase

const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

//firebase collections 
const usersCollection = db.collection('users')
const carsCollection = db.collection('cars')
const featuredCarsCollection = db.collection('featuredCars')

export {
    db,
    auth, 
    currentUser,
    usersCollection,
    carsCollection,
    featuredCarsCollection
}
