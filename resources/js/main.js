import './assets/main.css'
import vuetify from './vuetify' 
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas, faBars, faGauge, faBagShopping, faMoneyCheckDollar, faWarehouse, faDesktop, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faClock, faCircleCheck, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';

// Add icons to the library
library.add(fas, faUser, faFacebookF, faTwitter, 
    faInstagram, faYoutube, faBars, faClock, faGauge, 
    faBagShopping, faCircleCheck, faMoneyCheckDollar, 
    faWarehouse, faDesktop, faWindows, faEnvelope, faSquarePlus);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(vuetify);
app.mount('#app');  // Only mount once
