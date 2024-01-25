<script lang="ts" setup>
import { ref } from 'vue';

interface CalendarItem {
	originalDate: Date;
	date: string;

	clickDay: boolean;
	content: any[]; // 根據需求指定content的類型
	stateContent: any[];
	starIcon: boolean;
	bgColor: string;
	holidayOpacity: string;
}

const targetDateFormat = ref('');
const dayNameList = ref(['週一', '週二', '週三', '週四', '週五', '週六', '週日']);

const getNewDate = (date: Date) => {
	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDate();
	return { year, month, day };
};
const getDate = (year: number, month: number, day: number) => {
	return new Date(year, month, day);
};
let time = getNewDate(new Date());

const visibleCalendar = ref<CalendarItem[]>([]);

const updateVisibleCalendar = () => {
	let calendarArr: CalendarItem[] = [];

	let currentFirstDay = getDate(time.year, time.month, 1);

	let weekDay = currentFirstDay.getDay();
	if (weekDay === 0) {
		weekDay = 7;
	}
	let startTime: number = Number(currentFirstDay) - (weekDay - 1) * 24 * 60 * 60 * 1000;

	let monthDay: number = 35; // 一個月最多35天

	for (let i = 0; i < monthDay; i++) {
		const currentDate = new Date(startTime + i * 24 * 60 * 60 * 1000);
		// const currentMonth = currentDate.getMonth() + 1; // 將月份限制在1到12之間

		const isHoliday =
			(currentDate.getDate() === 1 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 2 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 8 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 9 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 15 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 16 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 22 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 23 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 29 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 30 && currentDate.getMonth() === 0);

		const isExcludedDate =
			(currentDate.getDate() === 11 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 20 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 26 && currentDate.getMonth() === 0) ||
			(currentDate.getDate() === 27 && currentDate.getMonth() === 0);

		calendarArr.push({
			originalDate: new Date(currentDate),
			date: `${currentDate.getDate()}`,

			starIcon: !isHoliday && !isExcludedDate,
			stateContent: isHoliday ? [{ state: '休診' }] : [{ state: '常態 1/3' }, { state: '特殊 2/15' }],
			clickDay: false,

			content: isHoliday
				? [{ name: '休診' }]
				: [
						// Change content for holiday
						{
							icon: '/src/assets/star.svg',
							name: '特殊檢查項目',
							contentProject: [
								{ state: '常態', aa: '1/3', name: '心臟超音波' },
								{ state: '特殊', aa: '1/2', name: '無痛胃鏡檢查(70歲以上需事前評估)' },
							],
						},
						{
							name: '常態設定',
							contentProject: [
								{ state: '常態', aa: '1/3', name: '8：20 - 8：40' },
								{ state: '常態', aa: '1/2', name: '8：40 - 9：00' },
								{ state: '特殊', aa: '1/2', name: '9：40 - 9：20' },
							],
						},
						{
							name: '指定企業',
							contentProject: [
								{ state: '常態', aa: '1/3', name: '亞東氣體 C, D, E, F 方案<br>9：40 - 9：20' },
								{ state: '常態', aa: '1/3', name: '心臟超音波' },
							],
						},
				  ],

			bgColor: isHoliday ? 'rgb(210 240 252)' : '',
			holidayOpacity: isHoliday ? '0.5' : '',
		});
	}
	visibleCalendar.value = calendarArr;
	targetDateFormat.value = `${time.year} - ${time.month < 9 ? '0' + (time.month + 1) : time.month + 1}月`;
};

const handlePrevMonth = () => {
	let prevMonth = getDate(time.year, time.month, 1);
	prevMonth.setMonth(prevMonth.getMonth() - 1);
	time = getNewDate(prevMonth);
	updateVisibleCalendar();
};

const handleNextMonth = () => {
	let nextMonth = getDate(time.year, time.month, 1);
	nextMonth.setMonth(nextMonth.getMonth() + 1);
	time = getNewDate(nextMonth);
	updateVisibleCalendar();
};
const dayDetail = ref<any[]>([]);
const selectedDate = ref<string | null>(null);
const currentData = ref<number>(0);
let editorVisible = false;

// const clickDay = (item: CalendarItem) => {
// 	if (!isCurrentMonth(item.originalDate)) return;
// 	editorVisible = true;
// 	visibleCalendar.value.forEach((item) => {
// 		item.clickDay = false;
// 	});
// 	item.clickDay = !item.clickDay;
// 	dayDetail.value = item.content;
// 	selectedDate.value = item.date;
// 	currentData.value = 0;
// };

const clickDay = (item: CalendarItem) => {
	if (!isCurrentMonth(item.originalDate)) return;

	const isHoliday = item.content.some((contentItem) => contentItem.name === '休診');
	if (!isCurrentMonth(item.originalDate) || isHoliday) {
		return;
	}

	if (item.clickDay) {
		editorVisible = false;
		item.clickDay = false;
	} else {
		editorVisible = true;
		visibleCalendar.value.forEach((calendarItem) => {
			calendarItem.clickDay = false;
		});
		item.clickDay = true;
		dayDetail.value = item.content;
		selectedDate.value = item.date;
		currentData.value = 0;
	}
};

