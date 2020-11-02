<!-- * ========
*
*  Dashboard.vue
*
* ========= *-->

<template>
  <!-- Wrapper -->
  <section id="wrapper">
    <!-- Header Container
  ================================================== -->
    <header id="header-container" class="fullwidth dashboard-header not-sticky" style="position: fixed;">
      <Header/>
    </header><!-- Header Container End -->
    <div class="clearfix"></div>

    <!-- Dashboard Container -->
    <section class="dashboard-container">
      <!-- Dashboard Sidebar-->
      <section class="dashboard-sidebar" style="height: 100%">
        <Sidebar/>
      </section><!-- Dashboard Sidebar End -->

      <!-- Dashboard Content  -->
      <section class="dashboard-content-container">
        <div class="simplebar-scroll-content">
          <div class="simplebar-content" style="height: 100%">
            <div class="dashboard-content-inner" style="min-height: 278px;">
              <!-- Dashboard Headline -->
              <div class="dashboard-headline">
                <PageHeader v-bind:title="this.title"/>
                <BreadCrumbs/>
              </div>
              <nuxt/>
              <b-row>
<!--                <Footer/>-->
              </b-row>
            </div>
          </div>
        </div>
      </section> <!-- Dashboard Content End  -->
    </section><!-- Dashboard Container End -->
  </section> <!-- Wrapper End-->
</template>


<script>

import {Dashboard, Header, Footer, Sidebar, PageHeader, BreadCrumbs} from '~/components/dashboard';

export default {
  middleware: 'authenticated',
  components: {
    Header,
    Sidebar,
    Footer,
    PageHeader,
    BreadCrumbs,
    Dashboard
  },
  data() {
    return {
      title: 'Howdy, Nitish'
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
  },
  beforeDestroy() {
  }
}

</script>

