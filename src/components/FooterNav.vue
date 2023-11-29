<template>
    <section>
        <footer style="text-align: center; background-color:  #0f141a;" class="footer">
            <div class="grid-container">
                <div class="left">
                    <h4>Links</h4>
                    <ul style="list-style-type: none; padding: 0;">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/AboutMe">About Me</router-link></li>
                        <li><router-link to="/Projects">Projects</router-link></li>
                        <li><router-link to="/Contact">Contact</router-link></li>
                    </ul>    
                </div>
                <div class="middle">
                    <h4>About</h4>
                    <p><a href="mailto:valin242.vp@gmail.com">valin242.vp@gmail.com</a></p>
                    <p style="font-weight: bold;">Tel: 863-812-7803</p>
                    <address style="font-weight: bold;">
                        Cleveland, Ohio 44120
                    </address>
                </div>  
                <div class="right">
                    <h4>Social</h4>
                    <a href="https://www.linkedin.com/in/valinteshley-pierre-669abb119/" style="padding: 5px;">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Tesh's Linkedin" width="30" height="30">
                    </a>
                    <a href="https://github.com/valin242" style="padding: 5px;">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="30" height="30">
                    </a>
                    <a href="https://scholar.google.com/citations?user=PnDi9QsAAAAJ&hl=en&oi=ao" style="padding: 5px;">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="30" height="30">
                    </a>
                </div>
            </div>
            <p>
                &copy; Valinteshley Pierre 2023. All rights reserved.
            </p>
        </footer>
    </section>
</template>

<script setup>
import { defineProps } from 'vue'
</script>

<style>
* {
  box-sizing: border-box;
}

footer {
  font-family: Arial, Helvetica, sans-serif;
}

li {
  padding: 1%;
}


/* The grid container */
.grid-container {
  display: grid;
  grid-template-areas: 
    'left left middle middle right right' 
    'footer footer footer footer footer footer';
  /* grid-column-gap: 10px; - if you want gap between the columns */
} 

.left,
.middle,
.right {
  padding: 10px;
   /* height: 100px; Should be removed. Only for demonstration */
}

/* Style the left column */
.left {
  grid-area: left;
}

/* Style the middle column */
.middle {
  grid-area: middle;
}

/* Style the right column */
.right {
  grid-area: right;
}

/* Style the footer */
.footer {
  grid-area: footer;
  padding: 10px;
  text-align: center;
  color: white;
}

router-link {
    color: white;
    text-decoration: none;
  }
  
  router-link:hover {
    text-decoration: aquamarine;
  }

  router-link::after {
    text-decoration: white;
  }


/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .grid-container  {
    grid-template-areas: 
      'left left left left left left' 
      'middle middle middle middle middle middle' 
      'right right right right right right' 
      'footer footer footer footer footer footer';
  }
}
</style>