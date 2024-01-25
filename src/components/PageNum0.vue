<script setup lang="ts">
import { ref } from 'vue';

const currentPage = ref(1);
const totalPageCount = ref(3); // Set the total number of pages here

const setCurrentPage = (page: number) => {
	currentPage.value = page;
};
</script>

<template>
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
				<li v-for="page in totalPageCount" :key="page">
					<a
						:class="{ selected: currentPage === page }"
						@click="setCurrentPage(page)"
						class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all hover:text-[#0087e0]"
						href="#"
					>
						{{ page }}
					</a>
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
</template>

<style lang="scss" scoped>
.selected {
	color: #0087e0;
}
</style>
