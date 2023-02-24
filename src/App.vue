<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout'

export default {
  name: 'App',
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  mounted() {

  }
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "../index.css";

</style>
