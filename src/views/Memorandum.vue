<script lang="ts" setup>
import { ref } from 'vue';

interface Cell {
	content: string;
	width: string;
	rowspan?: number;
	colspan?: number;
	isCenter?: any;
}

const areaList: Ref<string[]> = ref(['照會單', '企業員工清單', '預約狀態']);
const currentArea: Ref<string> = ref('照會單');

const tableItemsA = ref([
	{
		cells: [
			{ content: '公司資料', width: '10%', rowspan: 7, isCenter: true },
			{ content: 'BBB', width: '20%' },
			{ content: 'BBB', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'CCC', width: '20%' },
			{ content: 'CCC', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'DDD', width: '20%' },
			{ content: 'DDD', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'EEE', width: '20%' },
			{ content: 'EEE', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'NNN', width: '10%', rowspan: 2 },
			{ content: 'NNN', width: '20%' },
		],
	},
	{ cells: [{ content: 'NNN', width: '20%' }] },
	{
		cells: [
			{ content: 'HHH', width: '20%' },
			{ content: 'HHH', width: '70%' },
		],
	},
] as { cells: Cell[] }[]);

const tableItemsB = ref([
	{
		cells: [
			{ content: '檢前作業', width: '10%', rowspan: 7, isCenter: true },
			{ content: 'BBB', width: '20%' },
			{ content: 'BBBA', width: '70%', colspan: 2 },
		],
	},
	{
		cells: [
			{ content: 'CCC', width: '20%' },
			{ content: 'CCCA', width: '70%', colspan: 2 },
		],
	},
	{
		cells: [{ content: 'NNN', width: '10%', rowspan: 5 }],
	},
	{
		cells: [
			{ content: 'PPP', width: '10%', rowspan: 2 },
			{ content: 'YYY', width: '70%' },
		],
	},
	{
		cells: [{ content: 'UUU', width: '70%' }],
	},
	{
		cells: [
			{ content: 'OOO', width: '10%' },
			{ content: 'OdO', width: '70%' },
		],
	},
] as { cells: Cell[] }[]);

const tableItemsC = ref([
	{
		cells: [
			{ content: '檢中', width: '10%', rowspan: 1, isCenter: true },
			{ content: 'AA', width: '20%' },
			{ content: 'BBB', width: '70%' },
		],
	},
] as { cells: Cell[] }[]);

const tableItemsD = ref([
	{
		cells: [
			{ content: '檢後作業', width: '10%', rowspan: 11, isCenter: true },
			{ content: 'BBB', width: '20%' },
			{ content: 'CCC', width: '70%', colspan: 2 },
		],
	},
	{
		cells: [
			{ content: 'EEE', width: '20%' },
			{ content: 'FFF', width: '70%', colspan: 2 },
		],
	},
	{
		cells: [
			{ content: 'HHH', width: '20%', rowspan: 3 },
			{ content: 'III', width: '70%', colspan: 2 },
		],
	},
	{
		cells: [
			{ content: 'KKK', width: '10%' },
			{ content: 'LLL', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'OOO', width: '10%' },
			{ content: 'PPP', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'RRR', width: '20%', rowspan: 3 },
			{ content: 'SSS', width: '70%', colspan: 2 },
		],
	},
	{
		cells: [
			{ content: 'VVV', width: '10%' },
			{ content: 'WWW', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'UUU', width: '10%' },
			{ content: 'YYY', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'BBB', width: '20%', rowspan: 2 },
			{ content: '222', width: '70%', colspan: 2 },
		],
	},
	{
		cells: [{ content: '444', width: '70%', colspan: 2 }],
	},
	{
		cells: [
			{ content: '111', width: '20%' },
			{ content: '999', width: '70%', colspan: 2 },
		],
	},
] as { cells: Cell[] }[]);

const tableItemsE = ref([
	{
		cells: [
			{ content: '請款作業', width: '10%', rowspan: 6, isCenter: true },
			{ content: 'AA', width: '20%' },
			{ content: 'BBB', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'AA', width: '20%' },
			{ content: 'BBB', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'AA', width: '20%' },
			{ content: 'BBB', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'AA', width: '20%' },
			{ content: 'BBB', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'AA', width: '20%' },
			{ content: 'BBB', width: '70%' },
		],
	},
	{
		cells: [
			{ content: 'AA', width: '20%' },
			{ content: 'BBB', width: '70%' },
		],
	},
] as { cells: Cell[] }[]);

