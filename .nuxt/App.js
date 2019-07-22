import Vue from 'vue'
import NuxtLoading from '~/components/Loading.vue'

import _448fd88e from '..\\layouts\\default.1.vue'
import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default.1": _448fd88e,"_default": _6f6c098b }

export default {
  head: {"title":"Jewish Jobs on Macher: The Largest Jewish Classifieds Website in the US","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"The largest jewish jobs website in NYC, Brooklyn, Boro Park, Five Towns, Crown Heights, Woodmere, Monsey, Lakewood and more."}],"link":[{"rel":"stylesheet","href":"\u002Fcss\u002Fstyle.css"},{"rel":"stylesheet","href":"\u002Fcss\u002Fcolors\u002Fblue.css"},{"rel":"stylesheet","href":"\u002Fcss\u002Fmodal.css"},{"rel":"stylesheet","href":"\u002Fcss\u002Fbootstrap-fs-modal.css"}],"script":[{"src":"\u002Fjs\u002Fjquery-3.3.1.min.js"},{"src":"\u002Fjs\u002Fjquery-migrate-3.0.0.min.js"},{"src":"\u002Fjs\u002Fmmenu.min.js"},{"src":"\u002Fjs\u002Ftippy.all.min.js"},{"src":"\u002Fjs\u002Fsimplebar.min.js"},{"src":"\u002Fjs\u002Fbootstrap-slider.min.js"},{"src":"\u002Fjs\u002Fsnackbar.js"},{"src":"\u002Fjs\u002Fclipboard.min.js"},{"src":"\u002Fjs\u002Fcounterup.min.js"},{"src":"\u002Fjs\u002Fmagnific-popup.min.js"},{"src":"\u002Fjs\u002Fslick.min.js"},{"src":"\u002Fjs\u002Fcustom.1.js"},{"src":"\u002Fjs\u002Fpopper.min.js"},{"src":"\u002Fjs\u002Futil.js"},{"src":"\u002Fjs\u002Fmodal.js"}],"style":[]},

  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
