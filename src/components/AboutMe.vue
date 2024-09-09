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
  background-color: teal;
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 30px;
  border: 4px solid #fff;
}

.about-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
  color: antiquewhite;
}

p {
  font-size: 1.2rem;
  margin-top: 10px;
  line-height: 1.6;
  color: antiquewhite;

}
</style>
