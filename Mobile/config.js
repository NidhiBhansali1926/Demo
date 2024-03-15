// firebase config
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBUvKTFn3CxHZNjPMw5_pizDZz37B4CDH4',
  authDomain: 'ics-travel-hotline.firebaseapp.com',
  projectId: 'ics-travel-hotline',
  storageBucket: 'ics-travel-hotline.appspot.com',
  messagingSenderId: '607565881595',
  appId: '1:607565881595:web:bbf9abc7b664d9fc91105e',
  measurementId: 'G-YS4D7WY5K2',
};

let app;
if (firebase?.apps?.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
