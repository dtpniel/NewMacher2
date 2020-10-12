<!-- * ========
*
*  Single.vue
*
* ========= *-->
<template>
  <!-- Job Listing -->
  <div>

    <div class="job-listing">
      <!-- Job Listing Details -->
      <div class="job-listing-details">
        <!-- Details -->
        <div class="job-listing-description">
          <h3 class="job-listing-title">
            <nuxt-link :to="job.link"> {{ job.da_title }}</nuxt-link>
            <span class="dashboard-status-button green d-inline-block">{{ job.status }}</span></h3>
          <!-- Job Listing Footer -->
          <div class="job-listing-footer">
            <ul>
              <li><i class="icon-material-outline-date-range"></i> Posted on {{ job.da_date }}</li>
              <li><i class="icon-material-outline-date-range"></i> Expiring on 10 August, 2019</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Buttons -->
    <div class="buttons-to-right always-visible">
      <a href="/" class="button ripple-effect"><i
          class="icon-material-outline-supervisor-account"></i> Manage Candidates <span
          class="button-info d-inline-block">0</span></a>
      <a href="#" class="button gray ripple-effect ico" data-tippy-placement="top" data-tippy=""
         data-original-title="Edit"><i class="icon-feather-edit"></i></a>
      <a href="#" class="button gray ripple-effect ico" data-tippy-placement="top" data-tippy=""
         data-original-title="Remove"><i class="icon-feather-trash-2"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'single-job',
  props: ['job'],
}
</script>

<style scoped>

</style>