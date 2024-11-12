<template>
  <div class="max-w-7xl mx-auto px-4 py-6 mb-16">
    <h1 class="text-2xl font-bold mb-6">直通车+体验</h1>
    
    <div class="grid grid-cols-1 gap-4">
      <NuxtLink to="/packages/hotel" 
        class="bg-white rounded-lg p-4 shadow flex items-center">
        <div class="bg-gray-100 p-3 rounded-lg mr-4">
          <span class="text-2xl">🏨</span>
        </div>
        <div>
          <h2 class="font-bold">直通车+酒店</h2>
          <p class="text-sm text-gray-600">景区周边精选住宿套餐</p>
        </div>
      </NuxtLink>

      <NuxtLink to="/packages/tickets" 
        class="bg-white rounded-lg p-4 shadow flex items-center">
        <div class="bg-gray-100 p-3 rounded-lg mr-4">
          <span class="text-2xl">🎫</span>
        </div>
        <div>
          <h2 class="font-bold">直通车+门票</h2>
          <p class="text-sm text-gray-600">景点门票打包优惠</p>
        </div>
      </NuxtLink>

      <NuxtLink to="/packages/dining" 
        class="bg-white rounded-lg p-4 shadow flex items-center">
        <div class="bg-gray-100 p-3 rounded-lg mr-4">
          <span class="text-2xl">🍽️</span>
        </div>
        <div>
          <h2 class="font-bold">直通车+用餐</h2>
          <p class="text-sm text-gray-600">特色美食套餐体验</p>
        </div>
      </NuxtLink>

      <NuxtLink to="/packages/guide" 
        class="bg-white rounded-lg p-4 shadow flex items-center">
        <div class="bg-gray-100 p-3 rounded-lg mr-4">
          <span class="text-2xl">👤</span>
        </div>
        <div>
          <h2 class="font-bold">直通车+导游</h2>
          <p class="text-sm text-gray-600">专业导游讲解服务</p>
        </div>
      </NuxtLink>

      <NuxtLink to="/packages/activities" 
        class="bg-white rounded-lg p-4 shadow flex items-center">
        <div class="bg-gray-100 p-3 rounded-lg mr-4">
          <span class="text-2xl">🎡</span>
        </div>
        <div>
          <h2 class="font-bold">直通车+玩乐</h2>
          <p class="text-sm text-gray-600">特色体验活动套餐</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>