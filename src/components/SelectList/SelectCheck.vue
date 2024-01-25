<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

interface UserDataItem {
	name_tw: any;
	name_en: string;
}

const userData = ref<UserDataItem[]>([]);
// const url = 'https://stage.med-net.com/v2-api/product_ems/getAllFunctionItem';
const url = `${import.meta.env.VITE_EMS_POST_URL}/product_ems/getAllFunctionItem`;

onMounted(async () => {
	try {
		const res = await axios({
			method: 'post',
			url: url,
		});
		userData.value = res.data.result;
		// console.log(res.data.result);
	} catch (err: any) {
		// console.error(err.response);
	}
});

const selectedItem = ref([]);
const isOpenSpecial = ref(false);
const searchTerm = ref<string>('');

const specialItems = computed(() => {
	// return userData.value.map((i) => i.name_tw);
	return userData.value.map((i) => `${i.name_tw} (${i.name_en})`);
});

const specialDropdown = () => {
	isOpenSpecial.value = !isOpenSpecial.value;
};

const filteredSpecialItems = computed(() => {
	return specialItems.value.filter((item) => item.toLowerCase().includes(searchTerm.value.toLowerCase()));
});
</script>

<template>
	<button
		class="inline-flex w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
		@click="specialDropdown"
	>
		<span class="mr-2 text-left overflow-hidden whitespace-nowrap text-ellipsis">{{
			selectedItem.length ? selectedItem.join(', ') : '請選擇項目'
		}}</span>

		<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1 absolute right-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
			<path
				fill-rule="evenodd"
				d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
	<div
		v-show="isOpenSpecial"
		class="absolute w-full z-10 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 foMinH overflow-y-auto overflow-hidden"
	>
		<!-- Search input -->
		<div class="relative">
			<input
				v-model="searchTerm"
				class="flex items-center justify-between w-full px-2 py-2 text-gray-600 border-b border-gray-300 focus:outline-none text-sm"
				type="text"
				placeholder=""
				autocomplete="off"
			/>
			<svg
				class="w-4 h-4 text-gray-600 dark:text-white absolute top-4 right-4"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 20 20"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
				/>
			</svg>
		</div>

		<ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
			<li v-for="(item, i) in filteredSpecialItems" :key="item">
				<div class="flex items-center">
					<input
						:id="'checkbox_' + i"
						v-model="selectedItem"
						type="checkbox"
						:value="item"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
					/>
					<label :for="'checkbox_' + i" class="ms-2 text-gray-700 text-sm font-medium dark:text-gray-300">
						{{ item }}
					</label>
				</div>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.foMinH {
	max-height: 250px;
}
</style>
