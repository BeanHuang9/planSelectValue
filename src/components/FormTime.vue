<script lang="ts" setup>
import { ref } from 'vue';

const range = ref({
	start: new Date(),
	end: new Date(),
});

const popover = ref({
	visibility: 'click',
	placement: 'bottom',
});

const setDefaultRange = () => {
	const currentDateTime = new Date();
	range.value.start = currentDateTime;

	const oneHourLater = new Date(currentDateTime.getTime() + 60 * 60 * 1000);
	range.value.end = oneHourLater;
};

setDefaultRange();
</script>

<template>
	<form class="flex items-center justify-center w-56 text-base" @submit.prevent>
		<v-date-picker v-model="range" mode="time" is-range :popover="popover" hide-time-header is24hr>
			<template v-slot="{ inputValue, inputEvents, isDragging }">
				<div class="flex flex-col sm:flex-row justify-start items-center">
					<div class="relative flex-grow w-[100px] timeBox">
						<!-- <svg
							class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg> -->
						<input
							class="flex-grow pl-6 pr-2 py-1 bg-white border rounded w-full w-[100px]"
							:class="isDragging ? 'text-gray-600' : 'text-gray-900'"
							:value="inputValue.start"
							v-on="inputEvents.start"
						/>
					</div>
					<span class="flex-shrink-0 m-2 text-sm"> 至 </span>
					<div class="relative flex-grow w-[100px] timeBox">
						<!-- <svg
							class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg> -->
						<input
							class="flex-grow pl-6 pr-2 py-1 bg-white border rounded w-full w-[100px]"
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
