<template>
  <ul class="sidenav app-sidenav" :class="{'open': open}">

    <li v-for="(link, index) in links" :key="index">
      <router-link
          active-class="active"
          :to='link.url'
          class="waves-effect waves-orange pointer"
      >
        <span>{{link.title}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "vSidebar",
}
</script>

<script setup>
import {ref, defineProps} from "vue";
const props = defineProps(['open'])

let links = ref([
  {title: 'Счет', url: '/'},
  {title: 'История', url: '/history'},
  {title: 'Планирование', url: '/planning'},
  {title: 'Новая запись', url: '/record'},
  {title: 'Категории', url: '/categories'},
]);

</script>

<style scoped>

.active {
  background: #d7d7d7;
}

</style>