<template>
  <div class="min-h-screen bg-gray-50 pb-16">
    <!-- Header with Route Info -->
    <div class="bg-white px-4 py-3 flex items-center">
      <button class="mr-4" @click="$router.back()">
        <span class="text-xl">←</span>
      </button>
      <div class="flex-1 text-center">
        <h1 class="text-lg font-bold">{{ route.from }} → {{ route.to }}</h1>
        <div class="text-sm text-gray-500">{{ formatSelectedDate }}</div>
      </div>
      <button class="ml-4">
        <span class="text-xl">▼</span>
      </button>
    </div>

    <!-- Date Selector -->
    <div class="bg-white border-t border-gray-100">
      <div class="flex overflow-x-auto hide-scrollbar px-4 py-3 space-x-4">
        <button 
          v-for="date in dateList" 
          :key="date.value"
          @click="selectedDate = date.value"
          class="flex flex-col items-center min-w-[60px]"
          :class="{'text-blue-500': selectedDate === date.value}">
          <span class="text-sm">{{ date.weekday }}</span>
          <span class="font-bold mt-1">{{ date.day }}</span>
          <span class="text-xs text-gray-500">{{ date.date }}</span>
        </button>
        <button class="flex flex-col items-center min-w-[60px]" @click="showCalendar = true">
          <span class="text-xl">📅</span>
          <span class="text-xs mt-1">更多日期</span>
        </button>
      </div>
    </div>

    <!-- Rest of the template remains the same -->
  </div>
</template>

<script setup>
const route = reactive({
  from: '成都',
  to: '小金县'
})

// 生成未来7天的日期列表
const generateDateList = () => {
  const list = []
  const today = new Date()
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    const weekday = weekdays[date.getDay()]
    
    const day = i === 0 ? '今天' : 
                i === 1 ? '明天' : 
                date.getDate().toString()
                
    const dateStr = `${date.getMonth() + 1}-${date.getDate()}`
    
    list.push({
      weekday,
      day,
      date: dateStr,
      value: date.toISOString().split('T')[0]
    })
  }
  
  return list
}

const dateList = ref(generateDateList())
const selectedDate = ref(dateList.value[0].value) // 默认选择今天
const showCalendar = ref(false)

// 格式化选中的日期显示
const formatSelectedDate = computed(() => {
  const date = new Date(selectedDate.value)
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const weekday = weekdays[date.getDay()]
  return `${month}月${day}日 ${weekday}`
})

// Rest of the script remains the same
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>