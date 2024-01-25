<script lang="ts" setup>
import { ref } from 'vue';
const areaList: Ref<string[]> = ref(['AA', '檢前注意事項', '常見Q&A', '頁籤4']);
const currentArea: Ref<number> = ref(0);
</script>
<template>
	<div class="py-28 bg-yellow-100">
		<div class="text-center font-bold text-4xl tracking-2.25 text-[#494949]">
			<div class="mb-3">台灣路威</div>
			<div class="">員工健康檢查預約專區</div>
		</div>
		<div class="flex justify-center items-center mt-9 mb-[70px]">
			<RouterLink to="/product">
				<button class="bg-[#0087E0] rounded-lg shadow-xl h-[120px] w-[250px] text-white text-3xl font-semibold">我要預約</button>
			</RouterLink>
		</div>
		<div class="w-2/3 m-auto flex justify-start font-semibold tracking-2.25 text-lg">
			<button
				v-for="(item, idx) in areaList"
				:key="idx"
				:class="{ 'text-[#0087E0]': currentArea === idx }"
				class="rounded-t-lg bg-white p-4 shadow mr-1"
				@click="currentArea = idx"
			>
				{{ item }}
			</button>
		</div>
		<div class="h-[900px] w-2/3 bg-white m-auto flex justify-center items-center">
			<div class="bg-gray-500 h-5/6 w-5/6 text-4xl text-red-300 flex justify-center items-center">{{ currentArea }}</div>
		</div>
	</div>
</template>
