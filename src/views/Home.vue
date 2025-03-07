<template>
  <div class="p-8 max-w-4xl mx-auto text-center flex flex-col md:flex-row items-center justify-center bg-transparent rounded-lg gap-4">
    <!-- Left Section (Image & Contact) -->
    <div class="flex flex-col items-center">
      <div class="w-52 h-52 flex-shrink-0 perspective">
  <div class="coin-container">
    <!-- Front Image -->
    <img 
      :src="isFlipped ? profile1 : profile2" 
      alt="Profile Picture" 
      class="w-full h-full object-cover rounded-full shadow-lg coin-effect front">
    
    <!-- Back Image -->
    <img 
      :src="isFlipped ? profile2 : profile1" 
      alt="Profile Picture" 
      class="w-full h-full object-cover rounded-full shadow-lg coin-effect back">
  </div>
      </div>

      <!-- Download Resume Button -->
      <a 
        href="/files/Tinambacan - CV.pdf" 
        download 
        class="mt-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl">
        Download Resume
      </a>
    </div>

    <!-- Right Section (Name & Summary) -->
    <div class="text-left md:mr-6 mt-4 md:mt-0 flex-1 fancy-container">
      <p class="text-lg text-gray-300 uppercase tracking-wide fade-in">Hi, I am</p>
      <h1 class="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Joselito Tinambacan</h1>
      <p class="text- text-gray-200 mb-4 fancy-subtitle">Full Stack Developer</p>
      <p class="text-gray-300 fade-in ">
        A dedicated Full-Stack Developer with experience in web application development, database management, and software quality assurance.    
      </p>
      <div class="mt-4 text-gray-700 flex flex-col md:flex-row justify-start md:gap-8">
        <p class="text-lg text-white space-grotesk-p">Contact Me: 639765404954</p>
        <div class="flex gap-4 mt-2 md:mt-0 text-center">
          <!-- Gmail -->
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=joselito.tinambacan@gmail.com" target="_blank">
            <font-awesome-icon :icon="['fas', 'envelope']" class="text-red-500 text-3xl hover:scale-110 transition-transform" />
          </a>

          <!-- GitHub -->
          <a href="https://github.com/Tinambacan/projects" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" class="text-gray-300 text-3xl hover:scale-110 transition-transform" />
          </a>

          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/joselito-tinambacan-28845b337" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-blue-500 text-3xl hover:scale-110 transition-transform" />
          </a>

          <!-- Viber -->
          <a href="viber://chat?number=639765404954" target="_blank">
            <font-awesome-icon :icon="['fab', 'viber']" class="text-purple-500 text-3xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
  
    </div>
  </div>
  
</template>


<script>
export default {
  name: "HomePage",
  data() {
    return {
      profile1: "/images/profile1.png",
      profile2: "/images/profile3.jpeg",
      isFlipped: false
    };
  },
 
};

</script>

<style scoped>

.perspective {
  perspective: 1000px;
}

@keyframes spinCoin {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.coin-container {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: spinCoin 10s linear infinite; /* Continuous rotation */
}

.coin-effect {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}


.fancy-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 2rem;
  animation: slideUp 0.6s ease-in-out;
}

/* Fancy text with a glowing effect */
.fancy-text {
  font-family: "Space Grotesk", sans-serif;
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 10px rgba(255, 99, 71, 0.5);
}

/* Subtle subtitle styling */
.fancy-subtitle {
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Soft fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

/* Slide-up effect */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Text Glow Effect */
.glow {
  text-shadow: 0px 0px 10px rgba(255, 99, 71, 0.7), 0px 0px 20px rgba(255, 140, 0, 0.5);
}

</style>
