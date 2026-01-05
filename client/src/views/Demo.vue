<template>
  <div class="demo-page">
    <!-- Hero -->
    <section class="hero-gradient text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Schedule a Demo</h1>
        <p class="text-xl text-gray-300 max-w-3xl">
          See our cybersecurity solutions in action. Book a personalized demo today.
        </p>
      </div>
    </section>

    <!-- Demo Content -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Demo Form -->
          <div class="demo-form">
            <h2 class="text-2xl font-bold mb-6">Request a Demo</h2>
            <form @submit.prevent="submitDemoRequest" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium mb-2">First Name *</label>
                  <input type="text" required class="form-input">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Last Name *</label>
                  <input type="text" required class="form-input">
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">Business Email *</label>
                <input type="email" required class="form-input">
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">Phone Number *</label>
                <input type="tel" required class="form-input">
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">Company *</label>
                <input type="text" required class="form-input">
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">Country *</label>
                <select required class="form-input">
                  <option value="">Select Country</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">How can we help you? *</label>
                <textarea rows="4" required class="form-input"></textarea>
                <div class="text-sm text-gray-400 mt-2">1000 characters left</div>
              </div>
              
              <div class="flex items-center">
                <input type="checkbox" id="newsletter" class="mr-3">
                <label for="newsletter" class="text-sm text-gray-400">
                  I would like to receive invitations, insights and thought leadership content
                </label>
              </div>
              
              <button type="submit" class="btn-primary w-full">
                Request Demo
              </button>
            </form>
          </div>

          <!-- Demo Details -->
          <div>
            <h2 class="text-2xl font-bold mb-6">How It Works</h2>
            <div class="space-y-6 mb-8">
              <div v-for="step in demoSteps" :key="step.step" class="demo-step">
                <div class="step-number">{{ step.step }}</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">{{ step.title }}</h3>
                  <p class="text-gray-400">{{ step.description }}</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-800/50 p-6 rounded-xl">
              <h3 class="text-lg font-bold mb-4">Service Highlights</h3>
              <ul class="space-y-3">
                <li v-for="highlight in serviceHighlights" :key="highlight" class="flex items-center">
                  <i class="fas fa-check text-cyber-red mr-3"></i>
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div class="max-w-3xl mx-auto">
          <div v-for="faq in faqs" :key="faq.id" class="faq-item mb-6">
            <button @click="toggleFAQ(faq.id)" class="faq-question">
              {{ faq.question }}
              <i :class="['fas', openFAQ === faq.id ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
            </button>
            <div v-if="openFAQ === faq.id" class="faq-answer">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      openFAQ: 1,
      demoSteps: [
        {
          step: '1',
          title: 'Schedule Your Demo',
          description: 'Fill out the form to book a convenient time for your personalized demo.'
        },
        {
          step: '2',
          title: 'Personalized Walkthrough',
          description: 'Our experts will show you how our solutions address your specific needs.'
        },
        {
          step: '3',
          title: 'Q&A Session',
          description: 'Ask questions and discuss implementation details with our team.'
        },
        {
          step: '4',
          title: 'Next Steps',
          description: 'Receive a customized proposal and implementation plan.'
        }
      ],
      serviceHighlights: [
        'Live threat detection demonstration',
        'Real-time incident response showcase',
        'Custom security assessment preview',
        'Integration capabilities overview',
        'Compliance and reporting features'
      ],
      faqs: [
        {
          id: 1,
          question: 'How long does the demo take?',
          answer: 'Our demos typically last 45-60 minutes, including Q&A time.'
        },
        {
          id: 2,
          question: 'Who should attend the demo?',
          answer: 'We recommend including security team members, IT leadership, and business decision-makers.'
        },
        {
          id: 3,
          question: 'What information should I prepare?',
          answer: 'Come prepared to discuss your current security challenges and specific requirements.'
        }
      ]
    }
  },
  methods: {
    submitDemoRequest() {
      // Handle demo request submission
    },
    toggleFAQ(id) {
      this.openFAQ = this.openFAQ === id ? null : id
    }
  }
}
</script>

<style scoped>
.demo-form {
  @apply bg-gray-800/50 p-8 rounded-xl;
}

.form-input {
  @apply w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyber-red transition-colors;
}

.demo-step {
  @apply flex items-start space-x-4;
}

.step-number {
  @apply w-10 h-10 bg-cyber-red text-white rounded-full flex items-center justify-center font-bold flex-shrink-0;
}

.faq-question {
  @apply w-full flex justify-between items-center p-4 bg-gray-800 rounded-lg text-left hover:bg-gray-700 transition-colors;
}

.faq-answer {
  @apply p-4 bg-gray-800/50 rounded-lg mt-2;
}
</style>