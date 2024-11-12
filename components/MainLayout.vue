<template>
  <div class="min-h-screen bg-gray-50">
    <StatusBar />
    <HeaderBar />
    <main class="pb-16">
      <slot />
    </main>
    <NavigationBar />
  </div>
</template>