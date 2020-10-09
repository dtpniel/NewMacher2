<!-- * ========
*
*  BreadCrumbs.vue
*
* ========= *-->
<template>
  <nav id="breadcrumbs" class="dark">
    <ul>
      <li
          v-for="(breadcrumb, idx) in breadcrumbList"
          :key="idx"
          @click="routeTo(idx)"
          :class="{'linked': !!breadcrumb.link}">
        {{ breadcrumb.name }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: []
    }
  },
  mounted() {
    console.log(this.$route);
    this.updateList()
  },
  watch: {
    '$route'() {
      this.updateList()
    }
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  },
  created() {
    console.log('created');
  },
}
</script>
<style scoped>

</style>