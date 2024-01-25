<script lang="ts" setup>
import { ref, onMounted } from 'vue';
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

const todos = ref({});
const addContent = (date) => {
	// You can use the formatted date as the key
	const formattedDate = `${date.year}-${date.month + 1}-${date.date}`;
	// Initialize content if it doesn't exist
	if (!todos.value[formattedDate]) {
		todos.value[formattedDate] = '';
	}
	// Set the content for the specific day
	todos.value[formattedDate] = prompt('Enter content:', todos.value[formattedDate]);
};

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
		});
	}
	return data;
});

onMounted(() => {
	setToday();
});
</script>

<template>
	<div class="bg-[#ECF4F7] w-2/3 m-auto mt-9" v-cloak>
		<h1 class="text-2xl text-center pt-6">{{ calendar.year }} 年 {{ calendar.month + 1 }} 月</h1>
		<div>
			<!-- <button @click="adjustYear(-1)">上一年</button> -->
			<button @click="adjustMonth(-1)">
				<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
				</svg>
			</button>
			<button @click="setToday">今天</button>
			<button @click="adjustMonth(1)">
				<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
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
			<div class="weekDay">
				<div>日</div>
				<div>一</div>
				<div>二</div>
				<div>三</div>
				<div>四</div>
				<div>五</div>
				<div>六</div>
			</div>
			<div class="week" v-for="i in 6" :key="i">
				<div
					class="day"
					v-for="j in 7"
					:key="(i - 1) * 7 + j - 1"
					:data-date="calendarMonth[(i - 1) * 7 + j - 1].date"
					:class="{
						today:
							calendarMonth[(i - 1) * 7 + j - 1].year === today.year &&
							calendarMonth[(i - 1) * 7 + j - 1].month === today.month &&
							calendarMonth[(i - 1) * 7 + j - 1].date === today.date,
						other: calendarMonth[(i - 1) * 7 + j - 1].month !== calendar.month,
					}"
				></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
[v-cloak] {
	display: none;
}

.calendar {
	margin: 30px 0;
}

.weekDay,
.week {
	display: flex;
	border-bottom: 1px solid #ddd;
}
.weekDay > div {
	flex: 1 1 0%;
	line-height: 30px;
}
.week {
	border-right: 1px solid #ddd;
}
.week > div {
	position: relative;
	flex: 1 1 0%;
	height: 90px;
	line-height: 30px;
	border-left: 1px solid #ddd;
}
.week > div:before {
	position: absolute;
	content: attr(data-date);
	top: 0;
	right: 0;
	display: block;
	width: 30px;
	border-left: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
}

.today:before {
	color: #fff;
	background-color: #000;
}

.other {
	color: #bbb;
	background-color: #ddd;
}

.day {
	position: relative;
	flex: 1 1 0%;
	height: 90px;
	line-height: 30px;
	border-left: 1px solid #ddd;
	input {
		width: 80%;
		padding: 5px;
		margin: 5px auto;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
	button {
		margin-top: 5px;
		padding: 5px;
		cursor: pointer;
	}
}
</style>
