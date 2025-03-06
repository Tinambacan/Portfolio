<template>
  <swiper
    v-if="projects.length > 0"
    :modules="modules"
    :navigation="true"
    :pagination="{ clickable: true }"
    :loop="true"
    class="h-auto w-full md:w-3/4 mx-auto my-10"
  >
    <swiper-slide
      v-for="(project, index) in projects"
      :key="index"
      class="h-full flex items-center justify-center"
    >
    
      <div class=" fancy-container shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-4 w-full min-h-80 flex flex-col md:flex-row md:h-96 lg:h-[500px]">
        <!-- Video Section -->
        <div class="px-5 w-full md:w-1/2 flex items-center justify-center h-64 md:h-full lg:h-full">
          <iframe
            :src="project.videoLink"
            title="YouTube video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-64 md:h-full lg:h-full rounded-lg"
          ></iframe>
        </div>

        <!-- Details Section -->
        <div class="w-full md:w-1/2 flex flex-col justify-start p-4 text-center md:text-left h-auto md:h-full lg:h-full">
          <!-- Title -->
          <h3 class="text-2xl bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent font-extrabold space-grotesk animate-fade-in">
            {{ project.title }}
          </h3>

          <!-- Description -->
          <p class="text-white mt-2 space-grotesk-p text-justify">
            {{ project.description }}
          </p>

          <!-- Links: Demo & Code -->
          <div class="flex justify-between md:justify-start mt-4 space-x-4 space-grotesk-p">
              <!-- Tech Stack -->
              <div class="flex items-center">
                <span class="text-white">Tech Stack: </span>
                <img
                  v-for="(logo, index) in project.techstack"
                  :key="index"
                  :src="logo"
                  class="w-8 h-8"
                />
              </div>

              <!-- Code Link -->
              <div class="flex items-center">
              <a
                :href="project.codeLink"
                target="_blank"
                class="text-white hover:text-blue-800 transition-colors duration-300"
              >
              <span class="mr-1">Code:</span>
                <font-awesome-icon :icon="['fab', 'github']" class="text-xl" />
                
              </a>
              </div>

          </div>

        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>




<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default {
  name: "ProjectPage",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      projects: [
        {
          title: "ILETUPASS",
          videoLink: "https://www.youtube.com/embed/Uk0QGkjV0AQ",
          techstack: [
            "/images/JS.png",
            "/images/laravel.png",
            "/images/tailwind.png",
            "/images/mysql.png"
          ],
          codeLink: "https://github.com/Tinambacan/projects/tree/main/ILetUPass",
          description: "The IletuPass is an interactive system designed to help students prepare for the L-E-T Examination. It serves as a comprehensive reviewer while also enabling professors to track subjects that need more focus and identify areas where students require additional support. The IletuPass system includes a secure login page, ensuring that only students and professors from the school can access its features. It has a CMS for modifying subjects and questionnaires, and an account management system for adding users."
        },

        { 
          title: "ECRS", 
          videoLink: "https://www.youtube.com/embed/OP8TTBtq7fU", 
          techstack: [
            "/images/JS.png",
            "/images/laravel.png",
            "/images/tailwind.png",
            "/images/mysql.png"
          ],
          codeLink: "https://github.com/Tinambacan/projects/tree/main/ECRS", 
          description: "The E-Class Record System (ECRS) was a capstone project that sought to address these issues by introducing a more secure and accessible digital solution. The ECRS not only reduced errors in grade recording but also provided real-time access to student scores, thereby enhancing transparency and communication between instructors and students. The system’s dynamic features supported academic freedom by allowing faculty members to customize grading criteria while benefiting from standardized digital tools."
        },
        { 
          title: "CIEBOT", 
          videoLink: "https://www.youtube.com/embed/xm36XxK3PgY", 
          techstack: [
            "/images/vue.png",
            "/images/laravel.png",
            "/images/tailwind.png",
            "/images/mysql.png"
          ],
          codeLink: "#", 
          description: "CIEBOT is a highly efficient chatbot designed to enhance learning in information technology. Whether you need assistance with programming, insights into the latest tech trends, or quick I.T. support, CIEBOT is here to help with a seamless and intelligent experience. Powered by Algolia and OpenAI, CIEBOT delivers fast, relevant results from a curated knowledge base while generating intelligent responses when needed. With voice and text-to-speech support, users can receive spoken answers or send voice messages for a more interactive experience. "
        },
        { 
          title: "NOCTOGRAM", 
          videoLink: "https://www.youtube.com/embed/5y2cz6w5LGA", 
          techstack: [
            "/images/react.png",
            "/images/tailwind.png",
            "/images/json.png",
          ],
          codeLink: "https://github.com/Tinambacan/projects/tree/main/Noctogram", 
          description: "Noctogram is an advanced information system designed to educate the public on cybersecurity threats and best practices for online safety. It raises awareness about the impact of cybercrime on individuals, businesses, and society by providing informative content, real-world case studies, and expert insights. Through interactive learning and expert guidance, Noctogram empowers users to stay informed about evolving cyber threats and adopt safer online practices, contributing to a more secure digital environment."
        }
      ],
    };
  },

  setup() {
    return { modules: [Navigation, Pagination] };
  },
};
</script>

    <style scoped>
    /* Smooth Fade-in Animation */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in {
      animation: fadeIn 1s ease-in-out;
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
</style>
    
  