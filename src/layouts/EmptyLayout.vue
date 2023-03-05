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
      const regForError = /(?<=\()[^)]+(?=\))/g
      // const error = String(fbError).match(regForError) === null ? 'other' : String(fbError).match(regForError)[0]

      const error = String(fbError).match(regForError)[0]
      // toastError(messages[error])
      toastError(messages[error] || 'Что-то пошло не так')
    }
  }
}
</script>