// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrUs89NbR7blVDs8lVkm2lVmO3SGnBwM8',
  authDomain: 'warewarehouse-management.firebaseapp.com',
  projectId: 'warewarehouse-management',
  storageBucket: 'warewarehouse-management.appspot.com',
  messagingSenderId: '946263244093',
  appId: '1:946263244093:web:83e508645d7137c97d9954',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
