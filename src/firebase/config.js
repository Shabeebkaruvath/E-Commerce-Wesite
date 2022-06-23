 import firebaser from 'firebase'
 

const firebaseConfig = {
    apiKey: "AIzaSyCVtYfqnOAan6mVXd9Nq_OhcFv_kn7G7vU",
    authDomain: "fir-15eeb.firebaseapp.com",
    projectId: "fir-15eeb",
    storageBucket: "fir-15eeb.appspot.com",
    messagingSenderId: "222966506704",
    appId: "1:222966506704:web:3d274ca4ad97f7b3d12ad5",
    measurementId: "G-CD2G8G5GY9"
  };
  
  export const firebase = firebaser.initializeApp(firebaseConfig)