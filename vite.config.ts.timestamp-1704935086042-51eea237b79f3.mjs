// vite.config.ts
import { defineConfig } from 'file:///Users/bean/Documents/web/ems_backend/node_modules/vite/dist/node/index.js';
import vue from 'file:///Users/bean/Documents/web/ems_backend/node_modules/@vitejs/plugin-vue/dist/index.mjs';
import AutoImport from 'file:///Users/bean/Documents/web/ems_backend/node_modules/unplugin-auto-import/dist/vite.js';
var vite_config_default = defineConfig({
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
		open: true,
		// 自動打開瀏覽器
		// proxy: {
		//   '/api': {
		//     target: 'http://localhost:3000',
		//     changeOrigin: true
		//   }
		// },
	},
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmVhbi9Eb2N1bWVudHMvd2ViL2Vtc19iYWNrZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYmVhbi9Eb2N1bWVudHMvd2ViL2Vtc19iYWNrZW5kL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9iZWFuL0RvY3VtZW50cy93ZWIvZW1zX2JhY2tlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdHZ1ZSgpLFxuXHRcdEF1dG9JbXBvcnQoe1xuXHRcdFx0aW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYSddLFxuXHRcdFx0Ly8gXHU2MzA3XHU1QjlBXHU1RjE1XHU1MTY1XHU2ODM5XHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0IHJlcXVlc3RzXHVGRjBDY29uZmlnXHVGRjBDdXRpbHMgXHU3NkVFXHU1RjU1XHU1MTg1XHU3Njg0XHU2MjQwXHU2NzA5XHU1MUZEXHU2NTcwXG5cdFx0XHRkaXJzOiBbJy4vc3JjL3JlcXVlc3RzLyoqJywgJy4vc3JjL2NvbmZpZy8qKicsICcuL3NyYy91dGlscy8qKiddLFxuXHRcdFx0Ly8gXHU2MzA3XHU1QjlBXHU3NTFGXHU2MjEwXHU3Njg0IGQudHMgXHU2NTg3XHU0RUY2XHU0RjREXHU3RjZFXHU0RTBFXHU2NTg3XHU0RUY2XHU1NDBEXG5cdFx0XHRkdHM6ICcuL3NyYy9hdXRvLWltcG9ydHMuZC50cycsXG5cdFx0XHQvLyBcdTkxNERcdTdGNkVcdTVGMDBcdTU0MkYgZXNsaW50XG5cdFx0XHRlc2xpbnRyYzoge1xuXHRcdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0fSxcblx0XHR9KSxcblx0XSxcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQCc6ICcvc3JjLycsXG5cdFx0fSxcblx0fSxcblx0c2VydmVyOiB7XG5cdFx0aG9zdDogJzAuMC4wLjAnLFxuXHRcdHBvcnQ6IDgwODAsXG5cdFx0b3BlbjogdHJ1ZSwgLy8gXHU4MUVBXHU1MkQ1XHU2MjUzXHU5NThCXHU3MDBGXHU4OUJEXHU1NjY4XG5cdFx0Ly8gcHJveHk6IHtcblx0XHQvLyAgICcvYXBpJzoge1xuXHRcdC8vICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuXHRcdC8vICAgICBjaGFuZ2VPcmlnaW46IHRydWVcblx0XHQvLyAgIH1cblx0XHQvLyB9LFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlTLFNBQVMsb0JBQW9CO0FBQzlULE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVixTQUFTLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQTtBQUFBLE1BRXRDLE1BQU0sQ0FBQyxxQkFBcUIsbUJBQW1CLGdCQUFnQjtBQUFBO0FBQUEsTUFFL0QsS0FBSztBQUFBO0FBQUEsTUFFTCxVQUFVO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLEtBQUs7QUFBQSxJQUNOO0FBQUEsRUFDRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPUDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
