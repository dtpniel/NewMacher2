import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _d37d26cc = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _54fba0e3 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages_faq" */))
const _7fa0ea76 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _5607894a = () => interopDefault(import('..\\pages\\me.vue' /* webpackChunkName: "pages_me" */))
const _054592a6 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _ec09b202 = () => interopDefault(import('..\\pages\\admin\\socialMedia\\sendMessages.vue' /* webpackChunkName: "pages_admin_socialMedia_sendMessages" */))
const _940d7142 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _e565b842 = () => interopDefault(import('..\\pages\\_mainCategory\\index.vue' /* webpackChunkName: "pages__mainCategory_index" */))
const _cd8f4050 = () => interopDefault(import('..\\pages\\_mainCategory\\_category\\index.vue' /* webpackChunkName: "pages__mainCategory__category_index" */))
const _f1f046e6 = () => interopDefault(import('..\\pages\\_mainCategory\\_category\\item\\_id.vue' /* webpackChunkName: "pages__mainCategory__category_item__id" */))
const _4ae70f80 = () => interopDefault(import('..\\pages\\_mainCategory\\_category\\_id.vue' /* webpackChunkName: "pages__mainCategory__category__id" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _d37d26cc,
      name: "about"
    }, {
      path: "/faq",
      component: _54fba0e3,
      name: "faq"
    }, {
      path: "/login",
      component: _7fa0ea76,
      name: "login"
    }, {
      path: "/me",
      component: _5607894a,
      name: "me"
    }, {
      path: "/register",
      component: _054592a6,
      name: "register"
    }, {
      path: "/admin/socialMedia/sendMessages",
      component: _ec09b202,
      name: "admin-socialMedia-sendMessages"
    }, {
      path: "/",
      component: _940d7142,
      name: "index"
    }, {
      path: "/:mainCategory",
      component: _e565b842,
      name: "mainCategory"
    }, {
      path: "/:mainCategory/:category",
      component: _cd8f4050,
      name: "mainCategory-category"
    }, {
      path: "/:mainCategory/:category/item/:id?",
      component: _f1f046e6,
      name: "mainCategory-category-item-id"
    }, {
      path: "/:mainCategory/:category/:id",
      component: _4ae70f80,
      name: "mainCategory-category-id"
    }],

    fallback: false
  })
}