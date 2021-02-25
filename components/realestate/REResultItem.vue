<template>
  <div>
   result item
  </div>
</template>
<script>
import SingleRE from "~/components/realestate/SingleRE";
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["item"],
  components: { SingleRE },
  data: function () {
    return {
      showItem: false,
    };
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile",
    }),
  },
  methods: {
    openItem: function (item) {
      if (this.isMobile) {
        var element = event.currentTarget;
        var href = element.getAttribute("href");
        this.$router.push(href);
        return;
      }
      this.showItem = !this.showItem;
    },
  },
};
</script>

