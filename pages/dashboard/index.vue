<!--
* ========
*  INDEX.JS FILE
* @state
* @getters
* @mutations
* @actions
* =========
/**-->
<template>
  <!-- Fun Facts Container -->
  <fun-fact v-bind:facts="facts"/>
</template>

<script>
import FunFact from '~/components/dashboard/FunFact';
import theme from './../../theme';
import {mapMutations} from 'vuex'


export default {
  layout: 'dashboard',
  components: {
    FunFact,
  },
  data() {
    return {
      facts: [
        {
          title: 'Bookmark Jobs',
          count: 0,
          iconContainer: 'fun-fact-icon bgGreen',
          iconClass: 'icon-material-outline-gavel green',
        },
        {
          title: 'Applied Jobs',
          count: 0,
          iconContainer: 'fun-fact-icon bgPurple',
          iconClass: 'icon-material-outline-business-center purple',
        },
        {
          title: 'Invoices',
          count: 0,
          iconContainer: 'fun-fact-icon bgYellow',
          iconClass: 'icon-material-outline-rate-review yellow',
        },
        {}
      ]
    }
  },
  methods: {},
  computed: {
    jobs() {
    },
    bookmarks() {
    },
    invoices() {
    }
  },

};
</script>
