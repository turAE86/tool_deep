<template>
  <div class="contact-page">
    <!-- Hero -->
    <section class="hero-gradient text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p class="text-xl text-gray-300 max-w-3xl">
          Get in touch with our cybersecurity experts. We're here to help protect your business.
        </p>
      </div>
    </section>

    <!-- Contact Sections -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2 class="text-2xl font-bold mb-6">Get in Touch</h2>
            <div class="space-y-6">
              <div class="contact-item">
                <i class="fas fa-phone-alt text-cyber-red text-xl mr-4"></i>
                <div>
                  <h3 class="font-semibold">Phone</h3>
                  <p class="text-gray-400">+44 (0)203 972 2500</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope text-cyber-red text-xl mr-4"></i>
                <div>
                  <h3 class="font-semibold">Email</h3>
                  <p class="text-gray-400">contact@redscan.com</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt text-cyber-red text-xl mr-4"></i>
                <div>
                  <h3 class="font-semibold">London Office</h3>
                  <p class="text-gray-400">Level 6, The News<br>3 London Bridge Street<br>London, SE1 9SG</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        <!-- Support Channels -->
        <SupportChannels />
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '@/components/contact/ContactForm.vue'
import SupportChannels from '@/components/contact/SupportChannels.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm,
    SupportChannels
  }
}
</script>

<style scoped>
.contact-info {
  @apply bg-gray-800/50 p-8 rounded-xl;
}

.contact-item {
  @apply flex items-start;
}

.hero-gradient {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%);
}
</style>