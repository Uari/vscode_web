  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  // import { initializeApp } from "firebase/app"; //로컬에 설치되어 있을 때 사용하기 

  const firebaseConfig = {
    apiKey: "AIzaSyB6HKlJeVQhIOjpJjcTIrCPJbLhIzbAQWA",
    authDomain: "gd2023-993de.firebaseapp.com",
    projectId: "gd2023-993de",
    storageBucket: "gd2023-993de.appspot.com",
    messagingSenderId: "464209020214",
    appId: "1:464209020214:web:41e5ad6c0a713cb6509f97"
  };

  export const firebaseApp = initializeApp(firebaseConfig);