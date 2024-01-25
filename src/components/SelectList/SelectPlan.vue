<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, defineProps, watch } from 'vue';

interface UserDataItem {
	label: string;
}
const userData = ref<UserDataItem[]>([]);
// enterprise/getEnterpriseSelect
const url = `${import.meta.env.VITE_EMS_POST_URL}/enterprise/getEnterpriseProductSelect`;
const selectProps = defineProps(['selectCompanyId']);
console.log(selectProps.selectCompanyId);
onMounted(async () => {
	console.log('生命週期是否被觸發');

	try {
		const res = await axios({
			method: 'post',
			url: url,
			data: { enterprise_id: selectProps?.selectCompanyId ?? -1 },
		});

		userData.value = res.data.result;
		console.log(res);
	} catch (err: any) {
		console.error(err.response);
	}
});

const selectedItem = ref([]);
const isOpenSpecial = ref(false);

const specialDropdown = () => {
	isOpenSpecial.value = !isOpenSpecial.value;
};

watch(
	() => selectProps.selectCompanyId,
	async (newValue) => {
		// console.log('改變:', newValue);
		// console.log('數值:', typeof parseInt(newValue, 10));
		// console.log('資料:', { enterprise_id: parseInt(newValue, 10) });

		try {
			const res = await axios({
				method: 'post',
				url: url,
				data: { enterprise_id: parseInt(newValue, 10) },
			});
			console.log(res.data.result);
		} catch (err: any) {
			console.error(err.response);
		}
	}
);
</script>

<template>
	<button
		class="inline-flex w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
		@click="specialDropdown"
	>
		<span class="mr-2 text-left overflow-hidden whitespace-nowrap text-ellipsis">{{
			selectedItem.length ? selectedItem.join(', ') : '請選擇方案'
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
		<ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
			<!-- filteredSpecialItems -->
			<li v-for="(item, i) in planItems" :key="item">
				<div class="flex items-center">
					<input
						:id="'checkbox_' + i"
						v-model="selectedItem"
						type="checkbox"
						:value="item"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 cursor-pointer"
					/>
					<label :for="'checkbox_' + i" class="ms-2 text-gray-700 text-sm font-medium dark:text-gray-300 cursor-pointer">
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
