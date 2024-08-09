import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2YxShYF7JeSWqQjQ_NR9XHLOCnTcASp0",
    authDomain: "portfolio-authenticator-2cbe9.firebaseapp.com",
    projectId: "portfolio-authenticator-2cbe9",
    storageBucket: "portfolio-authenticator-2cbe9.appspot.com",
    messagingSenderId: "746998104383",
    appId: "1:746998104383:web:7e3856af2ef897191f138a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const register = document.getElementById("submit");


register.addEventListener('click', (event) => {
    event.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)


   

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.location.href="home.html"
    alert("signed in")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


})
