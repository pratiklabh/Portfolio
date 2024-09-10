<template>
  <div class="skills">
    <h2>Skills</h2>
    <div class="skills-list">
      <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <img :src="getImage(skill.icon)" :alt="skill.name" class="skill-icon"/>
        <p>{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

// Function to return image path
const getImage = (imageName) => {
  return new URL(`../assets/icons/${imageName}`, import.meta.url).href;
};

const skills = ref([
  {name: 'Java', icon: 'java.jpg'},
  {name: 'C', icon: 'c.jpg'},
  {name: 'C++', icon: 'cpp.webp'},
  {name: 'HTML', icon: 'html.jpg'},
  {name: 'CSS', icon: 'css.png'},
  {name: 'Spring Boot', icon: 'springboot.png'},
  {name: 'MySQL', icon: 'dbms.jpg'},
  {name: 'Git', icon: 'github.webp'},
  {name: 'RestApi', icon: 'restapi.png'},
]);
</script>

<style scoped>
.skills {
  height: 100vh;
  padding-top: 5rem;
  padding-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background-color: #869aaf;
}

.skills-list {
  padding-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6rem;
  max-width: 100rem;
  margin: 0 auto;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.25rem;
  background-color: #dddeee;
  border-radius: 3rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.skill-item:hover {
  background-color: #007bff;
  color: white;
}

.skill-item img {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
}

.skill-item p {
  margin: 0.6rem 0 0;
  font-size: 1rem;
}


.skill-icon {
  width: 3rem;
  height: 3rem;
}
</style>
