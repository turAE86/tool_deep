import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/Services/Services.vue'),
    children: [
      {
        path: 'managed-detection-response',
        name: 'MDR',
        component: () => import('@/views/Services/MDR.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('@/views/Resources.vue'),
    children: [
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/Resources/Blog.vue')
      },
      {
        path: 'case-studies',
        name: 'CaseStudies',
        component: () => import('@/views/Resources/CaseStudies.vue')
      },
      {
        path: 'whitepapers',
        name: 'Whitepapers',
        component: () => import('@/views/Resources/Whitepapers.vue')
      },
      {
        path: 'reports',
        name: 'Reports',
        component: () => import('@/views/Resources/Reports.vue')
      }
    ]
  },
  {
    path: '/careers',
    name: 'Careers',
    component: () => import('@/views/Careers.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/schedule-demo',
    name: 'ScheduleDemo',
    component: () => import('@/views/Demo.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/Privacy.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/views/Terms.vue')
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: () => import('@/views/Cookies.vue')
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('@/views/Download.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/auth/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    }
    return { x: 0, y: 0 }
  }
})

// Auth guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || to.query.token;
  if (token && to.query.token) {
    localStorage.setItem('token', token);
    next({ path: to.path, query: {} }); // Remove token from URL
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next('/login');
    }
  } else {
    next();
  }
});

export default router
