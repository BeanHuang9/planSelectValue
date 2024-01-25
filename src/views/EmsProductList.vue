<script lang="ts" setup>
import { ref } from 'vue';

const currentStep: Ref<number> = ref(1);
const setpList: Ref<string[]> = ref(['方案預約', '問卷填寫', '確認預約', '完成預約']);
</script>
<template>
	<div class="py-16 bg-yellow-100">
		<div class="flex justify-start px-28 items-start w-2/3 m-auto">
			<div>
				<div class="mb-6 text-[#494949] text-xl font-bold">目前步驟</div>
				<div class="flex justify-center items-center ml-16">
					<div class="text-[#afafaf] font-semibold">
						<div class="rounded-full bg-[#00D7A0] w-7 h-7 text-center flex justify-center text-white text-lg font-bold mx-4 my-2">1</div>
						<div class="text-[#afafaf] font-semibold">方案預約</div>
					</div>
					<div class="bg-[#00D7A0] h-1 w-[240px]"></div>
					<div class="">
						<div class="rounded-full bg-[#00D7A0] w-7 h-7 text-center flex justify-center text-white text-lg font-bold mx-4 my-2">2</div>
						<div class="text-[#494949] font-semibold">問卷填寫</div>
					</div>
					<div class="bg-[#afafaf] h-1 w-[240px]"></div>
					<div class="">
						<div class="rounded-full bg-[#afafaf] w-7 h-7 text-center flex justify-center text-white text-lg font-bold mx-4 my-2">3</div>
						<div class="text-[#afafaf] font-semibold">確認預約</div>
					</div>
					<div class="bg-[#afafaf] h-1 w-[240px]"></div>
					<div class="">
						<div class="rounded-full bg-[#afafaf] w-7 h-7 text-center flex justify-center text-white text-lg font-bold mx-4 my-2">4</div>
						<div class="text-[#afafaf] font-semibold">完成預約</div>
					</div>
				</div>
			</div>
		</div>
		<div class="my-24 flex px-28 items-start w-2/3 m-auto">
			<div class="">
				<div class="flex mb-12">
					<div class="mr-6 font-semibold text-center flex justify-center items-center text-lg tracking-1">身份</div>
					<div class="flex">
						<button class="bg-[#0087E0] text-white h-[36px] w-[92px] rounded border-gray-400 mr-2 text-lg tracking-1">員工</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400">員眷</button>
					</div>
				</div>
				<div class="flex mb-12">
					<div class="mr-6 font-semibold text-center flex justify-center items-center text-lg tracking-1">縣市</div>
					<div class="flex">
						<button class="bg-[#0087E0] text-white h-[36px] w-[92px] rounded border-gray-400 mr-2">基隆市</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">新北市</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">台北市</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">桃園市</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">台中市</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">高雄市</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">屏東縣</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">澎湖縣</button>
					</div>
				</div>
				<div class="flex mb-12">
					<div class="font-semibold text-center flex justify-center items-start mr-6 text-lg tracking-1">機構</div>
					<div class="grid grid-cols-2 gap-y-3">
						<button class="bg-[#0087E0] text-white h-[36px] w-[391px] rounded border-gray-400 mr-2">所有機構</button>
						<button class="bg-white h-[36px] w-[391px] rounded border-gray-400 mr-2">每家機構名稱一行最長不超過十九個中文字</button>
						<button class="bg-white h-[36px] w-[391px] rounded border-gray-400 mr-2">國泰健康管理中心(內湖診所)</button>
						<button class="bg-white h-[36px] w-[391px] rounded border-gray-400 mr-2">高雄仁愛之家附設慈惠醫院</button>
						<button class="bg-white h-[36px] w-[391px] rounded border-gray-400 mr-2">信義101健康管理診所</button>
						<button class="bg-white h-[36px] w-[391px] rounded border-gray-400 mr-2">國立臺灣大學醫學院附設醫院新竹臺大分院</button>
						<button class="bg-white h-[36px] w-[391px] rounded border-gray-400 mr-2">南門綜合醫院</button>
						<button class="bg-white h-[36px] w-[391px] rounded border-gray-400 mr-2">日健生活健康管理中心</button>
					</div>
				</div>
				<div class="flex mb-23">
					<div class="mr-6 font-semibold text-center flex justify-center items-center text-lg tracking-1">方案</div>
					<div class="flex">
						<button class="bg-[#0087E0] h-[36px] w-[92px] text-white rounded border-gray-400 mr-2">方案A</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">方案B</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">方案C</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">方案D</button>
						<button class="bg-white h-[36px] w-[92px] rounded border-gray-400 mr-2">方案E</button>
					</div>
				</div>
			</div>
		</div>
		<div class="my-24 px-28 items-start w-2/3 m-auto">
			<div class="bg-[#025187] text-white text-lg font-bold w-full h-10 text-center flex items-center px-4">立達診所</div>
			<div class="w-full grid grid-cols-3 gap-2 mt-4">
				<div class="bg-white h-72">
					<div class="h-1/2 bg-red-300"></div>
					<div class="h-full py-1.5 px-3">
						<div class="mb-9 text-[#494949]">長典生物科技-精選方案D</div>
						<div class="mb-4 text-[#7a7a7a]">新北市/ 機構名</div>
						<div class="text-[#FC3A3A]">NTD 1,000</div>
					</div>
				</div>
				<div class="bg-white h-72">
					<div class="h-1/2 bg-red-300"></div>
					<div class="h-full py-1.5 px-3">
						<div class="mb-9 text-[#494949]">長典生物科技-精選方案D</div>
						<div class="mb-4 text-[#7a7a7a]">新北市/ 機構名</div>
						<div class="text-[#FC3A3A]">NTD 1,000</div>
					</div>
				</div>
				<div class="bg-white h-72">
					<div class="h-1/2 bg-red-300"></div>
					<div class="h-full py-1.5 px-3">
						<div class="mb-9 text-[#494949]">長典生物科技-精選方案D</div>
						<div class="mb-4 text-[#7a7a7a]">新北市/ 機構名</div>
						<div class="text-[#FC3A3A]">NTD 1,000</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
