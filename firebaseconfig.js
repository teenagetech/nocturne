import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyDqca7lAGYVqOicddqyNmLINqYgXfW3bb0",
  authDomain: "nocturneapp.firebaseapp.com",
  projectId: "nocturneapp",
  storageBucket: "nocturneapp.firebasestorage.app",
  messagingSenderId: "478173299494",
  appId: "1:478173299494:web:d267cb7131f7a46249f7e7",
  measurementId: "G-8N8WYT23E0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);