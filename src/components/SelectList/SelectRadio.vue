<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';

interface UserDataItem {
	name_tw: any;
	name_en: string;
}

const userData = ref<UserDataItem[]>([]);
const url = `${import.meta.env.VITE_EMS_POST_URL}/product_ems/getAllFunctionItem`;

const isLoading = ref(true);

onMounted(async () => {
	try {
		const res = await axios({
			method: 'post',
			url: url,
		});
		userData.value = res.data.result;
		isLoading.value = false;
		// console.log(res.data.result);
	} catch (err: any) {
		// console.error(err.response);
	}
});

const isOpen = ref(false);
const searchTerm = ref<string>('');
const selectedItem = ref<string>('');

const filteredItems = computed(() => {
	const lowerCaseSearchTerm = searchTerm.value.toLowerCase();
	return userData.value.filter(
		(item) => item.name_tw.toLowerCase().includes(lowerCaseSearchTerm) || item.name_en.toLowerCase().includes(lowerCaseSearchTerm)
	);
});

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

// const selectBox = (item: UserDataItem) => {
// 	selectedItem.value = item.name_tw;
// 	isOpen.value = false;
// };

const selectBox = (item: UserDataItem) => {
	selectedItem.value = `${item.name_tw} ${item.name_en}`;
	isOpen.value = false;
};

// Watch for changes in filteredItems and update selectedItem
watch(filteredItems, (newFilteredItems) => {
	if (newFilteredItems.length > 0) {
		const selectedItemText = `${newFilteredItems[0].name_tw} ${newFilteredItems[0].name_en}`;
		selectedItem.value = selectedItemText;
	}
});
</script>

<template>
	<!-- {{ userData }} -->

	<!-- <ul>
			<li v-for="i in userData">{{ i.name_tw }}</li>
		</ul> -->

	<div v-if="!isLoading" class="inline-block align-middle w-[75%] relative">
		<button
			class="inline-flex w-full px-1 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
			@click="toggleDropdown"
		>
			<span class="mr-2 text-left overflow-hidden whitespace-nowrap text-ellipsis">{{ selectedItem }}</span>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1 absolute right-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<div
			v-show="isOpen"
			class="absolute z-10 left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 w-[300px] foMinH overflow-y-auto overflow-hidden"
		>
			<!-- Search input -->
			<div class="relative">
				<input
					v-model="searchTerm"
					class="flex items-center justify-between w-[90%] px-2 py-2 text-gray-600 border-b border-gray-300 focus:outline-none text-sm"
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

			<a
				v-for="item in filteredItems"
				:key="item.name_tw"
				class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md text-sm"
				@click="selectBox(item)"
				>{{ item.name_tw }} ({{ item.name_en }})</a
			>
		</div>
	</div>

	<div v-if="isLoading" role="status" class="inline-block align-middle w-[75%] relative">
		<svg
			aria-hidden="true"
			class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
			viewBox="0 0 100 101"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
				fill="currentColor"
			/>
			<path
				d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
				fill="currentFill"
			/>
		</svg>
		<span class="sr-only">Loading...</span>
	</div>
</template>

<style lang="scss" scoped>
.foMinH {
	max-height: 250px;
}
</style>
