<template>

  <div class="about-me">
    <img class="profile-pic" src="@/assets/images/me.webp" alt="Profile Picture" />
    <div class="about-text">
      <h1>Pratik Kumar Labh</h1>
      <p>A passionate Computer Engineer and Java enthusiast dedicated to continuous learning and exploring new technologies.
        I enjoy tackling complex problems and developing innovative solutions, staying up-to-date with the latest advancements in the tech field.
      </p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.about-me {
  margin-top: 75px;
  background-color: #330000;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}

.about-me:hover {
  transform: translateY(-5px);
}

.profile-pic {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin-right: 30px;
  border: 4px solid #fff;
}

.about-text {
  font-family: 'Playfair Display', serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 4.5rem;
  letter-spacing: 2px;

  margin: 0;
  color: #A43820;
}

p {
  font-size: 1.5rem;
  margin-top: 10px;
  line-height: 1.6;
  color: #D09683;

}
</style>
