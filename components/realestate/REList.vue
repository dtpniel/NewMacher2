<template>

    <div class="full-page-container with-map">
      
        <REFilter></REFilter>
     
 
        <REResults></REResults>
     
      <div class="col-xl-4 col-lg-3 content-left-offset">
        <REMap></REMap>
      </div>
    </div>
</template>
<script>
import axios from "axios";
import REResults from "./REResults";
import REFilter from "./REFilter";
import REFilterMobile from "./REFilterMobile";
import REMap from "./REMap.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "REList",
  components: {
    REFilter,
    REFilterMobile,
    REResults,
    REMap,
  },

  // data: function () {
  //   return {
  //     title: "Jobs",
  //     sortByList: [
  //       { value: "type", direction: "desc", name: "Relevance", id: 1 },
  //       { value: "date", direction: "desc", name: "Newest", id: 2 },
  //       { value: "date", direction: "asc", name: "Oldest", id: 3 },
  //     ],
  //     initialFilter: {},
  //   };
  // },
  // computed: {
  //   ...mapGetters({
  //     sum: "jobs/sum",
  //     isMobile: "isMobile",
  //     currentPage: "jobs/currentPage",
  //     metaTags: "jobs/metaTags",
  //   }),
  //   currentPage: {
  //     get() {
  //       return this.$store.getters["jobs/currentPage"];
  //     },
  //     set(value) {
  //       this.$store.commit("jobs/setcurrentPage", value);
  //     },
  //   },
  // },

  methods: {
    sort: function ($event) {
      var id = $event.target.value;
      var sortBy = this.sortByList.find((x) => x.id == id);
      this.$store.commit("jobs/setFilter", { sortBy });
    },
    serach: function () {
      $nuxt.$root.$loading.start();
      this.$store.dispatch("jobs/getJobsMobile").then(() => {
        $nuxt.$root.$loading.finish();
      });
    },
    errorCaptured: function (error) {
      console.log(error);
    },
    scroll: function () {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.offsetHeight * 0.9;
        if (bottomOfWindow) {
          this.currentPage++;
        }
      };
    },

    // discard: function() {
    //   this.$store.commit("jobs/setFilter", this.initialFilter);
    // },
    // saveInitialFilter: function() {
    //   //store intialfilter to perform discard on mobile filter
    //   var initialFilter = this.$store.state.jobs.filter;
    //   Object.assign(this.initialFilter, initialFilter);
    // }
  },
  // head() {
  //   return {
  //     script: [
  //       {
  //         //src: "https://apis.google.com/js/platform.js"
  //         src:
  //           "https://maps.googleapis.com/maps/api/js?key=AIzaSyBrTrorHTE-6cPNubZrc0OWVfmf9-4osaw&libraries=places&language=en",
  //       },
  //     ],
  //   };
  // },
  mounted() {
    if (process.browser) {
      // initialCustom();
      this.scroll();
    }
  },
};
</script>
