<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import FormTime from '@/components/FormTime.vue';
import SelectRadio from '@/components/SelectList/SelectRadio.vue';

interface Item {
	[day: string]: any;
}

const days: string[] = ['週一', '週二', '週三', '週四', '週五', '週六', '週日'];

const data = ref<Item[]>([
	{
		血液重金屬檢測: { 週一: 5, 週二: 5, 週三: 5, 週四: 5, 週五: 5, 週六: 5, 週日: 5 },
	},
]);

const isEditButtonClicked = ref(false);
const handleEditButtonClick = () => {
	isEditButtonClicked.value = !isEditButtonClicked.value;
};

const handleDeleteButtonClick = () => {
	console.log('Delete button clicked');
};

const handleCheckOkClick = () => {
	// isEditButtonClicked.value = !isEditButtonClicked.value;
	const confirmed = window.confirm('是否確認修改?');
	if (confirmed) {
		isEditButtonClicked.value = false;
	}
};

const isOpen = ref(false);
const searchTerm = ref<string>('');
const selectedItem = ref<string>('');
const items = ref<string[]>([]);

const filteredItems = computed(() => {
	const lowerCaseSearchTerm: string = searchTerm.value.toLowerCase();
	return items.value.filter((item) => item.toLowerCase().includes(lowerCaseSearchTerm));
});

// const filteredSpecialItems = computed(() => {
// 	return specialItems.value.filter((item) => item.toLowerCase().includes(searchTerm.value.toLowerCase()));
// });

// const toggleDropdown = () => {
// 	isOpen.value = !isOpen.value;
// };

const selectBox = (item: string) => {
	selectedItem.value = item;
	isOpen.value = false; // Close the dropdown after selection
};

onMounted(() => {
	if (filteredItems.value.length > 0) {
		selectedItem.value = filteredItems.value[0];
	}
});
</script>

