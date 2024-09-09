<template>
  <section class="experience">
    <h2>My Experience</h2>
    <div class="experience-grid">
      <Card v-for="exp in experiences" :key="exp.title" class="experience-item">
        <!-- Header (Experience Image) -->
        <template #header>
          <img :src="getImage(exp.image)" alt="Experience Image" class="experience-img"/>
        </template>

        <template #title>
          <h3 class="experience-title">{{ exp.title }}</h3>
        </template>

        <template #subtitle>
          <h4 class="experience-subtitle">{{ exp.company }}</h4>
        </template>

        <template #content>
          <p class="duration">{{ exp.duration }}</p>
          <p class="description">{{ exp.description }}</p>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';

// Function to return image path
const getImage = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

const experiences = ref([
  {
    title: 'Java Intern',
    company: 'Synergy Tech Software Pvt. Ltd.',
    duration: 'Jul 8, 2024 - Present',
    description: 'Working as a Java intern, gaining hands-on experience with Java development, contributing to various projects, and learning best practices in a professional environment.',
    image: 'synergy.png'
  },
  {
    title: 'Professional Java Package Training',
    company: 'Broadway Infosys',
    duration: 'Dec 31, 2023 - Mar 31, 2024',
    description: 'Completed comprehensive training in Java, covering core concepts, advanced topics, and practical applications.',
    image: 'broadway.png'
  }
]);
</script>

<style scoped>
.experience {
  height: 100vh;
  background-color: #8697C4;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 3rem;
}

.experience-grid {
  padding-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.experience-item {
  display: flex;
  align-items: center;
  background-color: #f4f4f9;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 45%;
  transition: transform 0.3s ease-in-out;
}

.experience-item:hover {
  transform: translateY(-0.25rem);
}

.experience-img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
}

.experience-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

.experience-subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.duration {
  color: #666;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.25rem;
  line-height: 1.6;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 6rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 1.25rem;
  padding-top: 0.75rem;
}
</style>
