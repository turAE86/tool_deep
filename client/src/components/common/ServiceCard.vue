<template>
  <div class="service-card">
    <div class="service-header mb-4">
      <i :class="`fas fa-${service.icon} service-icon mr-4`"></i>
      <h3 class="service-title">{{ service.title }}</h3>
    </div>
    <p class="service-description mb-6">{{ service.description }}</p>
    <router-link :to="service.link" class="service-link">
      Learn More →
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.service-card {
  background-color: var(--cyber-gray);
  border: 1px solid var(--gray-700);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  height: 100%;
}

.service-card:hover {
  border-color: var(--cyber-red);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.service-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.service-icon {
  color: var(--cyber-red);
  font-size: 2.5rem;
  margin-right: 1rem;
}

.service-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
}

.service-description {
  color: var(--gray-400);
  margin-bottom: 1.5rem;
}

.service-link {
  color: var(--cyber-red);
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 1rem;
}

.service-link:hover {
  color: #b91c1c;
}
</style>
