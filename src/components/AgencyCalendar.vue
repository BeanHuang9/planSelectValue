<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
const today = ref({
	year: 0,
	month: 0,
	date: 0,
	day: 0,
});

const calendar = ref({
	year: 0,
	month: 0,
	date: 0,
	day: 0,
});

// const todos: Ref<string[]> = ref({});
// const addContent = (date) => {
// 	// You can use the formatted date as the key
// 	const formattedDate = `${date.year}-${date.month + 1}-${date.date}`;
// 	// Initialize content if it doesn't exist
// 	if (!todos.value[formattedDate]) {
// 		todos.value[formattedDate] = '';
// 	}
// 	// Set the content for the specific day
// 	todos.value[formattedDate] = prompt('Enter content:', todos.value[formattedDate]);
// };

const setToday = () => {
	const date = new Date();
	today.value.year = calendar.value.year = date.getFullYear();
	today.value.month = calendar.value.month = date.getMonth(); // 0~11
	today.value.date = calendar.value.date = date.getDate();
	today.value.day = calendar.value.day = date.getDay();
};

const adjustYear = (fix: number) => {
	calendar.value.year += fix;
};

const adjustMonth = (fix: number) => {
	let month = calendar.value.month + fix;
	if (month > 11) {
		adjustYear(1);
		calendar.value.month = 0;
	} else if (month < 0) {
		adjustYear(-1);
		calendar.value.month = 11;
	} else {
		calendar.value.month = month;
	}
};

const calendarFirstDay = computed(() => {
	const mDate = new Date(calendar.value.year, calendar.value.month, 1);
	const date = new Date(calendar.value.year, calendar.value.month, 1 - mDate.getDay());
	return {
		year: date.getFullYear(),
		month: date.getMonth(),
		date: date.getDate(),
		day: date.getDay(),
	};
});

const calendarMonth = computed(() => {
	const data = [];
	let date;
	for (let i = 0; i < 42; i++) {
		date = new Date(calendarFirstDay.value.year, calendarFirstDay.value.month, calendarFirstDay.value.date + i);
		data.push({
			year: date.getFullYear(),
			month: date.getMonth(),
			date: date.getDate(),
			day: date.getDay(),
			content: [
				{
					name: '特殊檢查項目',

					content2: {
						name: '心臟超音波',
						aa: '1/3',
					},
				},
				{
					name: '常態設定',

					content2: {
						name: '心臟超音波',
						aa: '1/3',
					},
				},
				{
					name: '指定企業',

					content2: {
						name: '心臟超音波',
						aa: '1/3',
					},
				},
			],
		});
	}
	return data;
});

onMounted(() => {
	setToday();
});

// 點擊彈出右側
const selectedDate = ref<any[]>([]);
const selectDate = (date: string) => {
	console.log('Selected date:', date);
};
</script>

