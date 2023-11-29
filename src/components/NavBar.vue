<template>
  <nav class="navbar">
    <img src="./assets/tesh_profile.jpg" alt="Tesh Profile Picture"/>
    <router-link to="/" class="nav-buttons">Home</router-link>
    <router-link to="/AboutMe" class="nav-buttons">About Me</router-link>
    <router-link to="/Projects" class="nav-buttons">Projects</router-link>
    <router-link to="/Contact" class="nav-buttons">Contact</router-link>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue'
</script>

<style src="../styles/global.css" scoped>

</style>