const tableItemsF = ref([
	{
		cells: [
			{ content: '其他', width: '10%', rowspan: 2, isCenter: true },
			{ content: 'NNN', width: '20%', rowspan: 2 },
			{ content: 'AAA', width: '70%' },
		],
	},
	{
		cells: [{ content: 'AAA', width: '70%' }],
	},
] as { cells: Cell[] }[]);

const checked = ref(false);
const isDisabled = ref(false);

const employees = ref([
	{
		name: 'Capt. Trunk',
		gender: '男',
		id: 'A129480375',
		birthDate: '1987/07/08',
		phone: '+886-2-23250158',
		address: '台北市南港區園區街108巷19-13號130弄Ｃ棟45樓1238室',
	},
	{
		name: 'B.A. Baracus',
		gender: '女',
		id: 'B224415284',
		birthDate: '1987/07/08',
		phone: '0910813412',
		address: '台北市南港區園區街108巷19-13號130弄Ｃ棟45樓1238室',
	},
	{
		name: 'Hannibal Smith',
		gender: '男',
		id: 'A129480375',
		birthDate: '1987/07/08',
		phone: '02-23250158',
		address: '台北市南港區園區街108巷19-13號130弄Ｃ棟45樓1238室',
	},
]);

function hideIdCharacters(id: string): string {
	// return id.replace(/.(?=.{4,}$)/g, '*');//只顯示後四碼
	return id.charAt(0) + id.slice(1).replace(/.(?=.{4,}$)/g, '*');
}

const currentPage = ref(1);

