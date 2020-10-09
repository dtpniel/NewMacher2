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
          <ul class="dashboard-box-list">
            <SingleJob/>
            <single-job v-bind:jobs="jobs"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleJob from "~/components/dashboard/Jobs/Single.vue";

export default {
  layout: 'dashboard',
  components: {
    SingleJob
  },
  data() {
    return {
      jobs:[],
      title: 'Howdy, safsfd'
    }
  },
  methods: {},
  computed: {},

};
</script>
