// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';
import Projects from '@/views/Projects.vue';
import AboutMe from '@/views/AboutMe.vue';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/projects', component: Projects },
  { path: '/aboutme', component: AboutMe },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Initialize firebase app and add project information
const firebaseApp = initializeApp({
  apiKey: 'string',
  authDomain: 'string',
  projectId: 'string',
  storageBucket: 'string',
  messagingSenderId: 'string',
  appId: 'string',
  measurementId: 'string'
});

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://personal-website-c86c9-default-rtdb.firebaseio.com",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default router;
