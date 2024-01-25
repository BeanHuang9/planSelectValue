<script lang="ts" setup>
import { ref } from 'vue';
import FormPicker from '@/components/FormPicker.vue';

const currentPage = ref(1);

const setCurrentPage = (tab: any) => {
	currentPage.value = tab;
};
</script>

<template>
	<div class="py-16">
		<div class="w-3/4 m-auto tracking-wide">
			<div class="flex items-center justify-between rounded-lg px-6 py-2 w-full bg-[#e4e4e4]">
				<h3 class="text-lg">作業照會單</h3>
				<form>
					<div class="flex">
						<div class="relative w-[200px]">
							<input
								type="search"
								id="search"
								class="block p-2.5 w-full z-20 rounded-lg text-sm text-[#959595] border border-[#000] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
								placeholder="搜尋企業名"
								required
							/>
							<button
								type="submit"
								class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black rounded-e-lg border border-l-0 border-black hover:opacity-50"
							>
								<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
								<span class="sr-only">Search</span>
							</button>
						</div>
					</div>
				</form>
			</div>

			<div class="flex items-center my-5">
				<span><FormPicker /></span>
				<span><button type="submit" class="text-white ml-3 bg-[#0087E0] hover:bg-blue-800 text-sm px-3 py-1 border border-[#000]">查詢</button></span>
			</div>

			<!-- table -->
			<div class="relative shadow-md rounded-lg">
				<table class="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
					<thead class="text-base text-black bg-[#CACACA] bg-opacity-30 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="px-6 py-3">企業代碼</th>
							<th scope="col" class="px-6 py-3">企業清單</th>
							<th scope="col" class="px-6 py-3">健檢合約日期</th>
							<th scope="col" class="px-6 py-3">健檢作業照會</th>
						</tr>
					</thead>
					<tbody>
						<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-[#CACACA] even:bg-opacity-10 border-b dark:border-gray-700 borderTopLine">
							<th class="px-6 py-4">B10</th>
							<td class="px-6 py-4 whitespace-nowrap dark:text-white">企業名稱</td>
							<td class="px-6 py-4">2023.12.01-2024.11.01</td>
							<td class="px-6 py-4">
								<router-link class="text-white bg-[#0087E0] hover:bg-blue-800 rounded-md text-sm px-7 py-2 me-2 mb-2" to="/Memorandum"
									><img alt="Edit" src="/src/assets/frame.svg" width="18" height="18" class="inline-block align-middle mr-1" />查看</router-link
								>
							</td>
						</tr>
						<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-[#CACACA] even:bg-opacity-10 border-b dark:border-gray-700 borderTopLine">
							<th class="px-6 py-4">B10</th>
							<td class="px-6 py-4 whitespace-nowrap dark:text-white">企業名稱</td>
							<td class="px-6 py-4">2023.12.01-2024.11.01</td>
							<td class="px-6 py-4">
								<router-link class="text-white bg-[#0087E0] hover:bg-blue-800 rounded-md text-sm px-7 py-2 me-2 mb-2" to="/Memorandum"
									><img alt="Edit" src="/src/assets/frame.svg" width="18" height="18" class="inline-block align-middle mr-1" />查看</router-link
								>
							</td>
						</tr>
						<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-[#CACACA] even:bg-opacity-10 border-b dark:border-gray-700 borderTopLine">
							<th class="px-6 py-4">B11</th>
							<td class="px-6 py-4 whitespace-nowrap dark:text-white">企業名稱</td>
							<td class="px-6 py-4">2023.12.01-2024.11.01</td>
							<td class="px-6 py-4">
								<router-link class="text-white bg-[#0087E0] hover:bg-blue-800 rounded-md text-sm px-7 py-2 me-2 mb-2" to="/Memorandum"
									><img alt="Edit" src="/src/assets/frame.svg" width="18" height="18" class="inline-block align-middle mr-1" />查看</router-link
								>
							</td>
						</tr>
						<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-[#CACACA] even:bg-opacity-10 border-b dark:border-gray-700 borderTopLine">
							<th class="px-6 py-4">B14</th>
							<td class="px-6 py-4 whitespace-nowrap dark:text-white">企業名稱</td>
							<td class="px-6 py-4">2023.12.01-2024.11.01</td>
							<td class="px-6 py-4">
								<router-link class="text-white bg-[#0087E0] hover:bg-blue-800 rounded-md text-sm px-7 py-2 me-2 mb-2" to="/Memorandum"
									><img alt="Edit" src="/src/assets/frame.svg" width="18" height="18" class="inline-block align-middle mr-1" />查看</router-link
								>
							</td>
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
		</div>
	</div>
</template>

<style lang="scss" scoped>
input[type='search']::-webkit-search-cancel-button {
	-webkit-appearance: none;
}

.selected {
	color: #0087e0;
}

.numCenter {
	margin-left: auto;
	margin-right: auto;
}

.borderTopLine {
	border-top: 1px solid #494949;
}
</style>
