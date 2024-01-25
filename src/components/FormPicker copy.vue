<script lang="ts" setup>
import { ref } from 'vue';

const range = ref({
	start: new Date(),
	end: new Date(),
});
// const masks = {
// 	input: 'YYYY-MM-DD h:mm A',
// };
const popover = ref({
	visibility: 'click',
	placement: 'bottom',
});

const startDate = range.value.start;
// 結束日期設為開始日期 + 5天
const endDate = new Date(startDate);
endDate.setDate(startDate.getDate() + 5);
range.value.end = endDate;
</script>

<template>
	<form class="flex items-center w-72 text-base" @submit.prevent>
		<v-date-picker v-model="range" mode="date" is-range :popover="popover" :show-double="true">
			<template v-slot="{ inputValue, inputEvents, isDragging }">
				<div class="flex flex-col sm:flex-row justify-start items-center">
					<div class="relative flex-grow">
						<svg
							class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
						</svg>
						<input
							class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
							:class="isDragging ? 'text-gray-600' : 'text-gray-900'"
							:value="inputValue.start"
							v-on="inputEvents.start"
						/>
					</div>
					<span class="flex-shrink-0 m-2 text-sm"> 至 </span>
					<div class="relative flex-grow">
						<svg
							class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
						</svg>
						<input
							class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
							:class="isDragging ? 'text-gray-600' : 'text-gray-900'"
							:value="inputValue.end"
							v-on="inputEvents.end"
						/>
					</div>
				</div>
			</template>
		</v-date-picker>
	</form>
</template>

<style lang="scss" scoped></style>
