<script lang="ts" setup>
// import { useUserStore } from '../store/user';
// import { useMouse } from '@vueuse/core';
// import request from '@/utils/axios';
import { ref } from 'vue';

const numbers: Ref<string[]> = ref(['', '', '', '', '', '', '', '', '', '']);
/**
 * deletedHandler
 */
const deletedHandler = (e: KeyboardEvent, idx: number) => {
	if (e.key === 'Backspace') {
		numbers.value[idx] = '';
		if (idx > 0) {
			const target = e.target as HTMLElement;
			if (target.parentNode?.childNodes[idx]) {
				setTimeout(() => {
					(target.parentNode?.childNodes[idx] as HTMLElement).focus();
				}, 0);
			}
		}
	}
};

const inputHandler = (e: InputEvent, index: number) => {
	const target = e.target as HTMLInputElement;
	const inputValue = target.value;
	switch (e.inputType) {
		case 'insertText':
			if (inputValue.length > 1) {
				target.value = inputValue.slice(-1);
			}
			numbers.value[index] = (e as InputEvent & { data: string }).data;
			if (index < numbers.value.length - 1) {
				(target.parentNode?.childNodes[index + 2] as HTMLElement)?.focus();
			}
			break;
		case 'deleteContentBackward':
			numbers.value[index] = '';
			if (index !== 0) {
				(target.parentNode?.childNodes[index - 1] as HTMLElement)?.focus();
			}
			break;
		case 'insertFromPaste':
			if (target.value.length > 1) {
				target.value = target.value.slice(0, 1);
			}
			break;
		case 'deleteContentForward':
			numbers.value[index] = '';
			break;
	}
};
const pasteHandler = (e: ClipboardEvent) => {
	const clipdata = e.clipboardData || (window as any).clipboardData;
	let value = clipdata.getData('text/plain');
	let len = value.length;
	if (len === 10) {
		numbers.value = value.split('');
		if ((e.target as HTMLElement)?.tagName === 'INPUT') {
			const parent = (e.target as HTMLElement)?.parentElement;
			const inputs = parent ? parent.querySelectorAll('input') : [];
			inputs[inputs.length - 1].focus();
		}
	} else {
		const parent = document.querySelector('.input-wrap') as HTMLElement;
		const focusInput = parent.querySelector('input.input-content:focus') as HTMLInputElement;
		let index = -1;
		for (let child of parent.children) {
			index += 1;
			if (child === focusInput) {
				break;
			}
		}
		if (len > 10 - index) {
			value = value.slice(0, 10 - index);
			len = value.length;
		}

		numbers.value.splice(index, len, ...value.split(''));
		const inputs = parent.querySelectorAll('input');
		inputs[index + len - 1].focus();
	}
};
</script>
<template>
	<div class="flex justify-center py-32 bg-yellow-100 h-screen-10/12">
		<div class="rounded-3xl bg-[#ffffff6d] h-[495px] w-[724px] py-[120px] px-[90px]">
			<div class="text-center">
				<h1 class="text-3xl font-bold text-[#0087E0] tracking-2.25 mb-12">企業員工線上預約系統</h1>
				<p class="text-xl text-black tracking-wider">企業員工請輸入企業代碼</p>
				<div class="" @paste="pasteHandler($event)">
					<input
						v-for="(_, idx) in numbers"
						:key="idx"
						:value="numbers[idx]"
						type="text"
						class="w-8 h-12 my-11 bg-transparent border-b border-[#afafaf] text-center outline-0 text-3xl tracking-2.25 mx-1"
						maxlength="1"
						@keydown.delete="deletedHandler($event, idx)"
						@input="inputHandler($event as InputEvent, idx)"
					/>
				</div>
				<RouterLink to="/directions">
					<button class="text-xl w-[280px] h-[50px] bg-[#0087E0] rounded-3xl text-white tracking-wider">進入專區</button>
				</RouterLink>
			</div>
		</div>
	</div>
</template>
