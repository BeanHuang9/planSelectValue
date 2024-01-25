<script lang="ts" setup>
import { ref, computed } from 'vue';
import FormPicker from '@/components/FormPicker.vue';

const currentTab = ref(1);

const setCurrentTab = (tab: any) => {
	currentTab.value = tab;
};

const currentTab2 = ref(1);

const setCurrentTab2 = (tab: any) => {
	currentTab2.value = tab;
};

//企業名稱
const isOpen1 = ref(false);
const selectedPlanItem = ref<string>('');
const planItems = ref(['企業名稱A', '企業名稱B', '企業名稱C', '企業名稱D', '企業名稱E']);

const planDropdown = () => {
	isOpen1.value = !isOpen1.value;
};
const selectPlanItem = (item: string) => {
	selectedPlanItem.value = item;
	isOpen1.value = false;
};

//訂單狀態
const isOpenOrder = ref(false);
const selectOrderStatusItem = ref<string>('');
const orderItems = ref(['訂單狀態A', '訂單狀態B', '訂單狀態C', '訂單狀態D', '訂單狀態E']);

const orderDropdown = () => {
	isOpenOrder.value = !isOpenOrder.value;
};
const selectOrderItem = (item: string) => {
	selectOrderStatusItem.value = item;
	isOpenOrder.value = false;
};

//download
const isOpenDownload = ref(false);
const selectDownloadItem = ref<string>('');
const downloadItems = ref(['下載為xls', '下載為PDF']);

const downloadDropdown = () => {
	isOpenDownload.value = !isOpenDownload.value;
};
const selectOrderDownloadItem = (item: string) => {
	selectDownloadItem.value = item;
	isOpenDownload.value = false;
};

const download = ref('下載');
const downloadText = computed<string>(() => {
	const iconHtml = `<svg class="w-4 h-4 inline-block align-middle text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
  </svg>`;
	const customText = download.value || '下載';
	return `${iconHtml} ${customText}`;
});
</script>

