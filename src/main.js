import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);


import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();


createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
