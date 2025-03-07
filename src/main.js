import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faInfoCircle, faEnvelope,faLayerGroup,faFolder, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin,faViber } from "@fortawesome/free-brands-svg-icons"; // Import GitHub & LinkedIn icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add icons to the library
library.add(faHome, faInfoCircle, faEnvelope, faGithub, faLinkedin, faLayerGroup, faFolder, faFolderOpen, faViber);

// Create and mount the Vue app
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
