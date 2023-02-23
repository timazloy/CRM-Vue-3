<template>
  <div id="app111">
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
      console.log(this.$route.meta)
      return 'empty-layout'
    }
  },
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "../index.css";

</style>
