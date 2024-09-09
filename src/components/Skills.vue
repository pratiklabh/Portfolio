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
  {name: 'Java', icon: 'java.png'},
  {name: 'C', icon: 'c.png'},
  {name: 'C++', icon: 'cpp.png'},
  {name: 'HTML', icon: 'html.png'},
  {name: 'CSS', icon: 'css.png'},
  {name: 'Spring Boot', icon: 'springboot.png'},
  {name: 'MySQL', icon: 'mysql.png'},
  {name: 'Git', icon: 'github.png'},
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
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: darkslateblue;
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
  background-color: #f4f4f9;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.skill-item:hover {
  background-color: #007bff;
  color: white;
}

.skill-item img {
  height: 10rem;
  width: 10rem;
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
