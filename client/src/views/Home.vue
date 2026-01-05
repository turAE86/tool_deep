<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content text-center">
          <h1>STOP CYBER ATTACKS NOW</h1>
          <p class="hero-subtitle">PROTECT | DETECT | RESPOND</p>
          <p class="hero-description">
            We combat cybercrime on the front line. Merging complete response capabilities with threat intelligence from thousands of incidents handled every year.
          </p>
          <div class="flex flex-col md:flex-row justify-center gap-4">
            <router-link to="/services" class="btn btn-primary">
              Explore Services
            </router-link>
            <button @click="openDemoModal" class="btn btn-secondary">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      <!-- Stats Section Overlay -->
      <div class="stats-overlay">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="stat-item">
              <div class="stat-number">99%</div>
              <div class="stat-label">Customer Satisfaction</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Monitoring & Protection</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">2000+</div>
              <div class="stat-label">Incidents Handled</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <div class="container">
        <h2 class="text-center">Our Cyber Security Services</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20" style="background-color: var(--cyber-dark);">
      <div class="container">
        <h2 class="text-center mb-16" style="color: white;">Why Choose Redscan?</h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 style="color: white; margin-bottom: 1.5rem;">An Adversarial Mindset</h3>
            <p class="mb-6" style="color: var(--gray-400);">
              Defending against cyber threats requires an in-depth understanding of how attackers operate. Our extensive experience of conducting red teaming and ethical hacking engagements around the world means we have first-hand knowledge of the latest adversarial tactics.
            </p>
            <ul class="feature-list">
              <li v-for="feature in features" :key="feature" class="feature-item">
                <i class="fas fa-check" style="color: var(--cyber-red); margin-right: 0.75rem;"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div class="capability-card">
            <h4 style="color: white; margin-bottom: 1.5rem;">Our Capabilities</h4>
            <div class="capability-list">
              <div v-for="capability in capabilities" :key="capability.name" class="capability-item">
                <div class="capability-header">
                  <span>{{ capability.name }}</span>
                  <span style="color: var(--cyber-red);">{{ capability.value }}</span>
                </div>
                <div class="capability-bar">
                  <div
                    class="capability-fill"
                    :style="{ width: capability.value }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20" style="background-color: var(--gray-900);">
      <div class="container">
        <h2 class="text-center mb-16" style="color: white;">What Our Clients Say</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            :testimonial="testimonial"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <h2>Ready to Secure Your Business?</h2>
        <p>Get in touch with our cybersecurity experts for a free consultation.</p>
        <div class="flex flex-col md:flex-row justify-center gap-4">
          <router-link to="/contact" class="btn btn-primary cta-btn-primary">
            Contact Us
          </router-link>
          <a href="tel:+442039722500" class="btn btn-secondary cta-btn-secondary">
            Call Now: +44 203 972 2500
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '@/components/common/ServiceCard.vue'
import TestimonialCard from '@/components/common/TestimonialCard.vue'

export default {
  name: 'Home',
  components: {
    ServiceCard,
    TestimonialCard
  },
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Kroll Responder MDR',
          description: 'Rapidly identify and respond to cyber-threats, 24/7 with our Managed Detection and Response service.',
          icon: 'shield-alt',
          link: '/services/managed-detection-response'
        },
        {
          id: 2,
          title: 'Assessment & Advisory',
          description: 'Comprehensive security assessments and expert advisory services tailored to your business.',
          icon: 'search',
          link: '/services/security-assessments'
        },
        {
          id: 3,
          title: 'Cyber Incident Response',
          description: 'Immediate response and remediation services when cyber incidents occur.',
          icon: 'exclamation-triangle',
          link: '/services/incident-response'
        }
      ],
      features: [
        'Proactive threat hunting',
        '24/7 security monitoring',
        'Expert incident response',
        'Compliance support',
        'Custom security solutions'
      ],
      capabilities: [
        { name: 'Threat Detection', value: '98%' },
        { name: 'Response Time', value: '15min' },
        { name: 'Client Retention', value: '95%' },
        { name: 'Satisfaction Rate', value: '99%' }
      ],
      testimonials: [
        {
          id: 1,
          quote: 'Redscan staff are always on hand to provide swift, clear advice. They help us keep a constant eye on our network and respond quickly to incidents.',
          author: 'IT Director',
          company: 'Private Healthcare Provider',
          rating: 5
        },
        {
          id: 2,
          quote: 'Their MDR service has been instrumental in protecting our financial systems. The team is highly responsive and knowledgeable.',
          author: 'CISO',
          company: 'Financial Services',
          rating: 5
        },
        {
          id: 3,
          quote: 'The penetration testing conducted by Redscan identified critical vulnerabilities that we had missed. Highly recommended.',
          author: 'Security Manager',
          company: 'E-commerce Platform',
          rating: 5
        }
      ]
    }
  },
  methods: {
    openDemoModal() {
      this.$emit('open-demo')
    }
  }
}
</script>

<style scoped>
.stats-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(50%);
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background-color: var(--gray-800);
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--gray-700);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: var(--cyber-red);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--gray-400);
  font-size: 1rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.gap-12 {
  gap: 3rem;
}

.gap-8 {
  gap: 2rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: white;
}

.capability-card {
  background-color: var(--gray-800);
  border-radius: 0.75rem;
  padding: 2rem;
}

.capability-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.capability-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.capability-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.capability-bar {
  height: 0.5rem;
  background-color: var(--gray-700);
  border-radius: 9999px;
  overflow: hidden;
}

.capability-fill {
  height: 100%;
  background-color: var(--cyber-red);
  border-radius: 9999px;
}

.cta-btn-primary {
  background-color: white;
  color: var(--cyber-red);
}

.cta-btn-primary:hover {
  background-color: var(--gray-300);
}

.cta-btn-secondary {
  background-color: transparent;
  border: 2px solid white;
}

.cta-btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
