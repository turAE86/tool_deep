<template>
  <div>
    <Header />
    <main class="main-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1>Download Our Cybersecurity Application</h1>
            <p class="hero-description">
              Get access to our advanced vulnerability assessment and penetration testing tool.
              Secure your systems with professional-grade cybersecurity solutions.
            </p>
            <div class="hero-features">
              <div class="feature-item">
                <i class="fas fa-shield-alt"></i>
                <span>Advanced Vulnerability Scanning</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-bug"></i>
                <span>Penetration Testing Tools</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-chart-line"></i>
                <span>Real-time Reporting</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-lock"></i>
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="pricing-section">
        <div class="container">
          <h2>Choose Your Plan</h2>
          <div class="pricing-cards">
            <div class="pricing-card featured">
              <div class="card-header">
                <h3>Premium License</h3>
                <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">99</span>
                  <span class="period">/one-time</span>
                </div>
              </div>
              <div class="card-body">
                <ul class="features-list">
                  <li><i class="fas fa-check"></i> Full access to all features</li>
                  <li><i class="fas fa-check"></i> Unlimited scans</li>
                  <li><i class="fas fa-check"></i> Priority support</li>
                  <li><i class="fas fa-check"></i> Regular updates</li>
                  <li><i class="fas fa-check"></i> One-time payment</li>
                </ul>
                <button @click="initiatePayment" class="btn-primary" :disabled="isProcessing">
                  {{ isProcessing ? 'Processing...' : 'Purchase & Download' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Download Section (shown after payment) -->
      <section v-if="paymentCompleted" class="download-section">
        <div class="container">
          <div class="download-card">
            <div class="success-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <h2>Payment Successful!</h2>
            <p>Your download is ready. Click the button below to download the application.</p>
            <button @click="downloadApp" class="btn-download">
              <i class="fas fa-download"></i>
              Download Application
            </button>
            <p class="download-note">
              <small>This download link is valid for 24 hours. Save the file securely.</small>
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  name: 'Download',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isProcessing: false,
      paymentCompleted: false
    }
  },
  methods: {
    async initiatePayment() {
      this.isProcessing = true

      // Simulate payment processing
      try {
        // In a real application, integrate with payment gateway like Stripe
        await this.mockPaymentProcess()

        this.paymentCompleted = true
        this.isProcessing = false
      } catch (error) {
        console.error('Payment failed:', error)
        this.isProcessing = false
        alert('Payment failed. Please try again.')
      }
    },
    mockPaymentProcess() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 2000) // Simulate 2 second processing
      })
    },
    downloadApp() {
      // In a real application, this would trigger a secure download
      // For demo purposes, we'll simulate a download
      const link = document.createElement('a')
      link.href = '/path/to/your/app.zip' // Replace with actual download URL
      link.download = 'redscan-app.zip'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      alert('Download started! In a real application, this would download the actual app file.')
    }
  }
}
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 200px);
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
}

.feature-item i {
  color: #4ade80;
  font-size: 1.5rem;
}

/* Pricing Section */
.pricing-section {
  padding: 80px 0;
  background: #f8fafc;
}

.pricing-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1e293b;
}

.pricing-cards {
  display: flex;
  justify-content: center;
}

.pricing-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 400px;
  width: 100%;
}

.pricing-card.featured {
  border: 3px solid #667eea;
  transform: scale(1.05);
}

.card-header {
  background: #667eea;
  color: white;
  padding: 2rem;
  text-align: center;
}

.card-header h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;
}

.currency {
  font-size: 1.5rem;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
}

.period {
  font-size: 1rem;
  opacity: 0.8;
}

.card-body {
  padding: 2rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: #475569;
}

.features-list i {
  color: #4ade80;
}

.btn-primary {
  width: 100%;
  background: #667eea;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
  background: #5a67d8;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Download Section */
.download-section {
  padding: 80px 0;
  background: #f0f9ff;
}

.download-card {
  background: white;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.success-icon {
  color: #4ade80;
  font-size: 4rem;
  margin-bottom: 1rem;
}

.download-card h2 {
  color: #1e293b;
  margin-bottom: 1rem;
}

.download-card p {
  color: #64748b;
  margin-bottom: 2rem;
}

.btn-download {
  background: #4ade80;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s ease;
}

.btn-download:hover {
  background: #22c55e;
}

.download-note {
  margin-top: 1rem;
  color: #94a3b8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .pricing-section h2 {
    font-size: 2rem;
  }

  .hero-features {
    grid-template-columns: 1fr;
  }
}
</style>
