<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-6">汽车票预订</h1>
    
    <div class="bg-white rounded-lg p-4 shadow-md">
      <div class="flex items-center justify-between mb-4">
        <div class="flex-1">
          <label class="block text-sm text-gray-600 mb-1">始发站</label>
          <select class="w-full p-2 border rounded-lg">
            <option>请选择始发站</option>
          </select>
        </div>
        
        <button class="mx-4 p-2">
          <span class="text-xl">🔄</span>
        </button>
        
        <div class="flex-1">
          <label class="block text-sm text-gray-600 mb-1">终点站</label>
          <select class="w-full p-2 border rounded-lg">
            <option>请选择终点站</option>
          </select>
        </div>
      </div>
      
      <div class="mb-4">
        <label class="block text-sm text-gray-600 mb-1">出发日期</label>
        <input type="date" class="w-full p-2 border rounded-lg" />
      </div>
      
      <button class="w-full bg-primary-600 text-white py-3 rounded-lg font-bold">
        搜索车票
      </button>
    </div>
  </div>
</template>