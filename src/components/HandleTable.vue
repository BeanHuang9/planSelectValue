<script setup lang="ts">
import { ref } from 'vue';
import Draggable from 'vuedraggable';

const list = ref([
	{
		id: 1,
		isflod: false,
		link: '#',
		tableCont1: `<svg class="relative w-[20px] left-[10px] h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/></svg>`,
		tableCont2: `2023-11-1<br />至<br />2023-11-1`,
		tableCont3: `13:00<br />至<br />13:40`,
		tableCont4: `週一 週二<br />週三 週四<br />週五 週六`,
		tableCont5: '指定企業名額：九乘九 E , F 方案, 3位',
	},
	{
		id: 2,
		isflod: false,
		link: '#',
		tableCont1: `<svg class="relative w-[20px] left-[10px] h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/></svg>`,
		tableCont2: `2023-11-15<br />至<br />2023-11-30`,
		tableCont3: `13:00<br />至<br />13:40`,
		tableCont4: `週一 週三`,
		tableCont5: '診次調整：5位',
	},
	{
		id: 3,
		isflod: false,
		link: '#',
		tableCont1: `<svg class="relative w-[20px] left-[10px] h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/></svg>`,
		tableCont2: `2023-11-15<br />至<br />2023-11-30`,
		tableCont3: `8:00<br />至<br />18:00`,
		tableCont4: `每日`,
		tableCont5: '休診',
	},
]);

const onMoveCallback = (val: any) => {
	console.log('拖动前的索引 :' + val.moved.newIndex);
	console.log('拖动后的索引 :' + val.moved.oldIndex);
};

const getdata = (val: any) => {
	console.log(val.draggedContext.element.id);
};
</script>

<template>
	<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
		<!-- uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 -->
		<thead class="text-base bg-transparent text-[#313131]">
			<tr>
				<th class="w-[65px] align-middle text-center py-1 border-b-0 border-2 border-solid border-[#cccccc]">優先<br />順序</th>
				<th class="w-[135px] align-middle text-center py-1 border-b-0 border-2 border-solid border-[#cccccc]">時間</th>
				<th class="w-[135px] align-middle text-center py-1 border-b-0 border-2 border-solid border-[#cccccc]">時段</th>
				<th class="w-[135px] align-middle text-center py-1 border-b-0 border-2 border-solid border-[#cccccc]">重複</th>
				<th class="align-middle text-center py-1 border-b-0 border-2 border-solid border-[#cccccc]">事件</th>
			</tr>
		</thead>
		<!-- no information -->
		<!-- <tr class="border-b bg-transparent text-center border-b-2 border-solid border-[#cccccc]">
			<td class="px-6 py-4" colspan="5">尚無設定</td>
		</tr> -->
		<!-- no information -->
	</table>

	<div class="drag-box">
		<Draggable
			:forceFallback="true"
			:move="getdata"
			:list="list"
			:animation="100"
			item-key="id"
			class="list-group"
			ghost-class="ghost"
			@change="onMoveCallback"
		>
			<template #item="{ element }">
				<div class="items">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-[-2px]">
						<tr class="border-b bg-transparent text-center text-[#313131]">
							<td class="w-[65px] px-3 py-2 align-middle text-center border-2 border-solid border-[#CCCCCC]" v-html="element.tableCont1"></td>
							<td class="w-[135px] px-3 py-2 align-middle text-center border-2 border-solid border-[#CCCCCC]" v-html="element.tableCont2"></td>
							<td class="w-[135px] px-3 py-2 align-middle text-center border-2 border-solid border-[#CCCCCC]" v-html="element.tableCont3"></td>
							<td class="w-[135px] px-3 py-2 align-middle text-center border-2 border-solid border-[#CCCCCC]" v-html="element.tableCont4"></td>
							<td class="px-3 py-2 text-left align-middle border-2 border-solid border-[#CCCCCC]">
								<span>{{ element.tableCont5 }}</span>
								<a :href="element.link" class="float-right align-middle font-medium text-blue-600 dark:text-blue-500 hover:opacity-75">
									<img alt="Edit" src="@/assets/edit.svg" width="20" height="20" />
								</a>
							</td>
						</tr>
					</table>
				</div>
			</template>
		</Draggable>
	</div>
</template>

<style scoped>
td {
	cursor: move;
}
/* svg {
	left: 10px;
	position: relative;
	width: 20px !important;
} */
</style>
