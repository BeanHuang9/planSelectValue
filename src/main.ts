import { createApp } from 'vue';
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

import './style.css';
import './reset.css';

import router from './router';
import store from './store';

import App from './App.vue';

const app = createApp(App);

app.use(store);
app.use(router);

// Use plugin defaults (optional)
app.use(setupCalendar, {});

// Use the components
app.component('VCalendar', Calendar);
app.component('VDatePicker', DatePicker);

app.mount('#app');