const setCurrentPage = (tab: any) => {
	currentPage.value = tab;
};
</script>
<template>
	<div class="py-16">
		<div class="w-3/4 m-auto my-4 flex items-center">
			<div class="flex w-2/6">
				<router-link class="text-black hover:opacity-50 text-md" to="/HealthCheckup">
					<svg
						class="w-4 h-4 text-gray-800 dark:text-white inline-block align-middle mr-1"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 8 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
						/>
					</svg>
					返回照會單列表</router-link
				>
			</div>
			<div class="flex w-2/6 numCenter justify-center">
				<p class="text-md font-bold">合約日期 2023.12.01-2024.11.01</p>
			</div>
			<div class="flex w-2/6"></div>
		</div>
		<div
			class="w-3/4 m-auto flex justify-start font-semibold tracking-2.25 text-lg"
			style="border-radius: 10px; border: 1px solid #e4e4e4; padding: 0.25rem; background: #e4e4e4"
		>
			<button
				v-for="(item, idx) in areaList"
				:key="idx"
				:class="{ 'bg-white shadow': currentArea === item, 'rounded-md': currentArea === item }"
				class="w-full px-6 py-2 text-[#313131] text-base"
				@click="currentArea = item"
			>
				{{ item }}
			</button>
		</div>

		<div class="m-auto flex justify-center items-center mt-6">
			<div class="h-5/6 w-full text-4xl">
				<div class="tab-content">
					<div v-if="currentArea === '照會單'" class="tab-pane">
						<div class="w-3/4 m-auto bg-[#fff] shadow-md rounded-lg px-6 border border-solid border-[#f4f4f4]">
							<p class="text-center text-sm font-bold pt-3">注意:請先點選下方的“已知道”按鈕，才能進行下載;如對內容有所疑問，請聯繫醫聯網客服</p>
							<!-- <div class="px-8 py-6">照會單</div> -->

							<div class="m-auto pt-6 pb-3 flex items-center">
								<div class="flex w-1/5 bg-gray-400 w-[130px] h-[60px]">
									<router-link class="text-black hover:opacity-50 text-md" to="/"> </router-link>
								</div>
								<div class="flex w-3/5 numCenter justify-center">
									<p class="text-xl">企業會員 健檢作業確認單</p>
								</div>
								<div class="flex w-1/5"></div>
							</div>

							<p class="text-right text-sm pb-2">照會日期：YYYY/MM/DD</p>

							<section class="py-3">
								<table class="border-collapse border border-solid border-[#494949] w-full">
									<tr v-for="(row, rowIndex) in tableItemsA" :key="rowIndex">
										<td
											v-for="(cell, cellIndex) in row.cells"
											:key="cellIndex"
											:class="{
												border: true,
												'border-solid': true,
												'border-[#494949]': true,
												'text-base': true,
												'px-4': true,
												'py-2': true,
												'align-middle': true,
												'text-center': cell.isCenter,
												'writing-r': cell.isCenter,
												'w-[10%]': cell.width === '10%',
												'w-[20%]': cell.width === '20%',
												'w-[70%]': cell.width === '70%',

												'tracking-widest': cell.rowspan,
											}"
											:rowspan="cell.rowspan"
										>
											{{ cell.content }}
										</td>
									</tr>
								</table>
							</section>

							<section class="py-3">
								<table class="border-collapse border border-solid border-[#494949] w-full">
									<tr v-for="(row, rowIndex) in tableItemsB" :key="rowIndex">
										<td
											v-for="(cell, cellIndex) in row.cells"
											:key="cellIndex"
											:class="{
												border: true,
												'border-solid': true,
												'border-[#494949]': true,
												'text-base': true,
												'px-4': true,
												'py-2': true,
												'align-middle': true,
												'text-center': cell.isCenter,
												'writing-r': cell.isCenter,
												'tracking-widest': cell.rowspan,
												'w-[10%]': cell.width === '10%',
												'w-[20%]': cell.width === '20%',
												'w-[70%]': cell.width === '70%',
											}"
											:rowspan="cell.rowspan"
											:colspan="cell.colspan"
										>
											{{ cell.content }}
										</td>
									</tr>
								</table>
							</section>

							<section class="py-3">
								<table class="border-collapse border border-solid border-[#494949] w-full">
									<tr v-for="(row, rowIndex) in tableItemsC" :key="rowIndex">
										<td
											v-for="(cell, cellIndex) in row.cells"
											:key="cellIndex"
											:class="{
												border: true,
												'border-solid': true,
												'border-[#494949]': true,
												'text-base': true,
												'px-4': true,
												'py-2': true,
												'align-middle': true,
												'text-center': cell.isCenter,
												'tracking-widest': cell.rowspan,
												'w-[10%]': cell.width === '10%',
												'w-[20%]': cell.width === '20%',
												'w-[70%]': cell.width === '70%',
											}"
											:rowspan="cell.rowspan"
										>
											{{ cell.content }}
										</td>
									</tr>
								</table>
							</section>

							<section class="py-3">
								<table class="border-collapse border border-solid border-[#494949] w-full">
									<tr v-for="(row, rowIndex) in tableItemsD" :key="rowIndex">
										<td
											v-for="(cell, cellIndex) in row.cells"
											:key="cellIndex"
											:class="{
												border: true,
												'border-solid': true,
												'border-[#494949]': true,
												'text-base': true,
												'px-4': true,
												'py-2': true,
												'align-middle': true,
												'text-center': cell.isCenter,
												'tracking-widest': cell.rowspan,
												'writing-r': cell.isCenter,
												'w-[10%]': cell.width === '10%',
												'w-[20%]': cell.width === '20%',
												'w-[70%]': cell.width === '70%',
											}"
											:rowspan="cell.rowspan"
											:colspan="cell.colspan"
										>
											{{ cell.content }}
										</td>
									</tr>
								</table>
							</section>

							<section class="py-3">
								<table class="border-collapse border border-solid border-[#494949] w-full">
									<tr v-for="(row, rowIndex) in tableItemsE" :key="rowIndex">
										<td
											v-for="(cell, cellIndex) in row.cells"
											:key="cellIndex"
											:class="{
												border: true,
												'border-solid': true,
												'border-[#494949]': true,
												'text-base': true,
												'px-4': true,
												'py-2': true,
												'align-middle': true,
												'text-center': cell.isCenter,
												'tracking-widest': cell.rowspan,
												'writing-r': cell.isCenter,
												'w-[10%]': cell.width === '10%',
												'w-[20%]': cell.width === '20%',
												'w-[70%]': cell.width === '70%',
											}"
											:rowspan="cell.rowspan"
										>
											{{ cell.content }}
										</td>
									</tr>
								</table>
							</section>

							<section class="py-3">
								<table class="border-collapse border border-solid border-[#494949] w-full">
									<tr v-for="(row, rowIndex) in tableItemsF" :key="rowIndex">
										<td
											v-for="(cell, cellIndex) in row.cells"
											:key="cellIndex"
											:class="{
												border: true,
												'border-solid': true,
												'border-[#494949]': true,
												'text-base': true,
												'px-4': true,
												'py-2': true,
												'align-middle': true,
												'text-center': cell.isCenter,
												'tracking-widest': cell.rowspan,
												'w-[10%]': cell.width === '10%',
												'w-[20%]': cell.width === '20%',
												'w-[70%]': cell.width === '70%',
											}"
											:rowspan="cell.rowspan"
										>
											{{ cell.content }}
										</td>
									</tr>
								</table>
							</section>
						</div>

						<!-- hover:opacity-75 -->
						<div class="w-3/4 m-auto mt-6">
							<div class="flex justify-evenly items-center w-6/12 m-auto text-base">
								<div class="bg-[#B3DBF6] px-8 py-3 rounded transition-all">
									<input type="checkbox" id="checkbox" class="mr-2" v-model="checked" :disabled="isDisabled" />
									<label for="checkbox" class="cursor-pointer">我知道了</label>
								</div>
								<button class="bg-[#CACACA] px-8 py-3 rounded transition-all" :disabled="!isDisabled">
									<svg
										class="w-4 h-4 inline-block align-middle text-gray-800 dark:text-white"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"
										></path>
										<path
											d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
										></path>
									</svg>

									下載
								</button>
							</div>
						</div>
					</div>

					<!-- 企業員工清單 -->
					<div v-if="currentArea === '企業員工清單'" class="tab-pane">
						<div class="w-3/4 m-auto">
							<!-- table -->
							<div class="relative shadow-md rounded-lg">
								<table class="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
									<thead class="text-base text-black bg-[#CACACA] bg-opacity-30 dark:bg-gray-700 dark:text-gray-400">
										<tr>
											<th scope="col" class="px-4 py-3 align-middle whitespace-nowrap">員工姓名</th>
											<th scope="col" class="px-4 py-3 align-middle whitespace-nowrap">性別</th>
											<th scope="col" class="px-4 py-3 align-middle whitespace-nowrap">身分證字號</th>
											<th scope="col" class="px-4 py-3 align-middle whitespace-nowrap">出生日期(西元)</th>
											<th scope="col" class="px-4 py-3 align-middle whitespace-nowrap">電話</th>
											<th scope="col" class="px-4 py-3 align-middle">地址</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(employee, index) in employees" :key="index" :class="[index % 2 === 0 ? 'bg-white' : 'bg-[#CACACA] bg-opacity-10']">
											<td class="px-4 py-3 align-middle whitespace-nowrap">{{ employee.name }}</td>
											<td class="px-4 py-3 align-middle whitespace-nowrap text-center">{{ employee.gender }}</td>
											<td class="px-4 py-3 align-middle whitespace-nowrap">{{ hideIdCharacters(employee.id) }}</td>
											<td class="px-4 py-3 align-middle whitespace-nowrap">{{ employee.birthDate }}</td>
											<td class="px-4 py-3 align-middle whitespace-nowrap">{{ employee.phone }}</td>
											<td class="px-4 py-3 align-middle">{{ employee.address }}</td>
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
												:class="{ selected: currentPage === 1 }"
												@click="setCurrentPage(1)"
												class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all hover:text-[#0087e0]"
												href="#"
												>1</a
											>
										</li>
										<li>
											<a
												:class="{ selected: currentPage === 2 }"
												@click="setCurrentPage(2)"
												class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all hover:text-[#0087e0]"
												href="#"
												>2</a
											>
										</li>
										<li>
											<a
												:class="{ selected: currentPage === 3 }"
												@click="setCurrentPage(3)"
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

							<div class="w-3/4 m-auto mt-6">
								<div class="flex justify-evenly items-center w-6/12 m-auto text-base">
									<div class="bg-[#B3DBF6] px-8 py-3 rounded transition-all hover:opacity-75">
										<input type="checkbox" id="checkbox" class="mr-2" v-model="checked" />
										<label for="checkbox" class="cursor-pointer">我知道了</label>
									</div>
									<button class="bg-[#CACACA] px-8 py-3 rounded transition-all hover:opacity-75">
										<svg
											class="w-4 h-4 inline-block align-middle text-gray-800 dark:text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"
											></path>
											<path
												d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
											></path>
										</svg>

										下載
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- 預約狀態 -->
					<div v-if="currentArea === '預約狀態'" class="tab-pane">
						<div class="w-3/4 m-auto bg-[#ECF4F7] border-2 border-b-0 border-solid border-[#E4E4E4]">
							<div class="px-8 py-6">預約狀態</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.writing-r {
	writing-mode: vertical-lr;
}

.selected {
	color: #0087e0;
}
</style>
