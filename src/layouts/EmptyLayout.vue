<template>
  <div class="grey darken-1 empty-layout">
    <router-view/>
  </div>
</template>

<script>
import messages from "@/utils/messages";
import {toast, toastError} from "@/utils/message.plugin";

export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError) {
      toastError(messages[fbError.code] || 'Что-то пошло не так')
    }
  }
}
</script>
