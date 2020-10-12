<!-- * ========
*
*  BreadCrumbs.vue
*
* ========= *-->
<template>
  <nav id="breadcrumbs" class="dark">
    <b-breadcrumb divider="-" :items="breadcrumbs"></b-breadcrumb>
  </nav>
</template>

<script>
import {mapGetters} from "vuex";
import menu from '@/api/menu';

export default {
  name: 'Breadcrumb',
  data() {
    return {
      title: '',
      // breadcrumbs: store.getters.breadcrumbs,
    }
  },
  mounted() {

  },
  watch: {},
  methods: {},
  created() {
    console.log('created');
  },
  computed: {
    breadcrumbs: function () {
      let breadcrumbs = [];
      menu.forEach(item => {
        if (item.items) {
          let child = item.items.find(i => {
            return i.href === this.$route.path;
          });
          if (child) {
            breadcrumbs.push({text: item.title});
            breadcrumbs.push({text: child.title, disabled: true});
            this.title = child.title;
          }
        } else {
          if (item.href === this.$route.path) {
            this.title = item.title;
            breadcrumbs.push({text: item.title});
          }
        }
      });
      return breadcrumbs;
    }
  }
}


</script>
<style scoped>
#breadcrumbs ol {
  margin: 0;
  padding: 12px 22px;
  line-height: 23px;
}

#breadcrumbs ol li:first-child {
  margin-left: 0;
}

#breadcrumbs ol li {
  display: inline-block;
  list-style: none;
  margin: 0 0 0 7px;
}

#breadcrumbs ol li:first-child:before {
  display: none;
}

#breadcrumbs ol li:first-child {
  margin-left: 0;
}

#breadcrumbs.dark ol li a,
#breadcrumbs.dark ol li a:hover {
  color: rgba(255, 255, 255, 1);
}

#breadcrumbs.dark ol li:before {
  border-left: 4px solid rgba(255, 255, 255, 0.3);
}

#breadcrumbs ol li:before {
  content: "";
  display: inline-block;
  height: 0;
  width: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid #aaa;
  font-size: 14px;
  margin-right: 12px;
}

#breadcrumbs ol li a {
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  color: #666;
  font-weight: 500;
}

#breadcrumbs ol li span {
  display: inline-block;
  color: rgba(255, 255, 255, 1);
  font-size: 14.7px;
  font-weight: 600;
  line-height: inherit;
}

</style>