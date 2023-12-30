<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterNav />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import FooterNav from "@/components/FooterNav.vue";
</script>

<style src="./styles/global.css"></style>