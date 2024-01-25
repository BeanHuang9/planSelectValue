import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia'],
			// 指定引入根目录下的 requests，config，utils 目录内的所有函数
			dirs: ['./src/requests/**', './src/config/**', './src/utils/**'],
			// 指定生成的 d.ts 文件位置与文件名
			dts: './src/auto-imports.d.ts',
			// 配置开启 eslint
			eslintrc: {
				enabled: true,
			},
		}),
	],
	resolve: {
		alias: {
			'@': '/src/',
		},
	},
	server: {
		host: '0.0.0.0',
		port: 8800,
		// open: true, // 自動打開瀏覽器
		// proxy: {
		//   '/api': {
		//     target: 'http://localhost:3000',
		//     changeOrigin: true
		//   }
		// },
	},
});
