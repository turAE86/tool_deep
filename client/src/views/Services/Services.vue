<template>
  <div class="services-page">
    <!-- Hero -->
    <section class="hero-gradient text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Cybersecurity Services</h1>
        <p class="text-xl text-gray-300 max-w-3xl">
          Comprehensive security solutions designed to protect your business from evolving threats.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Benefits of Choosing Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="benefit in benefits" :key="benefit.id" class="benefit-card">
            <i :class="benefit.icon" class="text-3xl text-cyber-red mb-4"></i>
            <h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-400">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Solutions -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Customized Security Solutions</h2>
            <p class="text-gray-400 mb-6">
              We understand that every organization has unique security needs. Our team works closely with you to develop tailored solutions that address your specific challenges.
            </p>
            <ul class="space-y-4">
              <li v-for="item in customSolutions" :key="item" class="flex items-center">
                <i class="fas fa-check text-cyber-red mr-3"></i>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-bold mb-6">Get a Free Security Assessment</h3>
            <form @submit.prevent="submitAssessmentRequest" class="space-y-4">
              <input type="text" placeholder="Your Name" class="form-input" required>
              <input type="email" placeholder="Business Email" class="form-input" required>
              <input type="tel" placeholder="Phone Number" class="form-input" required>
              <select class="form-input">
                <option>Select Company Size</option>
                <option>1-50 employees</option>
                <option>51-200 employees</option>
                <option>201-1000 employees</option>
                <option>1000+ employees</option>
              </select>
              <button type="submit" class="btn-primary w-full">Request Assessment</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '@/components/common/ServiceCard.vue'

export default {
  name: 'Services',
  components: {
    ServiceCard
  },
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Managed Detection & Response',
          description: '24/7 threat monitoring, detection, and response services.',
          icon: 'shield-alt',
          link: '/services/managed-detection-response'
        },
        {
          id: 2,
          title: 'Penetration Testing',
          description: 'Comprehensive security testing to identify vulnerabilities.',
          icon: 'search',
          link: '/services/penetration-testing'
        },
        {
          id: 3,
          title: 'Incident Response',
          description: 'Immediate response and recovery from security incidents.',
          icon: 'exclamation-triangle',
          link: '/services/incident-response'
        },
        {
          id: 4,
          title: 'Security Assessments',
          description: 'Complete evaluation of your security posture.',
          icon: 'clipboard-check',
          link: '/services/security-assessments'
        },
        {
          id: 5,
          title: 'Managed Services',
          description: 'Ongoing security management and monitoring.',
          icon: 'cogs',
          link: '/services/managed-services'
        },
        {
          id: 6,
          title: 'Consulting',
          description: 'Expert advisory and strategic guidance.',
          icon: 'comments',
          link: '/services/consulting'
        }
      ],
      benefits: [
        {
          id: 1,
          title: '24/7 Protection',
          description: 'Round-the-clock monitoring and immediate threat response.',
          icon: 'fas fa-clock'
        },
        {
          id: 2,
          title: 'Expert Team',
          description: 'Certified cybersecurity professionals with extensive experience.',
          icon: 'fas fa-users'
        },
        {
          id: 3,
          title: 'Proven Methodology',
          description: 'Established frameworks and best practices.',
          icon: 'fas fa-chart-line'
        },
        {
          id: 4,
          title: 'Custom Solutions',
          description: 'Tailored to your specific business needs.',
          icon: 'fas fa-puzzle-piece'
        }
      ],
      customSolutions: [
        'Industry-specific security frameworks',
        'Compliance and regulatory support',
        'Custom threat intelligence feeds',
        'Tailored response playbooks',
        'Integration with existing systems'
      ]
    }
  },
  methods: {
    submitAssessmentRequest() {
      // Handle form submission
    }
  }
}
</script>

<style scoped>
.hero-gradient {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%);
}

.benefit-card {
  @apply bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center;
}

.form-input {
  @apply w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyber-red transition-colors;
}
</style>