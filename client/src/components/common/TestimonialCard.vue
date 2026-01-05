<template>
  <div class="testimonial-card">
    <div class="stars mb-4">
      <div v-for="star in testimonial.rating" :key="star" class="star">
        <i class="fas fa-star"></i>
      </div>
    </div>
    <blockquote class="quote mb-4">
      "{{ testimonial.quote }}"
    </blockquote>
    <div class="author-info">
      <strong>{{ testimonial.author }}</strong><br>
      {{ testimonial.company }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.testimonial-card {
  background-color: var(--gray-800);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--gray-700);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.stars {
  display: flex;
  margin-bottom: 1rem;
}

.star {
  color: var(--cyber-red);
}

.quote {
  color: var(--gray-300);
  font-style: italic;
  margin-bottom: 1rem;
}

.author-info {
  font-size: 0.875rem;
  color: var(--gray-400);
}

.author-info strong {
  color: white;
}
</style>
