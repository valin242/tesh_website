<template>
    <div>
        <section>
            <div class="home-container">
                <form>
                    <input type="text" name="search" placeholder="Search..." style="background-color:  rgba(255, 255, 255, 0.135); border-color:  rgba(255, 255, 255, 0.135);">
                </form>
            </div>
            <div class="home-container">
                <div class="text-container">
                    <h1 style="color: #66fcf1; font-size: 450%; font-family: Roboto; margin-bottom: 0%;">Valinteshley Pierre</h1>
                    <h3 style="color: white; font-size: 200%; font-family: Roboto;">Research & Data Scientist</h3>
                    <p style="color: white; font-size: x-large; text-align: justify; font-family: sans-serif;">
                        Analytical Research Assistant with 8 years collective experience in mechanical & biomedical engineering, data science,
        and project management. Proficient in application development, statistics, and laboratory processes. Excel at
        collaborative research, critical thinking, and problem-solving.
                    </p>
                    <br>
                    <router-link to="/Contact">
                    <button class="contact-button">Contact Me</button>
                    </router-link>
                </div>
                <div class="photo-container">
                    <img src="../assets/tesh_profile_bg.png" alt="Tesh Profile Picture" width="400" height="550"/>
                </div>
            </div>
        </section>
        <section class="skills-container">
            <br>
            <h1 style="text-align: center; font-family: sans-serif; color: white; font-size: 250%;">Skills & Expertise</h1>
            <hr style="width: 10%; height: 5px; background-color: #66fcf1; border-color: #66fcf1;">
            <table class="main-table">
                <tr>
                    <td class="main-table-section">Computational</td>
                    <td>
                        <table class="skills-table">
                            <tr>
                                <td style="text-align: center;">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="100" width="100"/>
                                    <p class="skills-para">Python</p>
                                </td>
                                <td style="text-align: center;">                                 
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" height="100" width="100" />
                                    <p class="skills-para">Pandas</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" height="100" width="100" />
                                    <p class="skills-para">Pytorch</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" height="100" width="100" />
                                    <p class="skills-para">TensorFlow</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center;">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" height="100" width="100" />
                                    <p class="skills-para">HTML5</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"  height="100" width="100"/>
                                    <p class="skills-para">Vue.js</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="100" width="100" />
                                    <p class="skills-para">Firebase</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" height="100" width="100" />
                                    <p class="skills-para">Adobe Xd</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="main-table-section">Research</td>
                    <td>
                        <table class="skills-table">
                            <tr>
                                <td style="text-align: center;">
                                    <img src="../assets/3d_printing.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Scientific Writing</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="../assets/3d_printing.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Prototyping</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="../assets/bioinformatics_image.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Bioinformatics</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center;">
                                    <img src="../assets/bioinformatics_image.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Exploratory Data <br> Aanalysis</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="../assets/bioinformatics_image.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Biomaterials</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="../assets/bioinformatics_image.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Materials Science</p>
                                </td>
                            </tr>
                        </table>
                        
                    </td>
                </tr>
                <tr>
                    <td class="main-table-section">Soft Skills</td>
                    <td>
                        <table class="skills-table">
                            <tr>
                                <td style="text-align: center;">
                                    <img src="../assets/communication.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Communication</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="../assets/project_man2.png" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Project Management</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="../assets/communication.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Problem-Solving</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center;">
                                    <img src="../assets/communication.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Leadership</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="../assets/communication.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Adaptibility</p>
                                </td>
                                <td style="text-align: center;">
                                    <img src="../assets/communication.jpg" alt="" width="125" height="125" style="border-radius: 50%;" >
                                    <p class="skills-para">Creativity</p>
                                </td>
                            </tr>
                        </table>
                        
                    </td>
                </tr>
            </table>
        </section>
        <section>
            
        </section>
        <section>
            <article style="background-color:  #0f141a;">
                <br>
                <p style="color: white;">
                    include some text
                </p>
                <br>
            </article>
        </section>
    </div>
  </template>
  
<script setup>
// import { ref } from 'vue'
// div tags put contents in rows
</script>

<style src="../styles/global.css" scoped>

</style>