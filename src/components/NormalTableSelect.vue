<script setup lang="ts">
import { ref } from 'vue';
import FormTime from '@/components/FormTime.vue';
const days = ['週一', '週二', '週三', '週四', '週五', '週六', '週日'];

const data = ref([
	{
		// title: '無痛胃鏡檢查(70歲以上需事前評估)',
		// Mon: 0,
		// Tue: 0,
		// Wed: '',
		// Thu: 2,
		// Fri: 3,
		// Sat: '',
		// Sun: '',
	},
]);

const selected = ref<string>('');
const options = [
	'血液重金屬檢測',
	'心電心音檢查 ( )',
	'無痛胃鏡檢查(70歲以上需事前評估) ( Panendoscopy exam )',
	'心臟超音波檢查 ( Cardiac sonogram exam )',
	'無痛內視鏡CO2充氣系統 ( CO2 inflatable system for painless endoscope )',
	'心臟冠狀動脈鈣化指數分析 ( 心臟冠狀動脈鈣化指數分析 )',
	'攝護腺磁振造影檢查 ( 攝護腺腫瘤核磁共振篩檢 )',
	'血液重金屬檢測 ( heavy metal blood test )',
];

const isEditButtonClicked = ref(false);
const handleEditButtonClick = () => {
	isEditButtonClicked.value = !isEditButtonClicked.value;
};

const handleCheckOkClick = () => {
	isEditButtonClicked.value = !isEditButtonClicked.value;
};

const isOpenSpecial = ref(false);
const searchTerm = ref<string>('');
const SpecialSelectedItem = ref([]);
const specialItems2 = ref([
	'2222心電心音檢查 ( )',
	'無痛胃鏡檢查(70歲以上需事前評估) ( Panendoscopy exam )',
	'心臟超音波檢查 ( Cardiac sonogram exam )',
	'無痛內視鏡CO2充氣系統 ( CO2 inflatable system for painless endoscope )',
	'心臟冠狀動脈鈣化指數分析 ( 心臟冠狀動脈鈣化指數分析 )',
	'攝護腺磁振造影檢查 ( 攝護腺腫瘤核磁共振篩檢 )',
	'血液重金屬檢測 ( heavy metal blood test )',
]);
const specialDropdown = () => {
	isOpenSpecial.value = !isOpenSpecial.value;
};

onMounted(() => {
	selected.value = options[0];
});
</script>

