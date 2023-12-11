import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjiAKX9ABNxZtwwGrPs3wkIsJrXm3BO7M",
  authDomain: "freshman-movie-booking.firebaseapp.com",
  projectId: "freshman-movie-booking",
  storageBucket: "freshman-movie-booking.appspot.com",
  messagingSenderId: "883607553888",
  appId: "1:883607553888:web:cd2bb9aea00e71f8c98005",
  measurementId: "G-4TGWPFHQYP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth};