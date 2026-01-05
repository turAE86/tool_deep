import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    services: [],
    testimonials: [],
    blogPosts: [],
    caseStudies: [],
    contactSubmissions: [],
    isLoading: false
  },
  
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },

    SET_TOKEN(state, token) {
      state.token = token
      if (token) {
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      } else {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
      }
    },

    LOGOUT(state) {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    },

    SET_SERVICES(state, services) {
      state.services = services
    },
    
    SET_TESTIMONIALS(state, testimonials) {
      state.testimonials = testimonials
    },
    
    SET_BLOG_POSTS(state, posts) {
      state.blogPosts = posts
    },
    
    SET_CASE_STUDIES(state, studies) {
      state.caseStudies = studies
    },
    
    ADD_CONTACT_SUBMISSION(state, submission) {
      state.contactSubmissions.push(submission)
    },
    
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading
    }
  },
  
  actions: {
    async fetchServices({ commit }) {
      try {
        commit('SET_LOADING', true)
        const response = await axios.get('/api/services')
        commit('SET_SERVICES', response.data)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    
    async fetchTestimonials({ commit }) {
      try {
        const response = await axios.get('/api/testimonials')
        commit('SET_TESTIMONIALS', response.data)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    },
    
    async submitContactForm({ commit }, formData) {
      try {
        const response = await axios.post('/api/contact', formData)
        commit('ADD_CONTACT_SUBMISSION', formData)
        return response.data
      } catch (error) {
        throw error.response.data
      }
    },
    
    async submitDemoRequest({ commit }, demoData) {
      try {
        const response = await axios.post('/api/demo-request', demoData)
        return response.data
      } catch (error) {
        throw error.response.data
      }
    }
  },
  
  getters: {
    featuredServices: state => state.services.filter(service => service.featured),
    
    recentBlogPosts: state => 
      state.blogPosts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3),
    
    industriesCovered: state => 
      [...new Set(state.caseStudies.map(study => study.industry))]
  }
})