<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import FormPicker from '@/components/FormPicker.vue';
import FormTime from '@/components/FormTime.vue';
import HandleTable from '@/components/HandleTable.vue';
import NormalTable from '@/components/NormalTable.vue';
import SelectCheck from '@/components/SelectList/SelectCheck.vue';
import SelectPlan from '@/components/SelectList/SelectPlan.vue';
import SelectCompany from '@/components/SelectList/SelectCompany.vue';

// import AgencyCalendar from '@/components/AgencyCalendar.vue';

import DateParts from '@/components/DateParts.vue';

const areaList: Ref<string[]> = ref(['特殊設定', '常態設定']);
const currentArea: Ref<string> = ref('特殊設定');

const eventTabs: Ref<string[]> = ref(['診次調整', '特殊檢查', '指定企業', '休診']);
const normalTabs: Ref<string[]> = ref(['診次設定', '特殊檢查', '休診']);
const selectedTab: Ref<string> = ref('診次調整');
const normalTab: Ref<string> = ref('診次設定');

//特殊項目
// const selectedItem = ref([]);
// const SpecialSelectedItem = ref([]);

const isOpen = ref(false);
const isOpen1 = ref(false);
// const isOpenSpecial = ref(false);

// 公司 const selectedCompany = ref<string>('');
const searchTerm = ref<string>('');
const items = ref([
	'英屬維京群島商華敦國際有限公司台灣分公司aaaaa',
	'康美包紙盒包裝股份有限公司fwefwe',
	'艾比斯馬特國際股份有限公司',
	'優志旺股份有限公司',
	'台灣山葉音樂股份有限公司',
]);
const filteredItems = ref(items.value);

const selectedPlanItem = ref<string>('');
const planItems = ref(['方案A', '方案B', '方案C-腸胃道', '方案C-心血管', '方案D', '方案E']);
// const specialItems = ref([
// 	'心電心音檢查 ( )',
// 	'無痛胃鏡檢查(70歲以上需事前評估) ( Panendoscopy exam )',
// 	'心臟超音波檢查 ( Cardiac sonogram exam )',
// 	'無痛內視鏡CO2充氣系統 ( CO2 inflatable system for painless endoscope )',
// 	'心臟冠狀動脈鈣化指數分析 ( 心臟冠狀動脈鈣化指數分析 )',
// 	'攝護腺磁振造影檢查 ( 攝護腺腫瘤核磁共振篩檢 )',
// 	'血液重金屬檢測 ( heavy metal blood test )',
// ]);

// const specialItems2 = ref([
// 	'2222心電心音檢查 ( )',
// 	'無痛胃鏡檢查(70歲以上需事前評估) ( Panendoscopy exam )',
// 	'心臟超音波檢查 ( Cardiac sonogram exam )',
// 	'無痛內視鏡CO2充氣系統 ( CO2 inflatable system for painless endoscope )',
// 	'心臟冠狀動脈鈣化指數分析 ( 心臟冠狀動脈鈣化指數分析 )',
// 	'攝護腺磁振造影檢查 ( 攝護腺腫瘤核磁共振篩檢 )',
// 	'血液重金屬檢測 ( heavy metal blood test )',
// ]);

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

const planDropdown = () => {
	isOpen1.value = !isOpen1.value;
};
const selectPlanItem = (item: string) => {
	selectedPlanItem.value = item;
	isOpen1.value = false;
};

// const specialDropdown = () => {
// 	isOpenSpecial.value = !isOpenSpecial.value;
// };

const filterItems = () => {
	const lowerCaseSearchTerm = searchTerm.value.toLowerCase();
	filteredItems.value = items.value.filter((item) => item.toLowerCase().includes(lowerCaseSearchTerm));
};

const selectCompany = (item: string) => {
	// console.log('item', item);
	selectedCompany.value = item;
	isOpen.value = false;
};

let selectCompanyId = ref(0);
function callback(res: number) {
	console.log(res);
	selectCompanyId.value = res;
}

