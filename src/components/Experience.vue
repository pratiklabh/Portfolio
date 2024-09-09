<template>
  <section class="experience">
    <h2>My Experience</h2>
    <div class="experience-grid">
      <Card v-for="exp in experiences" :key="exp.title" class="experience-item">
        <!-- Header (Experience Image) -->
        <template #header>
          <img :src="getImage(exp.image)" alt="Experience Image" class="experience-img"/>
        </template>

        <!-- Title (Job Title) -->
        <template #title>
          <h3 class="experience-title">{{ exp.title }}</h3>
        </template>

        <!-- Subtitle (Company Name) -->
        <template #subtitle>
          <h4 class="experience-subtitle">{{ exp.company }}</h4>
        </template>

        <!-- Content (Duration and Description) -->
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
  background-color: teal;
  margin-bottom: 40px;
  padding-bottom: 20px;
  padding-left: 15px;
  border-radius: 20px;
  text-align: center;
  padding-top: 1px;
}

.experience-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.experience-item {
  display: flex;
  align-items: center;
  background-color: #f4f4f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 47%;
  transition: transform 0.3s ease-in-out;
}

.experience-item:hover {
  transform: translateY(-5px);
}

.experience-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.experience-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.experience-subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.duration {
  color: #666;
  margin-bottom: 10px;
}

.description {
  font-size: 16px;
  line-height: 1.6;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: antiquewhite;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  padding-top: 10px;
}
</style>
