import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBTl_Tqo3Oo0sKJ5Bo_9BjEguywplS7Byg',
  authDomain: 'crwn-db-44785.firebaseapp.com',
  projectId: 'crwn-db-44785',
  storageBucket: 'crwn-db-44785.appspot.com',
  messagingSenderId: '914134929260',
  appId: '1:914134929260:web:6666ac8b75dd0964946d49',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
