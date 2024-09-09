<template>
  <div class="projects">
    <h2>Personal Projects</h2>
    <div class="projects-grid">
      <Card v-for="project in projects" :key="project.name" class="project-card">
        <template #header>
          <img :src="getImage(project.image)" alt="Project Image"/>
        </template>
        <template #title>
          <h3>{{ project.name }}</h3>
        </template>
        <template #content>
          <p>{{ project.description }}</p>
        </template>
        <template #footer>
          <Button
              as="a"
              label="View Project"
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="p-button p-component p-button-outlined"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

// Function to return image path
const getImage = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

const projects = ref([
  {
    name: 'Supermarket Billing System',
    description: 'A system for managing supermarket transactions, inventory, and billing processes.',
    image: 'supermarket.webp',
    link: 'https://github.com/pratiklabh/SupermarketBillingSystem'
  },
  {
    name: 'Hospital Management System',
    description: 'A comprehensive system for managing hospital operations, including patient records, appointments, and staff management.',
    image: 'hospital.webp',
    link: 'https://github.com/pratiklabh/HospitalManagementSystem'
  },
  {
    name: 'Banking Application',
    description: 'A banking application for managing customer accounts, transactions, and other banking operations.',
    image: 'bank.jpg',
    link: 'https://github.com/pratiklabh/BankingApplication'
  },
  {
    name: 'Library Management System',
    description: 'A system for managing library operations, including book cataloging, borrowing, and returns.',
    image: 'library.jpg',
    link: 'https://github.com/pratiklabh/LibraryManagementSystem'
  },
  {
    name: 'Employee Management System',
    description: 'An application for managing employee details, including personal information, job roles, and attendance.',
    image: 'employee.jpg',
    link: 'https://github.com/pratiklabh/EmployeeManagementSystem'
  },
  {
    name: 'Number Guessing Game',
    description: 'A simple number guessing game implemented as part of a task.',
    image: 'numguess.png',
    link: 'https://github.com/pratiklabh/oibsip_task2'
  }
]);

</script>

<style scoped>
.projects {
  padding-top: 5rem;
  background-color: #8697C4;
  text-align: center;
  font-family: 'Playfair Display', serif;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.project-card {
  width: 30%;
  padding: 1.5rem;
  margin: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #f4f4f9;
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: translateY(-0.5rem);
}

.project-card img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  padding: 0.5rem;
  object-fit: cover;
  margin: 0 auto;
  display: block;
}

.project-card a {
  color: #007bff;
  padding-top: 0.4rem;
  text-decoration: none;
  font-weight: bold;
}

.projects h2 {
  font-size: 4.5rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 1.25rem;
  padding-top: 0.6rem;

}

</style>
