import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import store from "./redux/store";
import { login, logout } from "./redux/actions/auth.action";

const firebaseConfig = {
  apiKey: "AIzaSyBGD0GYthA9H494eiyHGANicjS3jYUP0s0",
  authDomain: "yt-clone-i.firebaseapp.com",
  projectId: "yt-clone-i",
  storageBucket: "yt-clone-i.appspot.com",
  messagingSenderId: "756780678931",
  appId: "1:756780678931:web:eb250dbf13bdcc92fce4e6",
};

initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(), (user) => {
  if (user) store.dispatch(login(user));
  else store.dispatch(logout());
});
