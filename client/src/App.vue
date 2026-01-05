<template>
  <div id="app">
    <Header @open-demo="openDemoModal" />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
    openDemoModal() {
      // Handle demo modal opening
      console.log('Open demo modal')
    }
  }
}
</script>

<style scoped>
/* Additional component-specific styles */
.ml-4 {
  margin-left: 1rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-12 {
  margin-top: 3rem;
}

/* Vue specific animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>