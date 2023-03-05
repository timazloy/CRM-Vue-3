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
      let error = null
      if (fbError.code.includes('auth/user-not-found'))
        error = 'auth/user-not-found'
      else if (fbError.code.includes('auth/wrong-password'))
        error = 'auth/wrong-password'

      toastError(messages[error] || 'Что-то пошло не так')
    }
  }
}
</script>