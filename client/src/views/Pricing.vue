<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Choose Your VAPT Tool Package
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          Professional vulnerability assessment tools for every need
        </p>
      </div>

      <div class="mt-16 grid gap-8 lg:grid-cols-3">
        <!-- Basic Plan -->
        <div v-for="tool in tools" :key="tool._id" class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="px-6 py-8 sm:p-10 sm:pb-6">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl font-bold text-gray-900">{{ tool.name }}</h3>
              <span class="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {{ tool.category }}
              </span>
            </div>
            
            <div class="mt-8 flex items-baseline text-6xl font-extrabold text-gray-900">
              ${{ tool.price }}
              <span class="ml-1 text-2xl font-medium text-gray-500">/one-time</span>
            </div>
            
            <p class="mt-5 text-lg text-gray-600">{{ tool.description }}</p>
            
            <ul class="mt-8 space-y-4">
              <li v-for="feature in tool.features" :key="feature" class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p class="ml-3 text-base text-gray-700">{{ feature }}</p>
              </li>
            </ul>
          </div>
          
          <div class="px-6 pt-6 pb-8 bg-gray-50 sm:px-10">
            <button
              @click="buyTool(tool)"
              class="block w-full py-3 px-4 text-center rounded-md shadow bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Buy Now
            </button>
            
            <div class="mt-6 text-center">
              <span class="text-sm text-gray-500">Version {{ tool.version }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Pricing',
  computed: {
    ...mapGetters(['tools'])
  },
  mounted() {
    this.fetchTools()
  },
  methods: {
    ...mapActions(['fetchTools', 'initiatePayment']),
    
    async buyTool(tool) {
      if (!this.$store.getters.isAuthenticated) {
        this.$router.push('/login')
        return
      }
      
      try {
        const payment = await this.initiatePayment({
          toolId: tool._id,
          amount: tool.price,
          toolName: tool.name
        })
        
        // Redirect to payment gateway
        window.location.href = payment.paymentUrl
      } catch (error) {
        this.$toast.error('Failed to initiate payment')
      }
    }
  }
}
</script>