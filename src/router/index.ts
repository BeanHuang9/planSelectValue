import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router';
import billboard from '../views/Billboard.vue';
//由於router的API預設使用了類型進行初始化，內部包含類型定義，所以本文內部程式碼中的所有資料類型是可以省略的
//RouterRecordRaw是路由元件物件

const routes: RouteRecordRaw[] = [
	{ path: '/', name: 'Home', component: () => import('@/views/OrganizationHome.vue') },
	{ path: '/billboard', name: 'billboard', component: () => import('@/views/Billboard.vue') },
	{ path: '/AppointmentCalendar', name: 'AppointmentCalendar', component: () => import('@/views/AppointmentCalendar.vue') },
	{ path: '/AppointmentList', name: 'AppointmentList', component: () => import('@/views/AppointmentList.vue') },
	{ path: '/HealthCheckup', name: 'HealthCheckup', component: () => import('@/views/HealthCheckup.vue') },
	{ path: '/Memorandum', name: 'Memorandum', component: () => import('@/views/Memorandum.vue') },
	{ path: '/Evaluate', name: 'Evaluate', component: () => import('@/views/Evaluate.vue') },
	{ path: '/directions', name: 'directions', component: () => import('@/views/EmsDirections.vue') },
	{ path: '/product', name: 'about', component: () => import('@/views/EmsProductList.vue') },
	{ path: '/:catchAll(.*)', name: 'catchAll', component: () => import('@/views/OrganizationHome.vue') },
];

// RouterOptions是路由選項類型
const options: RouterOptions = {
	history: createWebHistory(),
	routes,
};

// Router是路由物件類型
const router: Router = createRouter(options);

export default router;
