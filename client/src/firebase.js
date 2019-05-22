import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAA4Y41EE5j9Q4hvlbcFtsJEJgeF40HaXo',
  authDomain: 'cashcal-8c861.firebaseapp.com',
  databaseURL: 'https://cashcal-8c861.firebaseio.com',
  projectId: 'cashcal-8c861',
  storageBucket: 'cashcal-8c861.appspot.com',
  messagingSenderId: '438573813715',
  appId: '1:438573813715:web:f386205c6b8ccfcc'
});

export default app;
