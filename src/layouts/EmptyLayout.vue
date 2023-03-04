<template>
  <div class="grey darken-1 empty-layout">
    <router-view/>
  </div>
</template>

<script>
import messages from "@/utils/messages";
import {toast} from "@/utils/message.plugin";

export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError) {
      if (fbError.code.includes('auth/user-not-found'))
        toast('Пользователя с таким email не существует')
      else
        toast('Что-то пошло не так')
    }
  }
}
</script>