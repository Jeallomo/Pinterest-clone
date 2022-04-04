import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { initializeApp } from 'firebase/app';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyD0CdyYp6PCzmvRQo3r86h5KL7nz5RLTfI",
  authDomain: "pinterest-clone-56ed4.firebaseapp.com",
  projectId: "pinterest-clone-56ed4",
  storageBucket: "pinterest-clone-56ed4.appspot.com",
  messagingSenderId: "10714170234",
  appId: "1:10714170234:web:2953ace6015abad3960cc3",
  measurementId: "G-1SVP1KQ3NF"
};

const app = initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

