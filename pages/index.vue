<template>
  <MainLayout>
    <div class="px-4 py-6 space-y-8">
      <!-- Main Services -->
      <section>
        <h2 class="text-xl font-bold mb-6">主要服务</h2>
        <div class="grid grid-cols-2 gap-6">
          <NuxtLink to="/direct-bus" class="main-service-card">
            <div class="main-service-icon">🚌</div>
            <div class="text-center">
              <h3 class="text-lg font-bold mb-2">旅游直通车</h3>
              <p class="text-sm text-gray-500">汽车票、机场巴士、景区直通</p>
            </div>
          </NuxtLink>
          <NuxtLink to="/bus-experience" class="main-service-card">
            <div class="main-service-icon">🎫</div>
            <div class="text-center">
              <h3 class="text-lg font-bold mb-2">直通车+体验</h3>
              <p class="text-sm text-gray-500">酒店、门票、用餐等套餐</p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Additional Services -->
      <section>
        <h2 class="text-xl font-bold mb-4">更多服务</h2>
        <div class="grid grid-cols-4 gap-3">
          <NuxtLink to="/entertainment" class="sub-service-card">
            <div class="sub-service-icon">🎡</div>
            <div class="text-center">
              <h3 class="font-medium text-sm">玩乐体验</h3>
            </div>
          </NuxtLink>
          <NuxtLink to="/day-tours" class="sub-service-card">
            <div class="sub-service-icon">🗺️</div>
            <div class="text-center">
              <h3 class="font-medium text-sm">日游线路</h3>
            </div>
          </NuxtLink>
          <NuxtLink to="/multi-stops" class="sub-service-card">
            <div class="sub-service-icon">📍</div>
            <div class="text-center">
              <h3 class="font-medium text-sm">多景点送达</h3>
            </div>
          </NuxtLink>
          <NuxtLink to="/car-rental" class="sub-service-card">
            <div class="sub-service-icon">🚗</div>
            <div class="text-center">
              <h3 class="font-medium text-sm">包车/租车</h3>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<style scoped>
.main-service-card {
  @apply bg-white rounded-lg p-6 shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-200;
  min-height: 180px;
}

.main-service-icon {
  @apply w-16 h-16 mb-4 flex items-center justify-center text-3xl bg-gray-50 rounded-full;
}

.sub-service-card {
  @apply bg-white rounded-lg p-3 shadow flex flex-col items-center hover:shadow-md transition-shadow duration-200;
}

.sub-service-icon {
  @apply w-10 h-10 mb-2 flex items-center justify-center text-xl bg-gray-50 rounded-full;
}
</style>