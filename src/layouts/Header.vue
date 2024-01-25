<script setup lang="ts"></script>
<template>
	<!-- <nav class="h-16 bg-[#404B5D] w-full flex justify-between items-center">
		<div class="w-44 bg-[#0087E0] px-2 text-white text-md text-center flex justify-center items-center h-full tracking-widest">
			<div class="flex justify-center items-center">
				<div>醫聯網EMS系統後台</div>
			</div>
		</div>

		<div class="w-20 bg-[#0087E0] px-2 text-white text-md text-center flex justify-center items-center h-full tracking-widest">
			<div class="flex justify-center items-center">
				<div>公布欄</div>
			</div>
		</div>

		<div class="px-2 text-white text-md text-center flex justify-center items-center h-full tracking-widest">
			<div class="flex justify-center items-center mr-4">
				<div class="text-right">機構管理者<br /><small class="text-sm">meg.wu@medicrowd.com.tw</small></div>
			</div>
			<div class="flex justify-center items-center mr-2">
				<div>登出</div>
			</div>
		</div>
	</nav> -->
	<nav class="bg-[#404B5D] text-white">
		<div class="mx-auto">
			<div class="flex justify-between">
				<div class="flex space-x-2">
					<div class="flex items-center bg-[#0087E0]">
						<router-link class="flex justify-center items-center py-2 px-2 w-52 text-xl text-center" to="/">醫聯網EMS系統後台</router-link>
					</div>
					<div class="flex items-center space-x-2">
						<router-link
							:class="{ 'bg-[#0087DF]': $route.path === '/billboard' }"
							class="py-4 px-3 w-36 text-base text-center bg-[#212F47] hover:bg-[#0087DF] relative before:absolute before:h-2 before:w-2 before:bg-red-600 before:rounded-full before:right-9"
							to="/billboard"
							>公布欄</router-link
						>
						<router-link
							:class="{ 'bg-[#0087DF]': $route.path === '/AppointmentCalendar' }"
							class="py-4 px-3 w-36 text-base text-center bg-[#212F47] hover:bg-[#0087DF]"
							to="/AppointmentCalendar"
							>預約行事曆</router-link
						>
						<router-link
							:class="{ 'bg-[#0087DF]': $route.path === '/AppointmentList' }"
							class="py-4 px-3 w-36 text-base text-center bg-[#212F47] hover:bg-[#0087DF] relative before:absolute before:h-2 before:w-2 before:bg-red-600 before:rounded-full before:right-7"
							to="/AppointmentList"
							>預約列表</router-link
						>
						<router-link
							:class="{ 'bg-[#0087DF]': $route.path === '/HealthCheckup' }"
							class="py-4 px-3 w-36 text-base text-center bg-[#212F47] hover:bg-[#0087DF] relative before:absolute before:h-2 before:w-2 before:bg-red-600 before:rounded-full before:right-3"
							to="/HealthCheckup"
							>健檢作業照會</router-link
						>
						<router-link
							:class="{ 'bg-[#0087DF]': $route.path === '/Evaluate' }"
							class="py-4 px-3 w-36 text-base text-center bg-[#212F47] hover:bg-[#0087DF] relative before:absolute before:h-2 before:w-2 before:bg-red-600 before:rounded-full before:right-7"
							to="/Evaluate"
							>機構評價</router-link
						>
					</div>
				</div>
				<div class="flex items-center space-x-2 mr-2">
					<div class="text-right">機構管理者<br /><small class="text-sm">meg.wu@medicrowd.com.tw</small></div>
					<a href="#" class="py-2 px-3 rounded mr-2">登出</a>
					<!-- hover:text-gray-900 hover:bg-yellow-300 bg-yellow-400  -->
				</div>
			</div>
		</div>
	</nav>
</template>
