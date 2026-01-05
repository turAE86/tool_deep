<template>
  <div class="mdr-page">
    <!-- Hero -->
    <section class="hero-gradient text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Managed Detection & Response (MDR)</h1>
        <p class="text-xl text-gray-300 max-w-3xl">
          Rapidly identify and respond to cyber-threats with 24/7 monitoring and expert intervention.
        </p>
      </div>
    </section>

    <!-- Overview -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">What is Kroll Responder MDR?</h2>
            <p class="text-gray-400 mb-6">
              Kroll Responder brings together the people, technology and intelligence required to proactively hunt for and shut down threats before they impact your organisation.
            </p>
            <p class="text-gray-400">
              Our MDR service combines advanced threat detection with expert human analysis to provide comprehensive protection against sophisticated cyber attacks.
            </p>
          </div>
          <div class="bg-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-bold mb-6">Key Capabilities</h3>
            <ul class="space-y-4">
              <li v-for="capability in capabilities" :key="capability" class="flex items-center">
                <i class="fas fa-check-circle text-cyber-red mr-3"></i>
                <span>{{ capability }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">How Our MDR Service Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="step in workflowSteps" :key="step.step" class="text-center">
            <div class="step-number">{{ step.step }}</div>
            <h3 class="text-xl font-semibold mb-3">{{ step.title }}</h3>
            <p class="text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Service Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="feature in features" :key="feature.id" class="feature-card">
            <i :class="feature.icon" class="text-2xl text-cyber-red mb-4"></i>
            <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-r from-cyber-blue to-blue-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready for 24/7 Protection?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Get started with our MDR service and experience peace of mind knowing your business is protected.
        </p>
        <router-link to="/schedule-demo" class="btn-primary inline-block">
          Schedule a Demo
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MDR',
  data() {
    return {
      capabilities: [
        '24/7 Security Monitoring',
        'Advanced Threat Hunting',
        'Real-time Incident Response',
        'Threat Intelligence Integration',
        'Expert Security Analysts',
        'Custom Alert Tuning'
      ],
      workflowSteps: [
        {
          step: '1',
          title: 'Data Collection',
          description: 'Ingest security data from across your environment'
        },
        {
          step: '2',
          title: 'Threat Detection',
          description: 'Advanced analytics identify potential threats'
        },
        {
          step: '3',
          title: 'Expert Analysis',
          description: 'Security analysts investigate and validate alerts'
        },
        {
          step: '4',
          title: 'Rapid Response',
          description: 'Immediate action to contain and remediate threats'
        }
      ],
      features: [
        {
          id: 1,
          title: 'Continuous Monitoring',
          description: '24/7 surveillance of your digital assets',
          icon: 'fas fa-eye'
        },
        {
          id: 2,
          title: 'Threat Hunting',
          description: 'Proactive search for hidden threats',
          icon: 'fas fa-search'
        },
        {
          id: 3,
          title: 'Incident Response',
          description: 'Immediate action on security events',
          icon: 'fas fa-bolt'
        },
        {
          id: 4,
          title: 'Security Analytics',
          description: 'Advanced analysis of security data',
          icon: 'fas fa-chart-bar'
        },
        {
          id: 5,
          title: 'Compliance Reporting',
          description: 'Regular reports for regulatory compliance',
          icon: 'fas fa-file-alt'
        },
        {
          id: 6,
          title: 'Dedicated Team',
          description: 'Assigned security experts for your business',
          icon: 'fas fa-user-shield'
        }
      ]
    }
  }
}
</script>

<style scoped>
.step-number {
  @apply w-16 h-16 bg-cyber-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4;
}

.feature-card {
  @apply bg-gray-800/50 p-6 rounded-xl border border-gray-700;
}
</style>