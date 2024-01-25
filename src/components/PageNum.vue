<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const totalPages = ref(20);
const currentPage = ref(10);
const ellipsis = ref('···');
const pre = ref('<');
const next = ref('>');
const first = ref('<<');
const last = ref('>>');
const color = ref('#0087e0');
const background = ref('#fffafa');

const pages = computed(() => {
	const c = currentPage.value;
	const t = totalPages.value;

	if (t <= 11) {
		return Array.from({ length: t }, (_, i) => i + 1);
	} else {
		let pageArray = [];

		if (c <= 3) {
			pageArray = [1, 2, 3, 4, 5, ellipsis.value, t];
		} else if (c >= t - 2) {
			pageArray = [1, ellipsis.value, t - 4, t - 3, t - 2, t - 1, t];
		} else {
			pageArray = [1, ellipsis.value, c - 1, c, c + 1, ellipsis.value, t];
		}

		return pageArray;
	}
});

const handleClickActive = (item: any) => {
	if (currentPage.value === item) return;
	if (item === ellipsis.value) return;
	currentPage.value = item;
};

const handleClickControl = (n: any) => {
	if ((currentPage.value === 1 && n === -1) || (currentPage.value === totalPages.value && n === 1)) {
		return;
	}
	currentPage.value += n;
};

const handleClickFirstLast = (isFirst: boolean) => {
	currentPage.value = isFirst ? 1 : totalPages.value;
};

const setColor = () => {
	const pagination = document.getElementById('pagination');
	if (pagination) {
		pagination.style.setProperty('--theme-color', color.value);
		pagination.style.setProperty('--background-color', background.value);
	}
};

onMounted(() => {
	setColor();
});
</script>

<template>
	<div class="mt-4 flex items-center">
		<div class="flex w-1/5">
			<p class="text-sm text-gray-700">1-10 of 66 items</p>
		</div>

		<div class="pages-container flex w-3/5 numCenter justify-center" id="pagination">
			<ul class="pages relative text-center">
				<li class="page px-1 py-1.5 inline-block text-sm" @click="handleClickFirstLast(true)">{{ first }}</li>
				<li class="page px-1 py-1.5 inline-block text-sm" @click="handleClickControl(-1)">{{ pre }}</li>
				<li
					class="page px-1 py-1.5 inline-block text-sm"
					v-for="(item, index) in pages"
					:key="index"
					:class="{ ellipsis: item === ellipsis, active: item === currentPage }"
					@click="handleClickActive(item)"
				>
					<span>{{ item }}</span>
				</li>
				<li class="page px-1 py-1.5 inline-block text-sm" @click="handleClickControl(1)">{{ next }}</li>
				<li class="page px-1 py-1.5 inline-block text-sm" @click="handleClickFirstLast(false)">{{ last }}</li>
			</ul>
		</div>
		<div class="flex w-1/5"></div>
	</div>
</template>

<style lang="scss" scoped>
.pages-container .pages .page {
	text-decoration: none;
	cursor: pointer;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.pages-container .pages .page:hover {
	color: var(--theme-color);
	opacity: 0.6;
}

.pages-container .pages .active {
	color: var(--theme-color);
}

.pages-container .pages .active:hover {
	opacity: 1;
}

.pages-container .pages .ellipsis {
	background-color: transparent;
	border-color: transparent;
	font-size: 10px;
	margin: 0 5px;
	pointer-events: none;
}
</style>