<template>
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
			<tr v-if="data.length === 0" class="border-2 border-solid border-[#cccccc] bg-transparent text-[#313131]">
				<td class="px-6 py-4" :colspan="days.length + 1">尚無設定</td>
			</tr>
			<tr class="modifyList border-2 border-solid border-[#cccccc] bg-transparent text-[#313131]">
				<td class="px-3 py-2 align-middle w-[25%]">
					<span class="inline-block align-middle">
						<a
							v-if="!isEditButtonClicked"
							class="align-middle font-medium text-blue-600 dark:text-blue-500 hover:opacity-75 editBtn"
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
						<!-- Content based on the condition -->
						<!-- Use v-if or v-show to conditionally render content -->
						<span v-if="!isEditButtonClicked">血液重金屬檢測</span>
						<span v-if="isEditButtonClicked">
							<div class="inline-block align-middle w-[27%]">
								<button
									type="button"
									class="px-2 py-1 mb-1 text-xs font-medium text-center bg-[#D9D9D9] rounded-lg hover:bg-[#D1D5DB] text-[#313131] w-[40px]"
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
								<option disabled value="">請選擇</option>
								<option v-for="option in options" :key="option" :value="option" :disabled="option === 'option'">{{ option }}</option>
							</select> -->
							<!-- 111 -->
							<button
								class="inline-flex w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
								@click="specialDropdown"
							>
								<span class="mr-2 text-left">{{ SpecialSelectedItem.length ? SpecialSelectedItem.join(', ') : '請選擇特殊檢查項目' }}</span>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5 ml-2 -mr-1 absolute right-2"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
							<div
								v-show="isOpenSpecial"
								class="absolute w-full z-10 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
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
									<li v-for="(item, i) in specialItems2" :key="item">
										<div class="flex items-center">
											<input
												:id="i"
												v-model="SpecialSelectedItem"
												type="checkbox"
												:value="item"
												class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
											/>
											<label :for="i" class="ms-2 text-gray-700 text-sm font-medium dark:text-gray-300">{{ item }}</label>
										</div>
									</li>
								</ul>
							</div>
							<!-- 111 -->
						</span>
					</span>
				</td>
				<td class="px-2 py-4 align-middle text-center w" width="50">
					<div class="px-3 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
						<span v-if="!isEditButtonClicked">09:00 - 12:00</span>
						<span v-if="isEditButtonClicked">
							<FormTime />
						</span>
					</div>
				</td>
				<td class="px-2 py-4 align-middle text-center numBorder">
					<div class="px-3 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
						<span v-if="!isEditButtonClicked">3</span>
						<span v-if="isEditButtonClicked">
							<input
								type="number"
								class="placeCenter mr-1 h-7 w-16 text-center bg-white border rounded text-gray-900"
								placeholder="3"
								data-v-615790a6=""
							/>
						</span>
					</div>
				</td>
				<td class="px-2 py-4 align-middle text-center numBorder">
					<div class="px-3 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
						<span v-if="!isEditButtonClicked">3</span>
						<span v-if="isEditButtonClicked">
							<input
								type="number"
								class="placeCenter mr-1 h-7 w-16 text-center bg-white border rounded text-gray-900"
								placeholder="3"
								data-v-615790a6=""
							/>
						</span>
					</div>
				</td>
				<td class="px-2 py-4 align-middle text-center numBorder">
					<div class="px-3 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
						<span v-if="!isEditButtonClicked">3</span>
						<span v-if="isEditButtonClicked">
							<input
								type="number"
								class="placeCenter mr-1 h-7 w-16 text-center bg-white border rounded text-gray-900"
								placeholder="3"
								data-v-615790a6=""
							/>
						</span>
					</div>
				</td>
				<td class="px-2 py-4 align-middle text-center numBorder">
					<div class="px-3 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
						<span v-if="!isEditButtonClicked">3</span>
						<span v-if="isEditButtonClicked">
							<input
								type="number"
								class="placeCenter mr-1 h-7 w-16 text-center bg-white border rounded text-gray-900"
								placeholder="3"
								data-v-615790a6=""
							/>
						</span>
					</div>
				</td>
				<td class="px-2 py-4 align-middle text-center numBorder">
					<div class="px-3 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
						<span v-if="!isEditButtonClicked">3</span>
						<span v-if="isEditButtonClicked">
							<input
								type="number"
								class="placeCenter mr-1 h-7 w-16 text-center bg-white border rounded text-gray-900"
								placeholder="3"
								data-v-615790a6=""
							/>
						</span>
					</div>
				</td>
				<td class="px-2 py-4 align-middle text-center numBorder">
					<div class="px-3 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
						<span v-if="!isEditButtonClicked">3</span>
						<span v-if="isEditButtonClicked">
							<input
								type="number"
								class="placeCenter mr-1 h-7 w-16 text-center bg-white border rounded text-gray-900"
								placeholder="3"
								data-v-615790a6=""
							/>
						</span>
					</div>
				</td>
				<td class="px-2 py-4 align-middle text-center numBorder">
					<div class="px-3 py-2" :class="{ AAA: !isEditButtonClicked, BBB: isEditButtonClicked }">
						<span v-if="!isEditButtonClicked">3</span>
						<span v-if="isEditButtonClicked">
							<input
								type="number"
								class="placeCenter mr-1 h-7 w-16 text-center bg-white border rounded text-gray-900"
								placeholder="3"
								data-v-615790a6=""
							/>
						</span>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
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
		width: 60px;

		input {
			width: 35px;
		}
	}
}
</style>
