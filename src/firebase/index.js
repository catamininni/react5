import firebase from 'firebase/app';
import 'firebase/firestore';
const app = firebase.initializeApp({
    apiKey: "AIzaSyDujJpBLbyxkZguu-O2ytxxH4PnrEXOsTk",
  authDomain: "fir-b7675.firebaseapp.com",
  projectId: "fir-b7675",
  storageBucket: "fir-b7675.appspot.com",
  messagingSenderId: "601947357355",
  appId: "1:601947357355:web:7ea9d0eab96d4eb97437ee"
});
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}