const isCurrentMonth = (date: Date) => {
	return date.getMonth() === time.month;
};
onMounted(() => {
	updateVisibleCalendar();
});
</script>
<template>
	<div class="flex m-auto mt-6" :style="{ width: editorVisible ? '91.666667%' : '75%' }">
		<div class="col-span-6 w-full tableBorder">
			<!-- calendar-header -->
			<div class="flex justify-star items-center bg-[#ECF4F7] text-[#313131] h-[60px] relative border-2 border-b-0 border-solid border-[#cccccc]">
				<button class="left-arrow mx-2 my-auto bg-[#D9D9D9] absolute right-[3.5rem] hover:opacity-75" @click="handlePrevMonth()">
					<svg width="30" height="30">
						<path d="M 19,9 L 11,15 18,21" stroke="rgba(49,49,49,1)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
				<div class="center-title text-lg ml-7">{{ targetDateFormat }}</div>
				<button class="right-arrow mx-2 my-auto bg-[#D9D9D9] absolute right-[1rem] hover:opacity-75" @click="handleNextMonth()">
					<svg width="30" height="30">
						<path d="M 11,9 L 18,15 11,21" stroke="rgba(49,49,49,1" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
			<!-- diy-calendar-table -->
			<table class="w-full border-collapse">
				<thead class="bg-[#ECF4F7]">
					<tr class="grid grid-cols-7 place-items-center">
						<td
							v-for="day of dayNameList"
							:key="day"
							class="text-[#313131] font-bold text-base tracking-[1.125px] border-2 border-solid border-[#cccccc] w-full text-center py-2"
						>
							{{ day }}
						</td>
					</tr>
				</thead>
				<tbody>
					<tr class="grid grid-cols-7 place-items-center">
						<td
							v-for="(item, idx) of visibleCalendar"
							:key="idx"
							class="h-20 w-full text-center py-2 px-1 text-xs font-bold border-2 border-solid border-[#ccc] relative"
							:style="{ backgroundColor: item.bgColor, opacity: item.holidayOpacity }"
							:class="{
								'bg-[#EFEFEF]': !isCurrentMonth(item.originalDate),
								'opacity-50': !isCurrentMonth(item.originalDate),
								'bg-[#D2F0FC]': isCurrentMonth(item.originalDate) && !item.clickDay,
								'bg-[#FEEFAD]': item.clickDay,
							}"
							@click="clickDay(item)"
						>
							<!-- 'opacity-50': !isCurrentMonth(item.originalDate), -->
							<div>
								<div class="mb-2 tracking-[1.15px] text-base text-[#313131] text-start px-2">{{ item.date }}</div>
								<img v-show="item.starIcon" src="/src/assets/star.svg" alt="" class="w-5 h-5 absolute right-4 top-2" />
								<div v-for="(ii, idx) in item.stateContent" :key="idx" class="text-[#313131] text-start tracking-[1.15px] px-2">
									{{ ii.state }}
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-show="editorVisible" class="w-2/5 border-2 border-l-0 border-solid border-[#cccccc] bg-[#ECF4F7]">
			<h3 class="text-lg dark:text-white text-center h-[60px] leading-[3.5rem] border-b-2 border-solid border-[#cccccc]">
				{{ targetDateFormat }}{{ selectedDate }}日 預約狀態
			</h3>
			<div class="h-[400px] overflow-y-auto mt-3">
				<div
					v-for="(item, idx) of dayDetail"
					:key="item.name"
					class="w-full px-3 py-3 font-bold text-[#313131] text-sm tracking-wider rounded-md border flex flex-wrap justify-center items-center"
					:class="{ 'bg-[#ECF4F7]': currentData === idx }"
					@click="currentData = idx"
				>
					<div class="block w-[100%]">
						<p class="text-base mb-4">
							<!-- v-if="item.icon"  -->
							<img v-if="item.icon" :src="item.icon" alt="" class="w-6 h-6 inline-block align-text-top" />
							<span v-else style="margin-left: 24px"></span>
							{{ item.name }}
							<a href="#" class="inline-block align-text-top text-blue-600 dark:text-blue-500 hover:opacity-75"
								><img alt="Edit" src="/src/assets/edit.svg" width="20" height="20"
							/></a>
						</p>

						<ul class="pl-6">
							<li v-for="itemProject in item.contentProject" :key="itemProject.name" class="text-sm mb-4 font-normal flex">
								<span class="bg-white py-1 px-3 shadow mr-1 align-middle h-[28px]">{{ itemProject.aa }}</span>
								<span class="align-middle text-left ml-2" v-html="itemProject.name"></span>
							</li>
						</ul>

						<!-- <ul class="pl-6">
							<li v-for="itemProject in item.contentProject" :key="itemProject.name" class="text-sm mb-4 font-normal">
								<span class="bg-white py-1 px-3 shadow mr-1 inline-block align-middle w-[16%]">{{ itemProject.aa }}</span>
								<span class="inline-block align-middle text-left w-[78%] ml-2" v-html="itemProject.name"></span>
							</li>
						</ul> -->
						<hr class="border-t-2" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="m-auto" :style="{ width: editorVisible ? '91.666667%' : '75%' }">
		<p class="text-sm text-[#797979] mt-2">
			#點擊日期可瀏覽當日預約狀態<br />
			#點擊預約狀態人數可瀏覽預約者資訊
		</p>
	</div>
</template>

<style lang="scss" scoped>
.tableBorder {
	thead {
		tr {
			border-left: 2px solid #ccc;
			border-bottom: 0px;

			td {
				border-bottom: 0px;
				border-left: 0px;
			}
		}
	}
	tbody {
		tr {
			border-left: 2px solid #ccc;
			border-bottom: 2px solid #ccc;

			td {
				border-bottom: 0px;
				border-left: 0px;
			}
		}
	}
}
</style>
