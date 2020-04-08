<template>
  <div id="app">
    <dashboard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Dashboard from './components/Dashboard/Dashboard.vue';

@Component({
  components: {
    Dashboard,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

/* recommended css code for vue-svgicon */
.svg-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    color: inherit;
    vertical-align: middle;
    fill: none;
    stroke: currentColor;
}
 
.svg-fill {
    fill: currentColor;
    stroke: none;
}
 
.svg-up {
    /* default */
    transform: rotate(0deg);
}
 
.svg-right {
    transform: rotate(90deg);
}
 
.svg-down {
    transform: rotate(180deg);
}
 
.svg-left {
    transform: rotate(-90deg);
}
}
</style>
