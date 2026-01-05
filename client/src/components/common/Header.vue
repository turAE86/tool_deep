<template>
  <header class="header">
    <nav class="container">
      <div class="nav-content">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <div class="logo-icon">
            <span class="logo-text">R</span>
          </div>
          <span class="logo-brand">
            <span class="logo-red">RED</span>
            <span class="logo-white">SCAN</span>
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="desktop-nav">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="nav-link"
            active-class="nav-link-active"
          >
            {{ item.name }}
          </router-link>

          <!-- Auth Buttons -->
          <div v-if="!isLoggedIn" class="auth-buttons">
            <router-link to="/login" class="nav-link">Login</router-link>
            <button
              @click="openDemoModal"
              class="btn btn-primary"
            >
              Schedule Demo
            </button>
          </div>
          <div v-else class="auth-buttons">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            <button
              @click="logout"
              class="btn btn-secondary logout-btn"
            >
              Logout
            </button>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="mobile-menu-btn"
        >
          <svg class="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="mobile-menu"
      >
        <div class="mobile-nav">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="nav-link-mobile"
            active-class="nav-link-active"
          >
            {{ item.name }}
          </router-link>

          <button
            @click="openDemoModal"
            class="btn btn-primary mobile-btn"
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false,
      navigation: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Resources', path: '/resources' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logout']),
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    openDemoModal() {
      this.$emit('open-demo')
    }
  }
}
</script>

<style scoped>
.header {
  background-color: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid var(--gray-800);
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.logo-icon {
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--cyber-red);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
}

.logo-brand {
  font-size: 1.5rem;
  font-weight: 800;
}

.logo-red {
  color: var(--cyber-red);
}

.logo-white {
  color: white;
}

.desktop-nav {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
}

.nav-link {
  color: var(--gray-300);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: white;
}

.nav-link-active {
  color: var(--cyber-red);
  font-weight: 600;
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logout-btn {
  background-color: var(--gray-600);
}

.logout-btn:hover {
  background-color: var(--gray-700);
}

.mobile-menu-btn {
  display: block;
  color: var(--gray-300);
}

.mobile-menu-btn:hover {
  color: white;
}

.menu-icon {
  width: 1.5rem;
  height: 1.5rem;
}

@media (min-width: 1024px) {
  .mobile-menu-btn {
    display: none;
  }
}

.mobile-menu {
  border-top: 1px solid var(--gray-800);
  margin-top: 1rem;
  padding-bottom: 1rem;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.nav-link-mobile {
  color: var(--gray-300);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.nav-link-mobile:hover {
  color: white;
}

.mobile-btn {
  width: 100%;
}

@media (min-width: 1024px) {
  .mobile-menu {
    display: none;
  }
}
</style>
