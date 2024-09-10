<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about-me">About Me</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/contact-me">Contact Me</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>

</script>

<style>
#app {
  font-family: 'Playfair Display', serif;
  margin: 0;
  padding: 0;
  text-align: center;

}

nav {
  background-color: #002C54;
  color: white;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
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
  color: #f0f0f0;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
