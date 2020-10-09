<!-- * ========
*
*  Header.vue
*
* ========= *-->
<template>
  <!-- Dashboard Headline -->
  <div class="dashboard-headline">
    <h3>{{ title }}</h3>
    <span>{{ subtitle || ' We are glad to see you again' }}</span>
  </div>
  <!-- Dashboard Headline -->
</template>

<script>


export default {
  name: 'PageHeader',
  props: ['title', 'subtitle'],
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>