<template>
	<div class="flex items-stretch justify-between mt-9">
		<div v-cloak class="bg-[#ECF4F7] relative w-9/12">
			<h1 class="text-xl text-center pt-6">{{ calendar.year }} 年 {{ calendar.month + 1 }} 月</h1>
			<div>
				<!-- <button @click="adjustYear(-1)">上一年</button> -->
				<button class="absolute top-[1.66rem] left-[1rem]" @click="adjustMonth(-1)">
					<svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
						/>
					</svg>
				</button>
				<!-- <button @click="setToday">今天</button> -->
				<button class="absolute top-[1.66rem] right-[1rem]" @click="adjustMonth(1)">
					<svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
						/>
					</svg>
				</button>
				<!-- <button @click="adjustYear(1)">下一年</button> -->
			</div>
			<div class="calendar">
				<div class="weekDay text-center">
					<div>週日</div>
					<div>週一</div>
					<div>週二</div>
					<div>週三</div>
					<div>週四</div>
					<div>週五</div>
					<div>週六</div>
				</div>
				<div v-for="i in 6" :key="i" class="week">
					<div
						v-for="j in 7"
						:key="(i - 1) * 7 + j - 1"
						:data-date="calendarMonth[(i - 1) * 7 + j - 1].date"
						class="day"
						:class="{
							today:
								calendarMonth[(i - 1) * 7 + j - 1].year === today.year &&
								calendarMonth[(i - 1) * 7 + j - 1].month === today.month &&
								calendarMonth[(i - 1) * 7 + j - 1].date === today.date,
							other: calendarMonth[(i - 1) * 7 + j - 1].month !== calendar.month,
						}"
						@click="selectDate(calendarMonth[(i - 1) * 7 + j - 1].date)"
					>
						<!-- <div class="data-item">{{ myData }}</div> -->
					</div>
				</div>
			</div>
		</div>
		<div class="bg-[#ECF4F7] w-3/12 appointmentStatus" v-show="selectedDate !== null">
			<h3 class="text-lg dark:text-white text-center my-5">2023-11月12日 預約狀態</h3>

			<div class="py-2 pl-3 pr-2">
				<div class="my-5">
					<p class="text-base mb-4">
						<svg
							class="w-6 h-6 text-[#FFB118] text-gray-800 dark:text-white inline-block align-text-top"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 22 20"
						>
							<path
								d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
							/>
						</svg>
						特殊檢查項目
						<a href="#" class="inline-block align-text-top text-blue-600 dark:text-blue-500 hover:opacity-75"
							><img alt="Edit" src="/src/assets/edit.svg" width="20" height="20"
						/></a>
					</p>

					<ul class="pl-6">
						<li class="text-sm mb-4">
							<span class="bg-white py-1 px-3 shadow mr-1 inline-block align-middle w-[25%]">1/3</span>
							<span class="inline-block align-middle w-[68%] ml-1">心臟超音波</span>
						</li>
						<li class="text-sm mb-4">
							<span class="bg-white py-1 px-3 shadow mr-1 inline-block align-middle w-[25%]">1/2</span>
							<span class="inline-block align-middle w-[68%] ml-1">無痛胃鏡檢查(70歲以上需事前評估)</span>
						</li>
					</ul>
				</div>
				<hr class="border-t-2" />

				<div class="my-5">
					<p class="text-base mb-4 pl-6">
						常態設定
						<a href="#" class="inline-block align-text-top text-blue-600 dark:text-blue-500 hover:opacity-75"
							><img alt="Edit" src="/src/assets/edit.svg" width="20" height="20"
						/></a>
					</p>

					<ul class="pl-6">
						<li class="text-sm mb-4">
							<span class="bg-white py-1 px-3 shadow mr-1 inline-block align-middle w-[25%]">1/3</span>
							<span class="inline-block align-middle w-[68%] ml-1">8：20 - 8：40</span>
						</li>
						<li class="text-sm mb-4">
							<span class="bg-white py-1 px-3 shadow mr-1 inline-block align-middle w-[25%]">1/3</span>
							<span class="inline-block align-middle w-[68%] ml-1">8：40 - 9：00</span>
						</li>
						<li class="text-sm mb-4">
							<span class="bg-white py-1 px-3 shadow mr-1 inline-block align-middle w-[25%]">1/3</span>
							<span class="inline-block align-middle w-[68%] ml-1">9：40 - 9：20</span>
						</li>
					</ul>
				</div>
				<hr class="border-t-2" />

				<div class="my-5">
					<p class="text-base mb-4 pl-6">
						指定企業
						<a href="#" class="inline-block align-text-top text-blue-600 dark:text-blue-500 hover:opacity-75"
							><img alt="Edit" src="/src/assets/edit.svg" width="20" height="20"
						/></a>
					</p>

					<ul class="pl-6">
						<li class="text-sm mb-4">
							<span class="bg-white py-1 px-3 shadow mr-1 inline-block align-middle w-[25%]">1/3</span>
							<span class="inline-block align-middle w-[68%] ml-1">亞東氣體 C , D , E , F 方案<br />9：40 - 9：20</span>
						</li>
					</ul>
				</div>
				<hr class="border-t-2" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
[v-cloak] {
	display: none;
}

.calendar {
	margin: 1rem 0 0 0;
}
.weekDay {
	display: flex;
	border-bottom: 2px solid #ccc;
	> div {
		flex: 1 1 0%;
		line-height: 30px;
		font-size: 1rem;
	}
}
.week {
	display: flex;
	border-bottom: 2px solid #ccc;
	border-right: 2px solid #ccc;
	> div {
		position: relative;
		flex: 1 1 0%;
		height: 90px;
		line-height: 30px;
		border-left: 2px solid #ccc;
		font-size: 1rem;

		&:before {
			position: absolute;
			content: attr(data-date);
			top: 0;
			left: 0;
			display: block;
			width: 30px;
			text-align: center;
		}
	}
}

.today:before {
	color: #fff;
	background-color: #000;
}

.other {
	color: #bbb;
	background-color: #efefef;
	opacity: 0.5;
}

.day {
	position: relative;
	flex: 1 1 0%;
	height: 90px;
	line-height: 30px;
	border-left: 2px solid #ccc;
	input {
		width: 80%;
		padding: 5px;
		margin: 5px auto;
		border: 2px solid #ccc;
		border-radius: 5px;
	}
	button {
		margin-top: 5px;
		padding: 5px;
		cursor: pointer;
	}
}
</style>
