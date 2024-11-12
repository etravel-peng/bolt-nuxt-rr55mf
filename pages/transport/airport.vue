<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-6">机场巴士</h1>
    
    <!-- 机场模块 -->
    <div class="bg-white rounded-lg p-4 shadow-md mb-6">
      <div class="flex justify-between mb-4 bg-gray-100 rounded-lg p-1">
        <button class="flex-1 py-2 px-4 rounded-lg" :class="{'bg-white shadow': airportDirection === 'to'}">
          前往机场
        </button>
        <button class="flex-1 py-2 px-4 rounded-lg" :class="{'bg-white shadow': airportDirection === 'from'}">
          机场出发
        </button>
      </div>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm text-gray-600 mb-1">选择机场</label>
          <select class="w-full p-2 border rounded-lg">
            <option>请选择机场</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm text-gray-600 mb-1">
            {{ airportDirection === 'to' ? '出发地点' : '目的地' }}
          </label>
          <select class="w-full p-2 border rounded-lg">
            <option>请选择地点</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm text-gray-600 mb-1">日期</label>
          <input type="date" class="w-full p-2 border rounded-lg" />
        </div>
      </div>
    </div>
    
    <!-- 动车站模块 -->
    <div class="bg-white rounded-lg p-4 shadow-md">
      <div class="flex justify-between mb-4 bg-gray-100 rounded-lg p-1">
        <button class="flex-1 py-2 px-4 rounded-lg" :class="{'bg-white shadow': trainDirection === 'to'}">
          前往动车站
        </button>
        <button class="flex-1 py-2 px-4 rounded-lg" :class="{'bg-white shadow': trainDirection === 'from'}">
          动车站出发
        </button>
      </div>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm text-gray-600 mb-1">选择动车站</label>
          <select class="w-full p-2 border rounded-lg">
            <option>请选择动车站</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm text-gray-600 mb-1">
            {{ trainDirection === 'to' ? '出发地点' : '目的地' }}
          </label>
          <select class="w-full p-2 border rounded-lg">
            <option>请选择地点</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm text-gray-600 mb-1">日期</label>
          <input type="date" class="w-full p-2 border rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const airportDirection = ref('to')
const trainDirection = ref('to')
</script>