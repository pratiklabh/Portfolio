<template>
  <section class="experience">
    <h2>My Experience</h2>
    <div class="experience-grid">
      <div v-for="exp in experiences" :key="exp.title" class="experience-item">
        <img :src="getImage(exp.image)" alt="Experience Image" class="experience-img" />
        <div class="experience-info">
          <h3>{{ exp.title }}</h3>
          <p class="company">{{ exp.company }}</p>
          <p class="duration">{{ exp.duration }}</p>
          <p class="description">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

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
  background-color:  teal;
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
}

.experience-item {
  display: flex;
  align-items: center;
  background-color: #f4f4f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: calc(50% - 20px);
  transition: transform 0.3s ease-in-out;
}

.experience-item:hover {
  transform: translateY(-5px);
}

.experience-img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-right: 20px;
  object-fit: cover;
}

.experience-info {
  max-width: 600px;
  text-align: left;
}

.experience-info h3 {
  margin-top: 0;
  font-size: 22px;

}

.company {
  font-weight: bold;
  margin: 5px 0;
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