<template>
	<div class="">
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-base bg-transparent text-[#313131] border-2 border-solid border-[#cccccc]">
				<tr>
					<th scope="col" class="align-middle text-center py-1 border-r-2 border-solid border-[#cccccc]">項目</th>
					<th scope="col" class="align-middle text-center py-1 border-r-2 border-solid border-[#cccccc]">時間</th>
					<th v-for="day in days" :key="day" scope="col" class="align-middle text-center py-1">{{ day }}</th>
				</tr>
			</thead>
			<!-- v-for="(item, index) in data" :key="index" -->
			<tbody>
				<template v-for="item in data" :key="item.name_tw">
					<tr v-if="data.length === 0" class="border-2 border-solid border-[#cccccc] bg-transparent text-[#313131] text-center">
						<td class="px-6 py-4" :colspan="days.length + 2">尚無設定</td>
					</tr>
					<tr class="modifyList border-2 border-solid border-[#cccccc] bg-transparent text-[#313131]">
						<!-- max-w-[200px]	 -->
						<td class="px-2 py-2 align-middle w-[25%] max-w-[200px]">
							<span class="inline-block align-middle">
								<a
									v-if="!isEditButtonClicked"
									class="align-middle font-medium text-blue-600 dark:text-blue-500 hover:opacity-75 editBtn cursor-pointer"
									@click="handleEditButtonClick"
								>
									<img alt="Edit" src="/src/assets/edit.svg" width="15" height="15" />
								</a>
							</span>
							<span
								class="inline-block align-middle"
								:class="{
									AAA: !isEditButtonClicked,
									BBB: isEditButtonClicked,
									'w-full': isEditButtonClicked,
									'pl-0': isEditButtonClicked,
									'pl-4': !isEditButtonClicked,
								}"
							>
								<!-- Use v-if or v-show to conditionally render content -->
								<span v-if="!isEditButtonClicked">血液重金屬檢測AAAAA</span>
								<span v-if="isEditButtonClicked">
									<div class="inline-block align-middle w-[25%] text-center">
										<button
											type="button"
											class="px-2 py-1 mb-1 text-xs font-medium text-center bg-[#D9D9D9] rounded-lg hover:bg-[#D1D5DB] text-[#313131] w-[40px]"
											@click="handleDeleteButtonClick"
										>
											刪除
										</button>
										<br />
										<button
											type="button"
											class="px-2 py-1 text-xs font-medium text-center text-white bg-[#0087E0] rounded-lg hover:bg-[#3F83F8] w-[40px] checkOkBtn"
											@click="handleCheckOkClick"
										>
											確認
										</button>
									</div>
									<!-- <select v-model="selected" class="inline-block align-middle w-[70%]">
										<option v-for="option in options" :key="option" :value="option" :disabled="option === 'option'">{{ option }}</option>
									</select> -->

									<SelectRadio :items="items" @selectBox="selectBox" />
								</span>
							</span>
						</td>
						<td class="px-2 py-4 align-middle text-center w">
							<div class="px-1 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span v-if="!isEditButtonClicked">09:00 - 12:00</span>
								<span v-if="isEditButtonClicked">
									<FormTime />
								</span>
							</div>
						</td>
						<td v-for="day in days" :key="day" class="px-1 py-4 align-middle text-center numBorder">
							<div class="px-1 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span v-if="!isEditButtonClicked">
									{{ item[`${day}_input1`] || 5 }} <br /><br />
									<div class="text-[#0087E0]">
										{{ `$${item[`${day}_input2`] || 1800}` }}
										<div class="rotate-90">-</div>
										{{ `$${item[`${day}_input3`] || 3600}` }}
									</div>
								</span>
								<span v-if="isEditButtonClicked">
									<!-- First input -->

									<input
										type="number"
										min="0"
										class="placeCenter h-7 w-16 text-center bg-white border rounded text-gray-900"
										v-model="item[`${day}_input1`]"
										:placeholder="`${item[day] || 5}`"
										:value="item[`${day}_input1`]"
									/>
									<br />
									<br />
									<!-- Second input -->
									<div class="relative z-10">
										<input
											type="number"
											min="0"
											class="placeCenter h-7 w-16 text-center bg-white border rounded text-gray-900"
											v-model="item[`${day}_input2`]"
											:placeholder="`${item[day] || 1800}`"
											:value="item[`${day}_input2`]"
										/>
									</div>
									<div class="rotate-90">-</div>
									<!-- Third input -->
									<div class="relative z-10">
										<input
											type="number"
											min="0"
											class="placeCenter h-7 w-16 text-center bg-white border rounded text-gray-900"
											v-model="item[`${day}_input3`]"
											:placeholder="`${item[day] || 3600}`"
											:value="item[`${day}_input3`]"
										/>
									</div>
								</span>
							</div>
						</td>
					</tr>
					<tr class="modifyList border-2 border-solid border-[#cccccc] bg-transparent text-[#313131]">
						<!-- max-w-[200px]	 -->
						<td class="px-2 py-2 align-middle w-[25%] max-w-[200px]">
							<span class="inline-block align-middle">
								<a
									v-if="!isEditButtonClicked"
									class="align-middle font-medium text-blue-600 dark:text-blue-500 hover:opacity-75 editBtn cursor-pointer"
									@click="handleEditButtonClick"
								>
									<img alt="Edit" src="/src/assets/edit.svg" width="15" height="15" />
								</a>
							</span>
							<span
								class="inline-block align-middle"
								:class="{
									AAA: !isEditButtonClicked,
									BBB: isEditButtonClicked,
									'w-full': isEditButtonClicked,
									'pl-0': isEditButtonClicked,
									'pl-4': !isEditButtonClicked,
								}"
							>
								<!-- Use v-if or v-show to conditionally render content -->
								<span v-if="!isEditButtonClicked">休診</span>
								<span v-if="isEditButtonClicked">
									<div class="inline-block align-middle w-[25%] text-center">
										<button
											type="button"
											class="px-2 py-1 mb-1 text-xs font-medium text-center bg-[#D9D9D9] rounded-lg hover:bg-[#D1D5DB] text-[#313131] w-[40px]"
											@click="handleDeleteButtonClick"
										>
											刪除
										</button>
										<br />
										<button
											type="button"
											class="px-2 py-1 text-xs font-medium text-center text-white bg-[#0087E0] rounded-lg hover:bg-[#3F83F8] w-[40px] checkOkBtn"
											@click="handleCheckOkClick"
										>
											確認
										</button>
									</div>
									<!-- <select v-model="selected" class="inline-block align-middle w-[70%]">
										<option v-for="option in options" :key="option" :value="option" :disabled="option === 'option'">{{ option }}</option>
									</select> -->

									<!-- <SelectRadio :items="items" @selectBox="selectBox" /> -->
									<span class="mr-2 text-left overflow-hidden whitespace-nowrap text-ellipsis">休診</span>
								</span>
							</span>
						</td>
						<td class="px-2 py-4 align-middle text-center w">
							<div class="px-1 py-2 inline-block" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span>-</span>
							</div>
						</td>
						<td class="px-1 py-4 align-middle text-center chBoxOn">
							<div class="px-1 py-2 inline-block" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span v-if="!isEditButtonClicked">
									<div>
										<svg
											class="w-3 h-3 text-gray-800 dark:text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
										</svg>
									</div>
								</span>
								<span v-if="isEditButtonClicked">
									<input type="checkbox" class="border-gray-300 rounded h-5 w-5 cursor-pointer" />
								</span>
							</div>
						</td>
						<td class="px-1 py-4 align-middle text-center chBoxOn">
							<div class="px-1 py-2 inline-block" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span v-if="!isEditButtonClicked">
									<div>-</div>
								</span>
								<span v-if="isEditButtonClicked">
									<input type="checkbox" class="border-gray-300 rounded h-5 w-5 cursor-pointer" />
								</span>
							</div>
						</td>
						<td class="px-1 py-4 align-middle text-center chBoxOn">
							<div class="px-1 py-2 inline-block" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span v-if="!isEditButtonClicked">
									<div>
										<svg
											class="w-3 h-3 text-gray-800 dark:text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
										</svg>
									</div>
								</span>
								<span v-if="isEditButtonClicked">
									<input type="checkbox" class="border-gray-300 rounded h-5 w-5 cursor-pointer" />
								</span>
							</div>
						</td>
						<td class="px-1 py-4 align-middle text-center chBoxOn">
							<div class="px-1 py-2 inline-block" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span v-if="!isEditButtonClicked">
									<div>
										<svg
											class="w-3 h-3 text-gray-800 dark:text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
										</svg>
									</div>
								</span>
								<span v-if="isEditButtonClicked">
									<input type="checkbox" class="border-gray-300 rounded h-5 w-5 cursor-pointer" />
								</span>
							</div>
						</td>
						<td class="px-1 py-4 align-middle text-center chBoxOn">
							<div class="px-1 py-2 inline-block" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span v-if="!isEditButtonClicked">
									<div>-</div>
								</span>
								<span v-if="isEditButtonClicked">
									<input type="checkbox" class="border-gray-300 rounded h-5 w-5 cursor-pointer" />
								</span>
							</div>
						</td>
						<td class="px-1 py-4 align-middle text-center chBoxOn">
							<div class="px-1 py-2 inline-block" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span v-if="!isEditButtonClicked">
									<div>-</div>
								</span>
								<span v-if="isEditButtonClicked">
									<input type="checkbox" class="border-gray-300 rounded h-5 w-5 cursor-pointer" />
								</span>
							</div>
						</td>
						<td class="px-1 py-4 align-middle text-center chBoxOn">
							<div class="px-1 py-2 inline-block" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span v-if="!isEditButtonClicked">
									<div>
										<svg
											class="w-3 h-3 text-gray-800 dark:text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
										</svg>
									</div>
								</span>
								<span v-if="isEditButtonClicked">
									<input type="checkbox" class="border-gray-300 rounded h-5 w-5 cursor-pointer" />
								</span>
							</div>
						</td>

						<!-- 回圈寫起來怪怪的 -->
						<!-- <td v-for="day in days" :key="`checkbox-${day}`" class="px-1 py-4 align-middle text-center chBoxOn">
							<div class="px-1 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
								<span v-if="!isEditButtonClicked">
									<div>
										<svg
											class="w-3 h-3 text-gray-800 dark:text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
										</svg>
									</div>
								</span>
								<span v-if="isEditButtonClicked">
									<input type="checkbox" class="border-gray-300 rounded h-5 w-5 cursor-pointer" />
								</span>
							</div>
						</td> -->
						<!-- 回圈寫起來怪怪的 -->
					</tr>
				</template>
			</tbody>
		</table>
	</div>
</template>

<style lang="scss" scoped>
// .numBorder span {
// 	border-bottom: 1px solid #000;
// }

.w {
	width: 130px;
	.BBB {
		form {
			width: 130px;
		}
	}
}

.numBorder {
	.BBB {
		width: 65px;
		margin: 0px auto;

		input {
			width: 60px;
		}
	}
}
</style>
