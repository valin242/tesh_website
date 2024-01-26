<template>
    <main>
        <section class="homepage-head">
            <div class="home-container">
                <div class="text-container">
                    <h1 class="my-name">Valinteshley Pierre</h1>
                    <h3 class="my-occupation">Research & Data Scientist</h3>
                    <article class="head-description">
                        <p id="biography">
                            Analytical Research Assistant with 8 years collective experience in mechanical & biomedical engineering, data science,
                            and project management. Proficient in application development, statistics, and laboratory processes. Excel at
                            collaborative research, critical thinking, and problem-solving.
                        </p>
                    </article>
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
            <h1 class="skills-header">Skills & Expertise</h1>
            <hr class="separator" style="width: 10%; height: 5px; background-color: #66fcf1; border-color: #66fcf1;">
            <table class="skills-table">
                <tr>
                    <th class="skills-title" rowspan="2">Computational</th>
                    <td>
                        <img class="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <p class="skills-program">Python</p>
                    </td>
                    <td>
                        <img class="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" />
                        <p class="skills-program">Pandas</p>
                    </td>
                    <td>
                        <img class="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" />
                        <p class="skills-program">Pytorch</p>
                    </td>
                    <td>
                        <img class="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
                        <p class="skills-program">TensorFlow</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img class="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                        <p class="skills-program">HTML5</p>
                    </td>
                    <td>
                        <img class="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                        <p class="skills-program">Vue.js</p>
                    </td>
                    <td>
                        <img class="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                        <p class="skills-program">Firebase</p>
                    </td>
                    <td>
                        <img class="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" />
                        <p class="skills-program">Adobe XD</p>
                    </td>
                </tr>
                <tr>
                    <th class="skills-title" rowspan="2">Research</th>
                    <td class="skills-research"><div class="rounded-container research-skills">Scientific Research</div></td>
                    <td class="skills-research"><div class="rounded-container research-skills">Prototyping</div></td>
                    <td class="skills-research"><div class="rounded-container research-skills">Bioinformatics</div></td>
                </tr>
                <tr>
                    <td class="skills-research">
                        <div class="rounded-container research-skills"><p>Exploratory Data Analysis</p></div>
                    </td>
                    <td class="skills-research"><div class="rounded-container research-skills">Biomaterials</div></td>
                    <td class="skills-research"><div class="rounded-container research-skills">Materials Science</div></td>
                </tr>
                <tr>
                    <th class="skills-title" rowspan="2">Soft Skills</th>
                    <td class="skills-research"><div class="rounded-container soft-skills">Communication</div></td>
                    <td class="skills-research"><div class="rounded-container soft-skills">Project Management</div></td>
                    <td class="skills-research"><div class="rounded-container soft-skills">Problem-Solving</div></td>
                </tr>
                <tr>
                    <td class="skills-research"><div class="rounded-container soft-skills">Leadership</div></td>
                    <td class="skills-research"><div class="rounded-container soft-skills">Adaptibility</div></td>
                    <td class="skills-research"><div class="rounded-container soft-skills">Creativity</div></td>
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
    </main>
</template>
  
<script setup>
// import { ref } from 'vue'
// div tags put contents in rows
</script>

<style src="../styles/global.css" scoped>

</style>