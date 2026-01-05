<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="hero-gradient text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Redscan</h1>
        <p class="text-xl text-gray-300 max-w-3xl">
          Leading the fight against cybercrime with expertise, innovation, and dedication.
        </p>
      </div>
    </section>

    <!-- Who We Are -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Who We Are</h2>
            <p class="text-gray-400 mb-6">
              Redscan is a premier cybersecurity firm specializing in Managed Detection and Response, Penetration Testing, and Incident Response services. We combat cybercrime on the front line, protecting businesses worldwide.
            </p>
            <p class="text-gray-400">
              Our team of certified experts brings together decades of experience in cybersecurity, threat intelligence, and digital forensics to deliver unparalleled protection for our clients.
            </p>
          </div>
          <div class="relative">
            <img src="@/assets/images/about-hero.jpg" alt="About Redscan" class="rounded-xl shadow-2xl">
            <div class="absolute -bottom-6 -right-6 bg-cyber-red text-white p-6 rounded-xl">
              <div class="text-3xl font-bold">10+</div>
              <div class="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Values & Principles</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.id" class="value-card">
            <i :class="value.icon" class="text-3xl text-cyber-red mb-4"></i>
            <h3 class="text-xl font-semibold mb-3">{{ value.title }}</h3>
            <p class="text-gray-400">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Meet Our Experts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMemberCard
            v-for="member in team"
            :key="member.id"
            :member="member"
          />
        </div>
      </div>
    </section>

    <!-- History -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our History & Milestones</h2>
        <div class="timeline">
          <div v-for="milestone in milestones" :key="milestone.year" class="milestone">
            <div class="year">{{ milestone.year }}</div>
            <div class="content">
              <h3 class="text-xl font-semibold">{{ milestone.title }}</h3>
              <p class="text-gray-400">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Commitment -->
    <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Commitment to Excellence</h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          We are dedicated to delivering the highest quality cybersecurity services and continuously improving our capabilities to stay ahead of evolving threats.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="stats-item">
            <div class="text-4xl font-bold text-cyber-red mb-2">2000+</div>
            <div class="text-gray-400">Incidents Handled</div>
          </div>
          <div class="stats-item">
            <div class="text-4xl font-bold text-cyber-red mb-2">99%</div>
            <div class="text-gray-400">Customer Satisfaction</div>
          </div>
          <div class="stats-item">
            <div class="text-4xl font-bold text-cyber-red mb-2">500+</div>
            <div class="text-gray-400">Businesses Protected</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TeamMemberCard from '@/components/about/TeamMemberCard.vue'

export default {
  name: 'About',
  components: {
    TeamMemberCard
  },
  data() {
    return {
      values: [
        {
          id: 1,
          title: 'Excellence',
          description: 'We strive for excellence in everything we do, delivering superior cybersecurity services.',
          icon: 'fas fa-medal'
        },
        {
          id: 2,
          title: 'Integrity',
          description: 'We operate with honesty and transparency, building trust with our clients.',
          icon: 'fas fa-handshake'
        },
        {
          id: 3,
          title: 'Innovation',
          description: 'We continuously innovate to stay ahead of evolving cyber threats.',
          icon: 'fas fa-lightbulb'
        }
      ],
      team: [
        {
          id: 1,
          name: 'Sarah Johnson',
          role: 'CEO & Founder',
          bio: '20+ years in cybersecurity, former CISO at global bank.',
          image: 'team/ceo.jpg'
        },
        {
          id: 2,
          name: 'Michael Chen',
          role: 'CTO',
          bio: 'Expert in threat intelligence and security architecture.',
          image: 'team/cto.jpg'
        },
        {
          id: 3,
          name: 'David Miller',
          role: 'Head of Security Operations',
          bio: '15+ years in SOC management and incident response.',
          image: 'team/security-lead.jpg'
        },
        {
          id: 4,
          name: 'Emily Rodriguez',
          role: 'Lead Penetration Tester',
          bio: 'Certified ethical hacker with extensive red team experience.',
          image: 'team/pen-tester.jpg'
        }
      ],
      milestones: [
        {
          year: '2015',
          title: 'Company Founded',
          description: 'Redscan was established with a mission to combat cybercrime.'
        },
        {
          year: '2018',
          title: 'MDR Service Launch',
          description: 'Introduced our Managed Detection and Response service.'
        },
        {
          year: '2020',
          title: 'International Expansion',
          description: 'Opened offices in Europe and North America.'
        },
        {
          year: '2023',
          title: 'Award Recognition',
          description: 'Won Computing Security Excellence Awards.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.value-card {
  @apply bg-gray-800/50 p-8 rounded-xl text-center;
}

.stats-item {
  @apply p-8 bg-gray-800/30 rounded-xl;
}

.timeline {
  @apply max-w-3xl mx-auto relative;
}

.timeline::before {
  content: '';
  @apply absolute left-8 top-0 bottom-0 w-1 bg-cyber-red;
}

.milestone {
  @apply relative pl-16 mb-12;
}

.year {
  @apply absolute left-0 w-16 h-16 bg-cyber-red text-white rounded-full flex items-center justify-center font-bold;
}

.content {
  @apply bg-gray-800 p-6 rounded-xl;
}
</style>