

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAktjaIVhuiIbw5A39YJqSl4BC7ck9_5lA",
    authDomain: "super-menu-qr.firebaseapp.com",
    projectId: "super-menu-qr",
    storageBucket: "super-menu-qr.firebasestorage.app",
    messagingSenderId: "1067553201343",
    appId: "1:1067553201343:web:547f5edd41cf2c6a85fa0a",
    measurementId: "G-LPND801GJW"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);