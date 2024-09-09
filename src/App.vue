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
    <router-view />
  </div>
</template>

<script setup>

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
</style>
