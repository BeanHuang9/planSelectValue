<script lang="ts" setup>
import { ref, computed } from 'vue';
</script>

<template>
	<div class="py-16">
		<div class="w-2/3 m-auto tracking-wide">
			<!-- table -->
			<div class="relative shadow-md rounded-lg">
				<table class="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
					<thead class="text-base text-black bg-[#CACACA] bg-opacity-30 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="px-6 py-3">訂單時間</th>
							<th scope="col" class="px-6 py-3">受檢時間</th>
							<th scope="col" class="px-6 py-3">姓名/生日</th>
							<th scope="col" class="px-6 py-3">公司</th>
							<th scope="col" class="px-6 py-3">方案名稱</th>
							<th scope="col" class="px-6 py-3">訂單狀態</th>
							<th scope="col" class="px-6 py-3">預約確認</th>
							<th scope="col" class="px-6 py-3">報到狀態</th>
						</tr>
					</thead>
					<tbody>
						<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-[#CACACA] even:bg-opacity-10 border-b dark:border-gray-700 borderTopLine">
							<td class="px-6 py-4">2023-10-02-<br />8:20-8:40</td>
							<td class="px-6 py-4">2023-10-02-<br />8:20-8:40</td>
							<td class="px-6 py-4">林OO<br /><small>1989/06/04</small></td>
							<td class="px-6 py-4">亞東氣體</td>
							<td class="px-6 py-4 whitespace-nowrap dark:text-white">亞東氣體-<br />XXXXXXXX 方案Ａ</td>
							<td class="px-6 py-4">需要改期</td>
							<td class="px-6 py-4">
								<div class="tabs">
									<input type="radio" id="radio-1" name="tabs" checked="" />
									<label class="tab" for="radio-1">Hello<span class="notification">2</span></label>
									<input type="radio" id="radio-2" name="tabs" />
									<label class="tab" for="radio-2">UI</label>
									<input type="radio" id="radio-3" name="tabs" />
									<label class="tab" for="radio-3">World</label>
									<span class="glider"></span>
								</div>
							</td>
							<td class="px-6 py-4">Btn</td>
						</tr>
						<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-[#CACACA] even:bg-opacity-10 border-b dark:border-gray-700 borderTopLine">
							<td class="px-6 py-4">2023-10-02-<br />8:20-8:40</td>
							<td class="px-6 py-4">2023-10-02-<br />8:20-8:40</td>
							<td class="px-6 py-4">林OO<br /><small>1989/06/04</small></td>
							<td class="px-6 py-4">亞東氣體</td>
							<td class="px-6 py-4 whitespace-nowrap dark:text-white">亞東氣體-<br />XXXXXXXX 方案Ａ</td>
							<td class="px-6 py-4">需要改期</td>
							<td class="px-6 py-4">Btn</td>
							<td class="px-6 py-4">Btn</td>
						</tr>
					</tbody>
				</table>
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
.tabs {
	display: flex;
	position: relative;
	background-color: #fff;
	box-shadow:
		0 0 1px 0 rgba(24, 94, 224, 0.15),
		0 6px 12px 0 rgba(24, 94, 224, 0.15);
	padding: 0.75rem;
	border-radius: 99px;
}

.tabs * {
	z-index: 2;
}

input[type='radio'] {
	display: none;
}

.tab {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 50px;
	font-size: 0.8rem;
	color: black;
	font-weight: 500;
	border-radius: 99px;
	cursor: pointer;
	transition: color 0.15s ease-in;
}

.notification {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 0.8rem;
	height: 0.8rem;
	position: absolute;
	top: 10px;
	left: 30%;
	font-size: 10px;
	margin-left: 0.75rem;
	border-radius: 50%;
	margin: 0px;
	background-color: #e6eef9;
	transition: 0.15s ease-in;
}

input[type='radio']:checked + label {
	color: #185ee0;
}

input[type='radio']:checked + label > .notification {
	background-color: #185ee0;
	color: #fff;
	margin: 0px;
}
input[id='radio-1']:checked ~ .glider {
	transform: translateX(0);
}
input[id='radio-2']:checked ~ .glider {
	transform: translateX(100%);
}
input[id='radio-3']:checked ~ .glider {
	transform: translateX(200%);
}
.glider {
	position: absolute;
	display: flex;
	height: 30px;
	width: 50px;
	background-color: #e6eef9;
	z-index: 1;
	border-radius: 99px;
	transition: 0.25s ease-out;
}
</style>
