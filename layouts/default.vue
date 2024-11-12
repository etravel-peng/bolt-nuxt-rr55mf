<template>
  <div class="min-h-screen pb-16">
    <main>
      <slot />
    </main>

    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
      <div class="grid grid-cols-5 py-2">
        <NuxtLink to="/" class="flex flex-col items-center">
          <span class="text-xl mb-1">🏠</span>
          <span class="text-xs">首页</span>
        </NuxtLink>
        <NuxtLink to="/itinerary" class="flex flex-col items-center">
          <span class="text-xl mb-1">🗺️</span>
          <span class="text-xs">行程</span>
        </NuxtLink>
        <NuxtLink to="/orders" class="flex flex-col items-center">
          <span class="text-xl mb-1">📋</span>
          <span class="text-xs">我的订单</span>
        </NuxtLink>
        <NuxtLink to="/cart" class="flex flex-col items-center">
          <span class="text-xl mb-1">🛒</span>
          <span class="text-xs">购物车</span>
        </NuxtLink>
        <NuxtLink to="/profile" class="flex flex-col items-center">
          <span class="text-xl mb-1">👤</span>
          <span class="text-xs">我的</span>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>