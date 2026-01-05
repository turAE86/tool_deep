<template>
  <div class="careers-page">
    <!-- Hero -->
    <section class="hero-gradient text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Careers at Redscan</h1>
        <p class="text-xl text-gray-300 max-w-3xl">
          Join our team of cybersecurity experts and help protect businesses from cyber threats.
        </p>
      </div>
    </section>

    <!-- Current Openings -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12">Current Openings</h2>
        <div class="space-y-6">
          <JobListing
            v-for="job in jobOpenings"
            :key="job.id"
            :job="job"
          />
        </div>
      </div>
    </section>

    <!-- Work Culture -->
    <CultureSection />

    <!-- Application Process -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Application Process</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="step in applicationSteps" :key="step.step" class="text-center">
            <div class="process-step">{{ step.step }}</div>
            <h3 class="text-xl font-semibold mb-3">{{ step.title }}</h3>
            <p class="text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Employee Benefits</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitsCard
            v-for="benefit in benefits"
            :key="benefit.id"
            :benefit="benefit"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-r from-cyber-blue to-blue-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Submit your application today and start your journey in cybersecurity.
        </p>
        <ApplicationForm />
      </div>
    </section>
  </div>
</template>

<script>
import JobListing from '@/components/careers/JobListing.vue'
import CultureSection from '@/components/careers/CultureSection.vue'
import BenefitsCard from '@/components/careers/BenefitsCard.vue'
import ApplicationForm from '@/components/careers/ApplicationForm.vue'

export default {
  name: 'Careers',
  components: {
    JobListing,
    CultureSection,
    BenefitsCard,
    ApplicationForm
  },
  data() {
    return {
      jobOpenings: [
        {
          id: 1,
          title: 'Senior Security Analyst',
          department: 'Security Operations',
          location: 'London, UK',
          type: 'Full-time',
          description: 'Lead threat hunting and incident response activities.'
        },
        {
          id: 2,
          title: 'Penetration Tester',
          department: 'Security Testing',
          location: 'Remote',
          type: 'Full-time',
          description: 'Conduct security assessments and penetration tests.'
        },
        {
          id: 3,
          title: 'Security Engineer',
          department: 'Engineering',
          location: 'London, UK',
          type: 'Full-time',
          description: 'Design and implement security solutions for clients.'
        }
      ],
      applicationSteps: [
        {
          step: '01',
          title: 'Application',
          description: 'Submit your application through our portal'
        },
        {
          step: '02',
          title: 'Screening',
          description: 'Initial review by our HR team'
        },
        {
          step: '03',
          title: 'Interviews',
          description: 'Technical and cultural fit interviews'
        },
        {
          step: '04',
          title: 'Offer',
          description: 'Receive and review your offer package'
        }
      ],
      benefits: [
        {
          id: 1,
          title: 'Competitive Salary',
          description: 'Market-competitive compensation packages',
          icon: 'fas fa-money-bill-wave'
        },
        {
          id: 2,
          title: 'Training & Development',
          description: 'Continuous learning and certification support',
          icon: 'fas fa-graduation-cap'
        },
        {
          id: 3,
          title: 'Health Benefits',
          description: 'Comprehensive health and wellness programs',
          icon: 'fas fa-heartbeat'
        },
        {
          id: 4,
          title: 'Flexible Working',
          description: 'Remote and flexible work options',
          icon: 'fas fa-laptop-house'
        }
      ]
    }
  }
}
</script>

<style scoped>
.process-step {
  @apply w-16 h-16 bg-cyber-red text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4;
}
</style>