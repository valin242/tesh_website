<template>
    <div>
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
  
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const formData = ref({
    name: '',
    email: '',
    message: '',
  });
  
  const submitForm = () => {
    // Add logic to handle form submission
    console.log('Form submitted:', formData.value);
  };
  </script>

<style src="../styles/global.css" scoped>

</style>

  