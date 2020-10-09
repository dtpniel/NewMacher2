<!-- * ========
*
*  FunFact.vue
*
* ========= *-->
<template>
  <div class="fun-facts-container">
    <div v-for="(fact, x) in facts" :key="x" class="fun-fact" data-fun-fact-color="#36bd78">
      <div class="fun-fact-text">
        <span>{{ fact.title }}</span>
        <h4>{{ fact.count }}</h4>
      </div>
      <div :class="fact.iconContainer">
        <i :class="fact.iconClass "></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fun-fact',
  props: ['facts']
}
</script>

<style scoped>

.green {
  color: rgb(54, 189, 120);
}

.bgGreen {
  background-color: rgba(54, 189, 120, 0.07);;
}

.purple {
  color: rgb(184, 27, 127)
}

.bgPurple {
  background-color: rgba(184, 27, 127, 0.07)
}

.yellow {
  color: rgb(239, 168, 15)
}

.bgYellow {
  background-color: rgba(239, 168, 15, 0.07)
}
</style>