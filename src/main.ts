import {createApp} from 'vue'
import App from './App.vue'

import './assets/styles/vendors/normalize.css';
import './assets/styles/main.scss';
import {key, store} from "@store";

const app = createApp(App);
app.use(store, key);
app.mount('#app');
