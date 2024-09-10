<template>
  <div class="contact-me">
    <h2>Contact Me</h2>
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Sender Name:</label>
        <input type="text" id="name" v-model="form.name" required/>
      </div>
      <div class="form-group">
        <label for="email">Sender Email:</label>
        <input type="email" id="email" v-model="form.email" required/>
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="form.subject" required/>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" rows="4" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <p>Phone: +977-9762260301</p>
    <p>Email: pratiklabh10@gmail.com</p>
    <p>Address: Sahayoginagar, Koteshwor-32, Kathmandu</p>

    <div class="social-links">
      <a href="https://github.com/pratiklabh" target="_blank" rel="noopener noreferrer">
        <img src="../assets/socials/github.svg" alt="GitHub"/>
      </a>
      <a href="https://linkedin.com/in/pratiklabh" target="_blank" rel="noopener noreferrer">
        <img src="../assets/socials/linkedin.svg" alt="LinkedIn"/>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

function handleSubmit() {
  console.log('Sender Name: ', form.value.name);
  console.log('Sender Email: ', form.value.email);
  console.log('Subject: ', form.value.subject);
  console.log('Message: ', form.value.message);
  alert(`Thank you, ${form.value.name}! Your message has been sent.`)

}
</script>

<style scoped>
.contact-me {
  height: 100vh;
  font-family: 'Playfair Display', serif;
  background-color: #123c69;
  color: white;
  padding: 2rem;
  text-align: center;
}

.contact-me a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

.contact-me a:hover {
  text-decoration: underline;
}

.contact-me h2 {
  font-size: 4.5rem;
  letter-spacing: 0.25rem;
  padding: 2rem;
}

.contact-form {
  background: #29648a;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 40rem;
  margin: 0 auto;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.form-group label {
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  padding: 1rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.25rem;
}

button {
  background-color: #2c3e50;
  color: white;
  border: none;
  font-size: 1.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.contact-me p {
  padding-top: 1rem;
  font-size: 2rem;
}

button:hover {
  background-color: #34495e;
}

.social-links {
  margin-top: 2rem;
}

.social-links a {
  margin: 0 1rem;
}

.social-links img {
  width: 3rem;
  height: 3rem;
}
</style>
