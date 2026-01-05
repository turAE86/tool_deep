<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <!-- Company Info -->
        <div>
          <router-link to="/" class="flex items-center space-x-2 mb-6">
            <div class="w-10 h-10 bg-cyber-red rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">R</span>
            </div>
            <span class="text-2xl font-bold">
              <span class="text-cyber-red">RED</span>
              <span class="text-white">SCAN</span>
            </span>
          </router-link>
          <p class="text-gray-400 mb-6">
            We combat cybercrime on the front line. Protecting businesses worldwide since 2015.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Services</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.id">
              <router-link 
                :to="service.path" 
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ service.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Resources</h3>
          <ul class="space-y-3">
            <li v-for="resource in resources" :key="resource.id">
              <router-link 
                :to="resource.path" 
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ resource.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Contact Us</h3>
          <ul class="space-y-4 text-gray-400">
            <li class="flex items-start">
              <i class="fas fa-phone-alt mt-1 mr-3"></i>
              <span>+44 (0)203 972 2500</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-envelope mt-1 mr-3"></i>
              <span>contact@redscan.com</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-map-marker-alt mt-1 mr-3"></i>
              <span>Level 6, The News<br>3 London Bridge Street<br>London, SE1 9SG</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Awards Section -->
      <div class="border-t border-gray-800 pt-8 mb-8">
        <h4 class="text-center text-lg font-semibold mb-6">Awards & Recognition</h4>
        <div class="flex flex-wrap justify-center items-center gap-8">
          <div class="award-card">
            <h5 class="font-semibold text-cyber-red">Computing</h5>
            <p class="text-sm text-gray-400">Security Excellence Awards 2023</p>
          </div>
          <div class="award-card">
            <h5 class="font-semibold text-cyber-red">Cybersecurity</h5>
            <p class="text-sm text-gray-400">Excellence Awards 2024</p>
          </div>
          <div class="award-card">
            <h5 class="font-semibold text-cyber-red">ISO 27001</h5>
            <p class="text-sm text-gray-400">Certified Information Security</p>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 text-sm mb-4 md:mb-0">
            © {{ currentYear }} Redscan Cyber Security Limited. All rights reserved.
          </div>
          
          <div class="flex flex-wrap justify-center gap-6">
            <router-link 
              v-for="link in legalLinks" 
              :key="link.name"
              :to="link.path"
              class="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      services: [
        { id: 1, name: 'Managed Detection & Response', path: '/services/managed-detection-response' },
        { id: 2, name: 'Penetration Testing', path: '/services/penetration-testing' },
        { id: 3, name: 'Incident Response', path: '/services/incident-response' },
        { id: 4, name: 'Security Assessments', path: '/services/security-assessments' }
      ],
      resources: [
        { id: 1, name: 'Blog', path: '/resources/blog' },
        { id: 2, name: 'Case Studies', path: '/resources/case-studies' },
        { id: 3, name: 'Whitepapers', path: '/resources/whitepapers' },
        { id: 4, name: 'Reports', path: '/resources/reports' }
      ],
      legalLinks: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookies Policy', path: '/cookies' },
        { name: 'Legal Notice', path: '/legal' },
        { name: 'Company Policies', path: '/policies' }
      ]
    }
  }
}
</script>

<style scoped>
.social-icon {
  @apply w-10 h-10 bg-gray-800 hover:bg-cyber-red rounded-full flex items-center justify-center transition-colors duration-200;
}

.award-card {
  @apply bg-gray-800/50 rounded-lg p-4 text-center min-w-[200px] border border-gray-700;
}
</style>