onMounted(() => {
	filterItems();
});
</script>
<template>
	<div class="py-16">
		<div class="w-3/4 m-auto flex justify-start font-semibold tracking-2.25 text-lg">
			<button
				v-for="(item, idx) in areaList"
				:key="idx"
				:class="{ 'bg-[#ECF4F7]': currentArea === item }"
				class="rounded-t-2xl px-6 py-3 border-2 border-b-0 border-[#cccccc] shadow mr-1 text-[#313131] text-base"
				@click="currentArea = item"
			>
				{{ item }}
			</button>
		</div>
		<!-- py-4 w-2/3 m-auto flex justify-center items-center bg-[#ECF4F7] -->

		<div class="m-auto flex justify-center items-center">
			<div class="h-5/6 w-full text-4xl">
				<div class="tab-content">
					<div v-if="currentArea === '特殊設定'" class="tab-pane">
						<div class="w-3/4 m-auto bg-[#ECF4F7] border-2 border-b-0 border-solid border-[#cccccc]">
							<div class="px-8 py-6">
								<div class="set-content leading-normal">
									<div class="flex flex-wrap text-[#313131]">
										<div class="flex items-center me-4 w-20 text-base">事件</div>

										<div class="flex items-center me-4">
											<div v-for="(tab, index) in eventTabs" :key="index" class="flex items-center me-4">
												<input
													:id="'radio-' + (index + 1)"
													v-model="selectedTab"
													type="radio"
													:value="tab"
													name="colored-radio"
													class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
												/>
												<label :for="'radio-' + (index + 1)" class="ms-2 text-sm font-medium dark:text-gray-300">{{ tab }}</label>
											</div>
										</div>
										<div class="w-full">
											<!-- <div v-if="selectedTab === '診次調整'">Content for 診次調整</div> -->
											<div v-if="selectedTab === '診次調整'"></div>
											<div v-if="selectedTab === '特殊檢查'">
												<div class="relative group ml-[90px]">
													<SelectCheck />
												</div>
											</div>
											<div v-if="selectedTab === '指定企業'">
												<div class="flex items-center justify-between ml-[90px]">
													<div class="relative group w-[70%]">
														<SelectCompany @chooseCompany="callback" />
													</div>

													<div class="relative group w-[29%]">
														<SelectPlan :selectCompanyId="selectCompanyId" />
													</div>
												</div>
											</div>
											<div v-if="selectedTab === '休診'"></div>

											<div>
												<div class="flex flex-wrap text-[#313131] mt-8 mb-8">
													<div class="flex items-center me-4 w-20 text-base">日期</div>
													<span><FormPicker /></span>
													<span class="flex items-center ml-8 text-base"> 時段 </span>
													<span class="ml-4"><FormTime /></span>
												</div>
												<div class="flex flex-wrap text-[#313131] mb-8">
													<div class="flex items-center me-4 w-20 text-base">重複</div>
													<div id="checkboxDay" class="flex items-center">
														<label
															><input type="checkbox" name="variety" value="每日" /><span class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>每日</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週一" checked="checked" /><span
																class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週一</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週二" /><span class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週二</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週三" checked="checked" /><span
																class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週三</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週四" checked="checked" /><span
																class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週四</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週五" /><span class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週五</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週六" /><span class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週六</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週日" /><span class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週日</span
															></label
														>
													</div>
												</div>
												<div class="flex flex-wrap text-[#313131] mb-8">
													<div class="flex items-center me-4 w-20 text-base">名額</div>
													<!-- <div class="flex items-center me-4">
															<input
																id="radio-closed"
																checked
																type="radio"
																value=""
																name="closed"
																class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
															/>
															<label for="radio-closed" class="ms-2 text-sm font-medium dark:text-gray-300">休診</label>
														</div> -->
													<div class="flex items-center me-4">
														<input
															id="radio-people"
															checked
															type="radio"
															value=""
															name="radio-people"
															class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
														/>
														<label for="radio-people" class="ms-2 text-sm font-medium dark:text-gray-300"
															>調整名額為
															<input
																type="number"
																class="placeCenter ml-1 mr-1 h-7 w-16 text-center bg-white border rounded w-[100px] text-gray-900"
																placeholder="15"
															/>
															位
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- btn -->
								<div class="text-center">
									<button
										type="button"
										class="w-full drop-shadow-lg border border-slate-300 text-[#313131] bg-[#FFF] hover:bg-[#ccc]/80 focus:ring-2 focus:outline-none focus:ring-[#ccc]/50 font-medium text-sm px-5 py-2.5 text-center dark:hover:bg-[#ccc]/80 dark:focus:ring-[#ccc]/40 me-2 mb-2"
									>
										新增條件
									</button>
								</div>
							</div>
						</div>

						<!-- table -->
						<div class="relative w-3/4 m-auto bg-[#ECF4F7]">
							<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
								<!-- uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 -->
								<!-- <thead class="text-base bg-transparent text-[#313131]">
									<tr>
										<th scope="col" class="align-middle text-center py-1 border-l-0 border-2 border-solid border-[#cccccc]" width="5%">
											優先<br />順序
										</th>
										<th scope="col" class="align-middle text-center py-1 border-2 border-solid border-[#cccccc]" width="15%">時間</th>
										<th scope="col" class="align-middle text-center py-1 border-2 border-solid border-[#cccccc]" width="15%">時段</th>
										<th scope="col" class="align-middle text-center py-1 border-2 border-solid border-[#cccccc]" width="15%">重複</th>
										<th scope="col" class="align-middle text-center py-1 border-r-0 border-2 border-solid border-[#cccccc]" width="50%">事件</th>
									</tr>
								</thead> -->
								<!-- <tbody>
									沒有資料顯示
									<tr class="border-b bg-transparent text-center">
										<td class="px-6 py-4" colspan="5">尚無設定</td>
									</tr>

									有資料顯示 
									<tr class="border-b bg-transparent text-center text-[#313131]">
										<td class="px-3 py-2 align-middle text-center border-l-0 border-2 border-solid border-[#cccccc]">Move</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">2023-11-1<br />至<br />2023-11-1</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">13:00<br />至<br />13:40</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">週一 週二<br />週三 週四<br />週五 週六</td>
										<td class="px-3 py-2 text-left align-middle border-r-0 border-2 border-solid border-[#cccccc]">
											<span>指定企業名額：九乘九 E , F 方案, 3位</span>
											<a href="#" class="float-right align-middle font-medium text-blue-600 dark:text-blue-500 hover:opacity-75">
												<img alt="Edit" src="@/assets/edit.svg" width="20" height="20" />
											</a>
										</td>
									</tr>
									<tr class="border-b bg-transparent text-center text-[#313131]">
										<td class="px-3 py-2 align-middle text-center border-l-0 border-2 border-solid border-[#cccccc]">Move</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">2023-11-15<br />至<br />2023-11-30</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">13:00<br />至<br />13:40</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">週一 週三</td>
										<td class="px-3 py-2 text-left align-middle border-r-0 border-2 border-solid border-[#cccccc]">
											<span>診次調整：5位</span>
											<a href="#" class="float-right align-middle font-medium text-blue-600 dark:text-blue-500 hover:opacity-75">
												<img alt="Edit" src="@/assets/edit.svg" width="20" height="20" />
										</a>
										</td>
									</tr>
								</tbody>-->
							</table>
							<HandleTable />
						</div>

						<div class="w-3/4 m-auto bg-[#fff] border-0">
							<p class="leading-normal text-sm pt-1 text-[#7A7A7A]">備註說明：拖曳項目區塊可調整事件優先順序</p>
						</div>

						<div class="">
							<DateParts />
							<!-- <AgencyCalendar /> -->
						</div>
					</div>
					<div v-if="currentArea === '常態設定'" class="tab-pane">
						<div class="w-3/4 m-auto bg-[#ECF4F7] border-2 border-b-0 border-solid border-[#cccccc]">
							<div class="px-8 py-6">
								<div class="set-content leading-normal">
									<div class="flex flex-wrap text-[#313131]">
										<div class="flex items-center me-4 w-20 text-base">事件</div>

										<div class="flex items-center me-4">
											<div v-for="(tab, index) in normalTabs" :key="index" class="flex items-center me-4">
												<input
													:id="'radio-' + (index + 1)"
													v-model="normalTab"
													type="radio"
													:value="tab"
													name="normal-radio"
													class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
												/>
												<label :for="'radio-' + (index + 1)" class="ms-2 text-sm font-medium dark:text-gray-300">{{ tab }}</label>
											</div>
										</div>
										<div class="w-full">
											<div v-if="normalTab === '診次設定'"></div>
											<div v-if="normalTab === '特殊檢查'">
												<div class="relative group ml-[90px]">
													<SelectCheck />
												</div>
											</div>
											<div v-if="normalTab === '休診'"></div>

											<div>
												<div class="flex flex-wrap text-[#313131] mt-8 mb-8">
													<div class="flex items-center me-4 w-20 text-base">時段</div>
													<span><FormTime /></span>
												</div>
												<div class="flex flex-wrap text-[#313131] mb-8">
													<div class="flex items-center me-4 w-20 text-base">重複</div>
													<div id="checkboxDay" class="flex items-center">
														<label
															><input type="checkbox" name="variety" value="每日" /><span class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>每日</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週一" checked="checked" /><span
																class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週一</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週二" /><span class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週二</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週三" checked="checked" /><span
																class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週三</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週四" checked="checked" /><span
																class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週四</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週五" /><span class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週五</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週六" /><span class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週六</span
															></label
														>
														<label
															><input type="checkbox" name="variety" value="週日" /><span class="rounded-md button text-sm py-0.5 px-4 mr-3"
																>週日</span
															></label
														>
													</div>
												</div>
												<div class="flex flex-wrap text-[#313131] mt-8 mb-8">
													<div class="flex items-center me-4 w-20 text-base">金額</div>

													<div class="flex justify-start items-center text-base">
														<div class="relative flex-grow w-[100px]">
															<input
																type="number"
																min="0"
																id="number-input"
																aria-describedby="helper-text-explanation"
																class="text-sm flex-grow pl-5 pr-2 py-1 bg-white border rounded w-full text-gray-900"
																placeholder="(非必填)"
																required
															/>
														</div>
														<span class="flex-shrink-0 m-2 text-sm"> 至 </span>
														<div class="relative flex-grow w-[100px]">
															<input
																type="number"
																min="0"
																id="number-input"
																aria-describedby="helper-text-explanation"
																class="text-sm flex-grow pl-5 pr-2 py-1 bg-white border rounded w-full text-gray-900"
																placeholder="(非必填)"
																required
															/>
														</div>
													</div>
												</div>
												<div class="flex flex-wrap text-[#313131] mb-8">
													<div class="flex items-center me-4 w-20 text-base">名額</div>
													<!-- <div class="flex items-center me-4">
														<input
															id="radio-closed"
															checked
															type="radio"
															value=""
															name="closed"
															class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
														/>
														<label for="radio-closed" class="ms-2 text-sm font-medium dark:text-gray-300">休診</label>
													</div> -->
													<div class="flex items-center me-4">
														<!-- <input
															id="radio-people"
															checked
															type="radio"
															value=""
															name="radio-people"
															class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
														/> -->
														<label for="radio-people" class="text-sm font-medium dark:text-gray-300"
															><input
																type="number"
																class="placeCenter mr-1 h-7 w-16 text-center bg-white border rounded w-[100px] text-gray-900"
																placeholder="15"
															/>
															位
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- btn -->
								<div class="text-center">
									<button
										type="button"
										class="w-full drop-shadow-lg border border-slate-300 text-[#313131] bg-[#FFF] hover:bg-[#ccc]/80 focus:ring-2 focus:outline-none focus:ring-[#ccc]/50 font-medium text-sm px-5 py-2.5 text-center dark:hover:bg-[#ccc]/80 dark:focus:ring-[#ccc]/40 me-2 mb-2"
									>
										新增條件
									</button>
								</div>
							</div>
						</div>

						<!-- table -->
						<div class="relative w-3/4 m-auto bg-[#ECF4F7]">
							<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
								<!-- uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 -->
								<!-- <thead class="text-base bg-transparent text-[#313131]">
									<tr>
										<th scope="col" class="align-middle text-center py-1 border-l-0 border-2 border-solid border-[#cccccc]" width="5%">
											優先<br />順序
										</th>
										<th scope="col" class="align-middle text-center py-1 border-2 border-solid border-[#cccccc]" width="15%">時間</th>
										<th scope="col" class="align-middle text-center py-1 border-2 border-solid border-[#cccccc]" width="15%">時段</th>
										<th scope="col" class="align-middle text-center py-1 border-2 border-solid border-[#cccccc]" width="15%">重複</th>
										<th scope="col" class="align-middle text-center py-1 border-r-0 border-2 border-solid border-[#cccccc]" width="50%">事件</th>
									</tr>
								</thead> -->
								<!-- <tbody>
									沒有資料顯示
									<tr class="border-b bg-transparent text-center">
										<td class="px-6 py-4" colspan="5">尚無設定</td>
									</tr>

									有資料顯示 
									<tr class="border-b bg-transparent text-center text-[#313131]">
										<td class="px-3 py-2 align-middle text-center border-l-0 border-2 border-solid border-[#cccccc]">Move</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">2023-11-1<br />至<br />2023-11-1</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">13:00<br />至<br />13:40</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">週一 週二<br />週三 週四<br />週五 週六</td>
										<td class="px-3 py-2 text-left align-middle border-r-0 border-2 border-solid border-[#cccccc]">
											<span>指定企業名額：九乘九 E , F 方案, 3位</span>
											<a href="#" class="float-right align-middle font-medium text-blue-600 dark:text-blue-500 hover:opacity-75">
												<img alt="Edit" src="@/assets/edit.svg" width="20" height="20" />
											</a>
										</td>
									</tr>
									<tr class="border-b bg-transparent text-center text-[#313131]">
										<td class="px-3 py-2 align-middle text-center border-l-0 border-2 border-solid border-[#cccccc]">Move</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">2023-11-15<br />至<br />2023-11-30</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">13:00<br />至<br />13:40</td>
										<td class="px-3 py-2 align-middle text-center border-2 border-solid border-[#cccccc]">週一 週三</td>
										<td class="px-3 py-2 text-left align-middle border-r-0 border-2 border-solid border-[#cccccc]">
											<span>診次調整：5位</span>
											<a href="#" class="float-right align-middle font-medium text-blue-600 dark:text-blue-500 hover:opacity-75">
												<img alt="Edit" src="@/assets/edit.svg" width="20" height="20" />
											</a>
										</td>
									</tr>
								</tbody>-->
							</table>
							<NormalTable />
						</div>
						<div class="w-3/4 m-auto bg-[#fff] border-0">
							<p class="leading-normal text-sm pt-1 text-[#7A7A7A]">備註說明：</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#checkboxDay input[type='checkbox'] {
	display: none;
}
#checkboxDay input:checked + .button {
	background: #0087e0;
	color: #fff;
}
#checkboxDay {
	.button {
		display: flex;
		background: #d9d9d9;
		color: #313131;
		cursor: pointer;

		&:hover {
			background: #0087e0;
			color: #fff;
		}
	}
}
</style>