<template>
	<div class="py-16">
		<div class="w-2/3 m-auto tracking-wide">
			<div class="flex items-center justify-between rounded-lg px-6 py-2 w-full bg-[#e4e4e4]">
				<h3 class="text-lg">預約列表</h3>
				<form>
					<div class="flex">
						<div class="relative w-[200px]">
							<input
								type="search"
								id="search"
								class="block p-2.5 w-full z-20 rounded-lg text-sm text-[#959595] border border-[#000] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
								placeholder="搜尋"
								required
							/>
							<button
								type="submit"
								class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black rounded-e-lg border border-l-0 border-black hover:opacity-50"
							>
								<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
								<span class="sr-only">Search</span>
							</button>
						</div>
					</div>
				</form>
			</div>

			<div class="flex items-center justify-between mt-4 mb-8 w-full">
				<div class="flex items-center selectBox">
					<span class="mr-3"><FormPicker /></span>
					<!-- 企業名稱 -->
					<span class="relative mr-3"
						><button
							class="inline-flex px-6 py-1.5 w-[140px] text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
							@click="planDropdown"
						>
							<span class="mr-2 text-left">{{ selectedPlanItem || '企業名稱' }}</span>
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
							v-show="isOpen1"
							class="absolute w-full z-10 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
						>
							<a
								v-for="(item, index) in planItems"
								:key="index"
								class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md text-sm"
								@click="selectPlanItem(item)"
							>
								{{ item }}
							</a>
						</div></span
					>

					<!-- 訂單狀態 -->
					<span class="relative mr-3"
						><button
							class="inline-flex px-6 py-1.5 w-[140px] text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
							@click="orderDropdown"
						>
							<span class="mr-2 text-left">{{ selectOrderStatusItem || '訂單狀態' }}</span>
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
							v-show="isOpenOrder"
							class="absolute w-full z-10 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
						>
							<a
								v-for="(item, index) in orderItems"
								:key="index"
								class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md text-sm"
								@click="selectOrderItem(item)"
							>
								{{ item }}
							</a>
						</div></span
					>
					<span><button type="submit" class="text-white bg-[#0087E0] hover:bg-blue-800 text-sm px-3 py-1 border border-[#000]">查詢</button></span>
				</div>
				<div class="flex items-center selectBox">
					<!-- download -->
					<span class="relative mr-3"
						><button
							class="inline-flex px-4 py-1.5 w-[120px] text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
							@click="downloadDropdown"
						>
							<!-- <span class="mr-2 text-left">{{ selectDownloadItem || '下載' }}</span> -->
							<span class="mr-2 text-left" v-html="downloadText"></span>
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
							v-show="isOpenDownload"
							class="absolute w-full z-10 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
						>
							<a
								v-for="(item, index) in downloadItems"
								:key="index"
								class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md text-sm"
								@click="selectOrderDownloadItem(item)"
							>
								{{ item }}
							</a>
						</div></span
					>
				</div>
			</div>

			<!-- table -->
			<div class="relative overflow-x-auto shadow-md rounded-lg">
				<table class="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
					<thead class="text-base text-black bg-[#CACACA] bg-opacity-30 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="px-3 py-3">訂單時間</th>
							<th scope="col" class="px-3 py-3">受檢時間</th>
							<th scope="col" class="px-3 py-3">姓名/生日</th>
							<th scope="col" class="px-3 py-3">公司</th>
							<th scope="col" class="px-3 py-3">方案名稱</th>
							<th scope="col" class="px-3 py-3">訂單狀態</th>
							<th scope="col" class="px-3 py-3">預約確認</th>
							<th scope="col" class="px-3 py-3">報到狀態</th>
						</tr>
					</thead>
					<tbody>
						<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-[#CACACA] even:bg-opacity-10 border-b dark:border-gray-700 borderTopLine">
							<td class="px-2 py-3">2023-10-02-<br />8:20-8:40</td>
							<td class="px-2 py-3">2023-10-02-<br />8:20-8:40</td>
							<td class="px-3 py-3">林OO<br /><small>1989/06/04</small></td>
							<td class="px-3 py-3">亞東氣體</td>
							<td class="px-3 py-3 whitespace-nowrap dark:text-white">亞東氣體-<br />XXXXXXXX 方案Ａ</td>
							<td class="px-3 py-3">需要改期</td>
							<td class="px-3 py-3">
								<div class="flex justify-center">
									<div
										:class="{
											tabsSwitch: true,
											greenBackground: currentTab === 1,
											grayBackground: currentTab === 2,
											redBackground: currentTab === 3,
										}"
									>
										<input type="radio" id="radio-1" name="tabs" checked="" @change="setCurrentTab(1)" />
										<label class="tab" for="radio-1">是</label>
										<input type="radio" id="radio-2" name="tabs" @change="setCurrentTab(2)" />
										<label class="tab" for="radio-2">-</label>
										<input type="radio" id="radio-3" name="tabs" @change="setCurrentTab(3)" />
										<label class="tab" for="radio-3">否</label>
										<span class="glider"></span>
									</div>
								</div>
							</td>
							<td class="px-3 py-3">
								<div class="flex justify-center">
									<div
										:class="{
											tabsSwitch: true,
											greenBackground: currentTab2 === 4,
											grayBackground: currentTab2 === 5,
											redBackground: currentTab2 === 6,
										}"
									>
										<input type="radio" id="radio-4" name="tabs2" checked="" @change="setCurrentTab2(4)" />
										<label class="tab" for="radio-4">是</label>
										<input type="radio" id="radio-5" name="tabs2" @change="setCurrentTab2(5)" />
										<label class="tab" for="radio-5">-</label>
										<input type="radio" id="radio-6" name="tabs2" @change="setCurrentTab2(6)" />
										<label class="tab" for="radio-6">否</label>
										<span class="glider"></span>
									</div>
								</div>
							</td>
						</tr>
						<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-[#CACACA] even:bg-opacity-10 border-b dark:border-gray-700 borderTopLine">
							<td class="px-3 py-3">2023-10-02-<br />8:20-8:40</td>
							<td class="px-3 py-3">2023-10-02-<br />8:20-8:40</td>
							<td class="px-3 py-3">林OO<br /><small>1989/06/04</small></td>
							<td class="px-3 py-3">亞東氣體</td>
							<td class="px-3 py-3 whitespace-nowrap dark:text-white">亞東氣體-<br />XXXXXXXX 方案Ａ</td>
							<td class="px-3 py-3">需要改期</td>
							<td class="px-3 py-3">Btn</td>
							<td class="px-3 py-3">Btn</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- pageNum -->
			<div class="mt-4 flex items-center">
				<div class="flex w-2/6">
					<p class="text-sm text-gray-700">1-10 of 66 items</p>
				</div>

				<nav class="flex w-2/6 numCenter justify-center">
					<ul class="list-style-none flex">
						<li>
							<a
								class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all hover:text-[#0087e0]"
								href="#"
								aria-label="PreviousFirst"
							>
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li>
							<a
								class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all hover:text-[#0087e0]"
								href="#"
								aria-label="Previous"
							>
								<span aria-hidden="true">&lsaquo;</span>
							</a>
						</li>
						<li>
							<a
								:class="{ selected: currentTab === 1 }"
								@click="setCurrentTab(1)"
								class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all hover:text-[#0087e0]"
								href="#"
								>1</a
							>
						</li>
						<li>
							<a
								:class="{ selected: currentTab === 2 }"
								@click="setCurrentTab(2)"
								class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all hover:text-[#0087e0]"
								href="#"
								>2</a
							>
						</li>
						<li>
							<a
								:class="{ selected: currentTab === 3 }"
								@click="setCurrentTab(3)"
								class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all hover:text-[#0087e0]"
								href="#"
								>3</a
							>
						</li>
						<li>
							<a
								class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all hover:text-[#0087e0]"
								href="#"
								aria-label="Next"
							>
								<span aria-hidden="true">&rsaquo;</span>
							</a>
						</li>
						<li>
							<a
								class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all hover:text-[#0087e0]"
								href="#"
								aria-label="NextLast"
							>
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
				</nav>
				<div class="flex w-2/6"></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
input[type='search']::-webkit-search-cancel-button {
	-webkit-appearance: none;
}
.selected {
	color: #0087e0;
}

th {
	vertical-align: middle;
	text-align: center;
	word-break: keep-all;
}

td {
	vertical-align: middle;
	word-break: keep-all;
}
.tabsSwitch {
	display: flex;
	position: relative;
	background-color: #e4e4e4;
	border-radius: 99px;
	padding: 0.15rem 0.25rem;
	box-shadow: 0px 0px 13px 2px rgba(20%, 20%, 20%, 0.3) inset;
	border: 4px solid #e4e4e4;

	&.greenBackground {
		background-color: #00c567; /* Green color for '是' */
		border-color: #9aefd9;
	}

	&.grayBackground {
		background-color: rgba(130, 130, 130, 0.3); /* Dark gray color for '-' */
		border-color: #e4e4e4;
	}

	&.redBackground {
		background-color: #fd6161; /* Red color for '否' */
		border-color: #fed8d8;
	}
}

.tabsSwitch * {
	z-index: 2;
}

input[type='radio'] {
	display: none;
}

.tab {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 35px;
	font-size: 0.8rem;
	font-weight: 500;
	border-radius: 99px;
	cursor: pointer;
	transition: color 0.15s ease-in;
}

input[id='radio-1']:checked ~ .glider {
	transform: translateX(0);
}
input[id='radio-2']:checked ~ .glider {
	transform: translateX(100%);
}

input[id='radio-3']:checked ~ .glider {
	transform: translateX(200%);
}

input[id='radio-4']:checked ~ .glider {
	transform: translateX(0);
}
input[id='radio-5']:checked ~ .glider {
	transform: translateX(100%);
}

input[id='radio-6']:checked ~ .glider {
	transform: translateX(200%);
}
.glider {
	position: absolute;
	display: flex;
	height: 30px;
	width: 35px;
	background-color: #fff;
	z-index: 1;
	border-radius: 99px;
	transition: 0.25s ease-out;
}
</style>
