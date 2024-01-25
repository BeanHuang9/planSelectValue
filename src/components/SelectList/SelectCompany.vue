<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, computed, defineEmits } from 'vue';

interface UserDataItem {
	label: string;
	value: string;
}

const userData = ref<UserDataItem[]>([]);
const url = `${import.meta.env.VITE_EMS_POST_URL}/enterprise/getEnterpriseSelect`;

const selectedCompanyId = defineEmits(['chooseCompany']);

onMounted(async () => {
	try {
		const res = await axios({
			method: 'post',
			url: url,
		});
		userData.value = res.data.result;
		// console.log('res', res.data.result);
		// console.log('userData', userData.value);
	} catch (err: any) {
		// console.error(err.response);
	}
});

const isOpen = ref(false);
const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

const selectedCompany = ref<string>();

// search
const searchTerm = ref<string>('');

const selectCompany = (item: UserDataItem) => {
	selectedCompany.value = item.label;
	isOpen.value = false;
	console.log(item);
	selectedCompanyId('chooseCompany', item.value);
};

const filteredCompanies = computed(() => {
	return userData.value.filter((item) => item.label.toLowerCase().includes(searchTerm.value.toLowerCase())).map((item) => item);
});
</script>

<template>
	<!-- class="relative group w-[70%]" -->
	<div>
		<button
			class="inline-flex w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
			@click="toggleDropdown"
		>
			<span class="mr-2">{{ selectedCompany || '請選擇公司' }}</span>
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
			class="absolute w-full z-10 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 foMinH overflow-y-auto overflow-hidden"
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

			<!-- Dropdown content goes here -->
			<a
				v-for="item in filteredCompanies"
				:key="item.value"
				class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md text-sm"
				@click="selectCompany(item)"
				>{{ item.label }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.foMinH {
	max-height: 250px;
}
</style>
