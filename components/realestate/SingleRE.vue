<template>
  <div>
    single real estate ad 
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "SingleRE",
  props: {
    itemResult: {
      default: function() {
        return {};
      }
    }
  },
  // computed: {
  //   ...mapGetters({
  //     item: "jobs/singleJob"
  //   })
  // },
  created() {
    if (this.itemResult) {
      Object.assign(this.item, this.itemResult);
    }
  }
};
</script>
