<template>
  <div id="app">
    <nav>
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact-me">Contact Me</a></li>
      </ul>
    </nav>
    <AboutMe id="about-me" />
    <Projects id="projects" />
    <Skills id="skills" />
    <Experience id="experience" />
    <ContactMe id="contact-me" />
  </div>
</template>

<script setup>
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import ContactMe from './components/ContactMe.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 20px;
  text-align: center;
}

nav {
  background-color: teal;
  color: white;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 1000;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  color: antiquewhite;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

section {
  padding: 80px 20px; /* Extra top padding to account for fixed nav */
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
