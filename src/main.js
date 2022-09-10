import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
library.add(faAngleDoubleLeft, faAngleDoubleRight, faChevronLeft, faChevronRight);


import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();


createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
