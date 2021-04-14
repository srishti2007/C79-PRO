import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyACqJ2tDBgwOoOVdoK93v_KYvqobb2vsmg",
    authDomain: "barter-system-b19e1.firebaseapp.com",
    projectId: "barter-system-b19e1",
    storageBucket: "barter-system-b19e1.appspot.com",
    messagingSenderId: "390910801665",
    appId: "1:390910801665:web:fb15e1fe18adbd1e508d00"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();