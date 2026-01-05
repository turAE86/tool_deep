<template>
  <div class="not-found">
    <div class="container mx-auto px-4 py-32 text-center">
      <div class="error-code">404</div>
      <h1 class="text-4xl font-bold mb-6">Page Not Found</h1>
      <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link to="/" class="btn-primary">
          <i class="fas fa-home mr-2"></i>
          Go Home
        </router-link>
        <router-link to="/contact" class="btn-secondary">
          <i class="fas fa-envelope mr-2"></i>
          Contact Support
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.error-code {
  @apply text-9xl font-bold text-cyber-red opacity-20 mb-8;
}
</style>