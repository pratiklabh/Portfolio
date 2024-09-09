<template>
  <div class="skills">
    <h2>Skills</h2>
    <div class="skills-list">
      <div v-for="skill in skills" :key="skill" class="skill-item">
        <p>{{ skill }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  'Java',
  'JavaScript',
  'HTML & CSS basics',
  'JPA, Hibernate, DBMS, JDBC',
  'Java (Spring Boot Framework)',
  'Spring Security, JUnit',
  'C and C++',
  'REST API',
  'MySQL',
  'Git'
]);
</script>

<style scoped>
.skills {
  background-color: teal;
  margin-bottom: 40px;
  text-align: center;
  padding-bottom: 30px;
  border-radius: 20px;
  padding-top: 0.01px;
}

.skills h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: antiquewhite;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  padding-top: 10px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.skill-item {
  padding: 15px 20px;
  background-color: #f4f4f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.skill-item p {
  margin: 0;
  font-size: 16px;
}

.skill-item:hover {
  background-color: #007bff;
  color: white;
}
</style>
