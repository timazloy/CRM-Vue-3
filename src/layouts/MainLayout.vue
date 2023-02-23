<template>
  <div class="app-main-layout">

    <Navbar @toggle="toggle" />

    <Sidebar :open="isOpen"/>

    <main class="app-content" :class="{'full': !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";

export default {
  name: 'vMainLayout',
  data: () => ({
    isOpen: true,
  }),
  components: {
    Navbar,
    Sidebar,
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },

}

</script>