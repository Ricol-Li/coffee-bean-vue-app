<template>
  <div class="app-wrapper">
    <div class="siderbar-container">侧边导航</div>
    <div class="main-container">
      <div class="header">
        <div class="nav-bar">导航条-1</div>
        <div class="tags-view">导航条-2</div>
      </div>
      <div class="app-main">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-wrapper {
  @apply w-full h-full flex;

  .siderbar-container {
    @apply w-[210px] bg-red;
  }

  .main-container {
    @apply flex flex-col flex-1;
  }

  .nav-bar {
    @apply w-full h-[50px] bg-yellow;
  }

  .tags-view {
    @apply w-full h-[34px] bg-blue;
  }

  .app-main {
    @apply w-full bg-green;
    min-height: calc(100vh - 84px);
  }
}
</style>
