<template>
  <div class="max-w-7xl mx-auto py-6">
    <h1 class="text-2xl font-bold mb-6 px-4">旅游直通车</h1>
    
    <!-- Scrollable Tabs -->
    <div class="mb-6 relative">
      <div class="overflow-x-auto hide-scrollbar">
        <div class="flex px-4 space-x-4 min-w-max">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-6 py-2 rounded-full whitespace-nowrap"
            :class="activeTab === tab.id ? 'bg-primary-600 text-white' : 'bg-gray-100'">
            {{ tab.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="px-4">
      <!-- 汽车票 Tab -->
      <div v-if="activeTab === 'bus'" class="space-y-6">
        <div class="bg-white rounded-lg p-4 shadow-md">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-1">
              <label class="block text-sm text-gray-600 mb-1">始发站</label>
              <select v-model="selectedDepartStation" class="w-full p-2 border rounded-lg">
                <option value="">请选择始发站</option>
                <optgroup label="热门站点">
                  <option value="新南门汽车站">新南门汽车站</option>
                  <option value="茶店子汽车站">茶店子汽车站</option>
                  <option value="五桂桥汽车站">五桂桥汽车站</option>
                </optgroup>
                <optgroup label="地铁站">
                  <option value="天府广场地铁站">天府广场地铁站</option>
                  <option value="春熙路地铁站">春熙路地铁站</option>
                  <option value="省体育馆地铁站">省体育馆地铁站</option>
                </optgroup>
                <optgroup label="商圈">
                  <option value="太古里">太古里</option>
                  <option value="春熙路商圈">春熙路商圈</option>
                  <option value="九眼桥">九眼桥</option>
                </optgroup>
              </select>
            </div>
            
            <button class="mx-4 p-2" @click="swapStations">
              <span class="text-xl">🔄</span>
            </button>
            
            <div class="flex-1">
              <label class="block text-sm text-gray-600 mb-1">终点站</label>
              <select v-model="selectedArrivalStation" class="w-full p-2 border rounded-lg">
                <option value="">请选择终点站</option>
                <optgroup label="热门景区">
                  <option value="都江堰景区">都江堰景区</option>
                  <option value="青城山景区">青城山景区</option>
                  <option value="四姑娘山">四姑娘山</option>
                  <option value="九寨沟">九寨沟</option>
                  <option value="峨眉山">峨眉山</option>
                </optgroup>
                <optgroup label="周边城市">
                  <option value="乐山市">乐山市</option>
                  <option value="眉山市">眉山市</option>
                  <option value="雅安市">雅安市</option>
                  <option value="德阳市">德阳市</option>
                </optgroup>
              </select>
            </div>
          </div>
          
          <div class="mb-4">
            <label class="block text-sm text-gray-600 mb-1">出发日期</label>
            <input type="date" v-model="departDate" class="w-full p-2 border rounded-lg" />
          </div>
          
          <button 
            @click="searchTickets"
            :disabled="!isFormValid"
            class="w-full py-3 rounded-lg font-bold"
            :class="isFormValid ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'">
            搜索车票
          </button>
        </div>
      </div>

      <!-- 其他标签页内容保持不变 -->
      <div v-if="activeTab === 'airport'" class="space-y-6">
        <!-- 机场巴士内容 -->
      </div>

      <div v-if="activeTab === 'scenic'" class="space-y-6">
        <!-- 景区直通车内容 -->
      </div>
    </div>
  </div>
</template>

<script setup>
const tabs = [
  { id: 'bus', name: '汽车票' },
  { id: 'airport', name: '机场巴士' },
  { id: 'scenic', name: '景区直通车' }
]

const activeTab = ref('bus')
const selectedDepartStation = ref('')
const selectedArrivalStation = ref('')
const departDate = ref('')

const isFormValid = computed(() => {
  return selectedDepartStation.value && 
         selectedArrivalStation.value && 
         departDate.value
})

const swapStations = () => {
  const temp = selectedDepartStation.value
  selectedDepartStation.value = selectedArrivalStation.value
  selectedArrivalStation.value = temp
}

const searchTickets = () => {
  if (!isFormValid.value) return
  
  // 跳转到搜索结果页面
  navigateTo({
    path: '/search-results',
    query: {
      from: selectedDepartStation.value,
      to: selectedArrivalStation.value,
      date: departDate.value
    }
  })
}
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