<template>

  <div class="about-me">

    <div class="about-text">
      <h1>Pratik Kumar Labh</h1>
      <p>
        I am a passionate Computer Engineer and a Java enthusiast, eager to continually learn and grow in the field of software development.
        My journey with programming started with Java, and I have been exploring its powerful capabilities for building robust applications.
        Although I am at the beginning of my career, I am driven by a curiosity to tackle new challenges and improve my coding skills every day.
        I enjoy breaking down complex problems into simpler tasks and applying creative solutions to solve them.
        I make it a priority to stay up-to-date with the latest advancements in the tech world, especially in Java and its related technologies, so I can build better applications.
        I am looking forward to expanding my knowledge and gaining practical experience in
        developing applications in Java and other technologies to create innovative solutions that make a difference.
      </p>

    </div>

    <img class="profile-pic" src="@/assets/images/me.webp" alt="Profile Picture" />
  </div>
</template>

<script setup>

</script>

<style scoped>
.about-me {
  height: 100vh;
  width: 100%;
  background-color: #66A5AD;
  padding-top: 5rem;
  padding-left: 2rem;
  display: flex;
  align-items: center;
}

.profile-pic {
  width: 21rem;
  height: 21rem;
  border-radius: 50%;
  margin-right: 2rem;
  margin-left: 2rem;
}

.about-text {
  text-align: left;
  font-family: 'Playfair Display', serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 4.5rem;
  letter-spacing: 2px;

  margin: 0;
  color:white;
}

p {
  font-size: 1.5rem;
  margin-top: 1rem;
  line-height: 1.6;
  color: white;

}
</style>
