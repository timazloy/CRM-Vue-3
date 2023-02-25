<template>
  <form class="card auth-card" @submit.prevent="submitForm">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="emailField"
        >
        <label for="email">Email</label>
        <div
            class="form-error"
            v-for="(element, index) of v.emailField.$errors"
            :key="index">
          <div class="form-error__message">{{element.$message}}</div>
        </div>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
            v-model.trim="passwordField"
        >
        <label for="password">Пароль</label>
        <div
            class="form-error"
            v-for="(element, index) of v.passwordField.$errors"
            :key="index">
          <div class="form-error__message">{{element.$message}}</div>
        </div>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'vLogin',
}
</script>

<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, email, required } from '@vuelidate/validators'

import { useRouter } from 'vue-router'
const router = useRouter()

const emailField = ref('')
const passwordField = ref('')


const rules = computed(() => ({
  passwordField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3)),
    required: helpers.withMessage('Введите пароль', required)
  },
  emailField: {
    email: helpers.withMessage('Введите корректный email', email),
    required: helpers.withMessage('Введите email', required)
  },

}))

const v = useVuelidate(rules, { emailField, passwordField})

const submitForm = () => {
  if (v.value.$invalid) {
    v.value.$touch()
    return
  } else {
    router.push('/')
  }
}
</script>

<style lang="scss">
</style>
