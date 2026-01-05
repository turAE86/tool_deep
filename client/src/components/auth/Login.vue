<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to VAPT Tool
        </h2>
      </div>
      
      <!-- OTP Login Form -->
      <div v-if="!showOTP" class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="phone" class="sr-only">Phone Number</label>
            <input
              v-model="phone"
              id="phone"
              name="phone"
              type="tel"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Phone Number"
            >
          </div>
        </div>

        <div>
          <button
            @click="sendOTP"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send OTP
          </button>
        </div>
      </div>

      <!-- OTP Verification Form -->
      <div v-if="showOTP" class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="otp" class="sr-only">Enter OTP</label>
            <input
              v-model="otp"
              id="otp"
              name="otp"
              type="text"
              maxlength="6"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Enter 6-digit OTP"
            >
          </div>
        </div>

        <div>
          <button
            @click="verifyOTP"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Verify OTP
          </button>
        </div>
      </div>

      <!-- Divider -->
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-gray-50 text-gray-500">Or continue with</span>
        </div>
      </div>

      <!-- Google Login Button -->
      <div>
        <button
          @click="googleLogin"
          class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img class="h-5 w-5 mr-2" src="https://www.google.com/favicon.ico" alt="Google">
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      phone: '',
      otp: '',
      showOTP: false
    }
  },
  methods: {
    ...mapActions(['sendOTP', 'verifyOTP']),
    
    async sendOTP() {
      try {
        await this.sendOTP(this.phone)
        this.showOTP = true
        this.$toast.success('OTP sent to your phone')
      } catch (error) {
        this.$toast.error(error.response?.data?.error || 'Failed to send OTP')
      }
    },
    
    async verifyOTP() {
      try {
        await this.verifyOTP({ phone: this.phone, otp: this.otp })
        this.$toast.success('Login successful')
        this.$router.push('/dashboard')
      } catch (error) {
        this.$toast.error(error.response?.data?.error || 'Invalid OTP')
      }
    },
    
    googleLogin() {
      // Redirect to Google OAuth
      window.location.href = 'http://localhost:5000/api/auth/google'
    }
  }
}
</script>