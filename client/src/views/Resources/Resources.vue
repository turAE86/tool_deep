<template>
  <div class="resources-page">
    <!-- Hero -->
    <section class="hero-gradient text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Resources</h1>
        <p class="text-xl text-gray-300 max-w-3xl">
          Expert insights, research, and guidance to help you strengthen your security posture.
        </p>
      </div>
    </section>

    <!-- Resource Categories -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <router-link
            v-for="category in categories"
            :key="category.id"
            :to="category.link"
            class="resource-category"
          >
            <i :class="category.icon" class="text-3xl mb-4"></i>
            <h3 class="text-xl font-semibold mb-2">{{ category.title }}</h3>
            <p class="text-gray-400">{{ category.description }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Latest Articles -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold">Latest Articles</h2>
          <router-link to="/resources/blog" class="text-cyber-red hover:text-red-600 font-semibold">
            View All Articles →
          </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold">Featured Case Studies</h2>
          <router-link to="/resources/case-studies" class="text-cyber-red hover:text-red-600 font-semibold">
            View All Case Studies →
          </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudyCard
            v-for="study in caseStudies"
            :key="study.id"
            :study="study"
          />
        </div>
      </div>
    </section>

    <!-- Reports -->
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Annual Reports & Insights</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="report in reports" :key="report.id" class="report-card">
            <div class="report-header">
              <h3 class="text-xl font-semibold">{{ report.title }}</h3>
              <span class="report-date">{{ report.date }}</span>
            </div>
            <p class="text-gray-400 mb-6">{{ report.description }}</p>
            <div class="report-details">
              <div class="detail">
                <span class="label">Pages:</span>
                <span class="value">{{ report.pages }}</span>
              </div>
              <div class="detail">
                <span class="label">Format:</span>
                <span class="value">{{ report.format }}</span>
              </div>
            </div>
            <button class="btn-secondary w-full mt-6">
              <i class="fas fa-download mr-2"></i>
              Download Report
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Expert Opinions -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Expert Opinions</h2>
        <div class="max-w-3xl mx-auto">
          <div v-for="opinion in expertOpinions" :key="opinion.id" class="expert-opinion mb-8">
            <div class="flex items-start mb-4">
              <img :src="opinion.image" :alt="opinion.author" class="w-16 h-16 rounded-full mr-4">
              <div>
                <h4 class="text-lg font-semibold">{{ opinion.author }}</h4>
                <p class="text-gray-400">{{ opinion.role }}</p>
              </div>
            </div>
            <blockquote class="text-xl text-gray-300 italic border-l-4 border-cyber-red pl-4 py-2">
              "{{ opinion.quote }}"
            </blockquote>
            <div class="mt-4 text-gray-400">
              {{ opinion.topic }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BlogCard from '@/components/resources/BlogCard.vue'
import CaseStudyCard from '@/components/resources/CaseStudyCard.vue'

export default {
  name: 'Resources',
  components: {
    BlogCard,
    CaseStudyCard
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          title: 'Blog',
          description: 'Latest cybersecurity insights and analysis',
          icon: 'fas fa-newspaper text-blue-500',
          link: '/resources/blog'
        },
        {
          id: 2,
          title: 'Case Studies',
          description: 'Real-world security challenges and solutions',
          icon: 'fas fa-chart-line text-green-500',
          link: '/resources/case-studies'
        },
        {
          id: 3,
          title: 'Whitepapers',
          description: 'In-depth research and technical guides',
          icon: 'fas fa-file-alt text-yellow-500',
          link: '/resources/whitepapers'
        },
        {
          id: 4,
          title: 'Reports',
          description: 'Annual reports and industry analysis',
          icon: 'fas fa-chart-bar text-purple-500',
          link: '/resources/reports'
        }
      ],
      articles: [
        {
          id: 1,
          title: 'Threat-led Pen Testing and DORA Compliance',
          excerpt: 'Understanding how threat-led penetration testing supports DORA compliance requirements.',
          date: '19th December 2024',
          category: 'Compliance',
          readTime: '5 min read'
        },
        {
          id: 2,
          title: 'The Changing Face of Incident Response',
          excerpt: 'How incident response strategies are evolving in the face of new threats.',
          date: '28th October 2024',
          category: 'Incident Response',
          readTime: '8 min read'
        },
        {
          id: 3,
          title: 'Zero Trust Architecture Implementation',
          excerpt: 'Best practices for implementing Zero Trust in enterprise environments.',
          date: '15th November 2024',
          category: 'Architecture',
          readTime: '7 min read'
        }
      ],
      caseStudies: [
        {
          id: 1,
          title: 'Financial Services Provider',
          challenge: 'Protecting sensitive customer data from advanced persistent threats.',
          solution: 'Implemented 24/7 MDR with custom threat detection rules.',
          results: 'Reduced incident response time by 80%',
          industry: 'Finance'
        },
        {
          id: 2,
          title: 'Healthcare Organization',
          challenge: 'Securing patient records and medical IoT devices.',
          solution: 'Comprehensive security assessment and managed services.',
          results: 'Achieved HIPAA compliance with zero breaches',
          industry: 'Healthcare'
        }
      ],
      reports: [
        {
          id: 1,
          title: 'Annual Threat Report 2024',
          description: 'Comprehensive analysis of emerging cyber threats and trends.',
          date: 'January 2024',
          pages: 85,
          format: 'PDF'
        },
        {
          id: 2,
          title: 'State of Cybersecurity',
          description: 'Industry-wide survey on security practices and challenges.',
          date: 'March 2024',
          pages: 42,
          format: 'PDF'
        },
        {
          id: 3,
          title: 'Compliance Framework Guide',
          description: 'Guide to major cybersecurity compliance frameworks.',
          date: 'June 2024',
          pages: 65,
          format: 'PDF'
        }
      ],
      expertOpinions: [
        {
          id: 1,
          author: 'Sarah Johnson',
          role: 'CEO & Cybersecurity Expert',
          quote: 'The future of cybersecurity lies in proactive threat hunting rather than reactive defense.',
          topic: 'Future of Threat Intelligence',
          image: 'team/ceo.jpg'
        },
        {
          id: 2,
          author: 'Michael Chen',
          role: 'CTO',
          quote: 'AI and machine learning are transforming how we detect and respond to threats in real-time.',
          topic: 'AI in Cybersecurity',
          image: 'team/cto.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.resource-category {
  @apply bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyber-red transition-colors duration-300 text-center;
}

.report-card {
  @apply bg-gray-800 p-6 rounded-xl;
}

.report-header {
  @apply flex justify-between items-start mb-4;
}

.report-date {
  @apply text-sm text-gray-400;
}

.report-details {
  @apply flex justify-between text-sm text-gray-400;
}

.detail {
  @apply flex items-center;
}

.label {
  @apply mr-2;
}

.value {
  @apply font-semibold;
}

.expert-opinion {
  @apply bg-gray-800/50 p-6 rounded-xl;
}
</style>