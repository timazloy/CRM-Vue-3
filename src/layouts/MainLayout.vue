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
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vMainLayout',
}
</script>

<script setup>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
import { ref, onMounted } from "vue";
import { useStore } from 'vuex'
const store = useStore()

let isOpen = ref(true);

const toggle = () => {
  isOpen.value = !isOpen.value
}

onMounted(async () => {
  if (!Object.keys(store.getters.info).length) {
    await store.dispatch('fetchInfo')
  }
})

</script>