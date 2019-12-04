import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC0n38PVHtrFnXB4V0u_DFg7pEpW9jODzo',
  authDomain: 'fir-react-auth-57a74.firebaseapp.com',
  databaseURL: 'https://fir-react-auth-57a74.firebaseio.com',
  projectId: 'fir-react-auth-57a74',
  storageBucket: 'fir-react-auth-57a74.appspot.com',
  messagingSenderId: '958686119245'
};

const fire = firebase.initializeApp(config);

export { fire };
