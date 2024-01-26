// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';
import Projects from '@/views/Projects.vue';
import AboutMe from '@/views/AboutMe.vue';

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

export default router;
