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

  <div class="row">
    <!-- Dashboard Box -->
    <div class="col-xl-12">
      <div class="dashboard-box margin-top-0">
        <!-- Headline -->
        <div class="headline">
          <h3><i class="icon-material-outline-business-center"></i> My Job Listings</h3>
        </div>
        <div class="content">
          <transition-group class="dashboard-box-list" name="list-enter-up" tag="ul" appear>
            <li v-for="(job, index) in ads" :key="String(job.id)">
              <single-job v-bind:job="job"/>
            </li>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleJob from "~/pages/dashboard/jobs/Single";
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
import moduleJob from '@/store/jobs/moduleJob.js';

export default {
  layout: 'dashboard',
  components: {
    SingleJob
  },
  data() {
    return {
      title: 'Howdy, safsfd',
      ads: [{
        da_title: 'Portfolio Manager - ETFs/Mutual Funds/Structured Products',
        link: '#',
        da_description: 'Deserunt nostrud Lorem commodo aliquip proident irure veniam et incididunt excepteur id exercitation laborum. Officia nostrud incididunt sint eiusmod do nostrud mollit do aute sit mollit minim nostrud duis. Excepteur dolor magna pariatur enim et amet sit commodo irure ullamco esse. Commodo Lorem irure ad eiusmod enim non ullamco officia sint. Aute minim proident consequat elit ea. Aliqua adipisicing nisi labore consectetur Lorem proident laboris consequat ullamco irure occaecat et irure.',
        da_date: '2020-12-10',
        da_dc_id: 1,
        da_part_time: false,
        status: 'pending'
      },
        {
          da_title: 'Portfolio Manager - ETFs/Mutual Funds/Structured Products',
          link: '#',
          da_description: 'Deserunt nostrud Lorem commodo aliquip proident irure veniam et incididunt excepteur id exercitation laborum. Officia nostrud incididunt sint eiusmod do nostrud mollit do aute sit mollit minim nostrud duis. Excepteur dolor magna pariatur enim et amet sit commodo irure ullamco esse. Commodo Lorem irure ad eiusmod enim non ullamco officia sint. Aute minim proident consequat elit ea. Aliqua adipisicing nisi labore consectetur Lorem proident laboris consequat ullamco irure occaecat et irure.',
          da_date: '2020-12-10',
          da_dc_id: 1,
          da_part_time: false,
          status: 'pending'
        },
        {
          da_title: 'Portfolio Manager - ETFs/Mutual Funds/Structured Products',
          link: '#',
          da_description: 'Deserunt nostrud Lorem commodo aliquip proident irure veniam et incididunt excepteur id exercitation laborum. Officia nostrud incididunt sint eiusmod do nostrud mollit do aute sit mollit minim nostrud duis. Excepteur dolor magna pariatur enim et amet sit commodo irure ullamco esse. Commodo Lorem irure ad eiusmod enim non ullamco officia sint. Aute minim proident consequat elit ea. Aliqua adipisicing nisi labore consectetur Lorem proident laboris consequat ullamco irure occaecat et irure.',
          da_date: '2020-12-10',
          da_dc_id: 1,
          da_part_time: false,
          status: 'pending'
        }]
    }
  },
  methods: {},
  computed: {
    jobs() {
      return this.$store.getters["jobs/queriedJobs"]
    },
  },
  created() {
    this.$store.registerModule('jobs', moduleJob)
    let filter = this.$route.params.filter
    // Fetch jobs
    this.$store.dispatch("jobs/fetchJobs", {filter: filter})
  },
  beforeUpdate() {
    this.currFilter = this.$route.params.filter
  },
  beforeDestroy: function () {
    this.$store.unregisterModule('jobs')
  },
  mounted() {
    // this.$store.dispatch("todo/setTodoSearchQuery", "")
  }
};
</script>
