<template>
  <div>
    <div class="grey darken-1 empty-layout">


      <form class="card auth-card" @submit.prevent="submitForm">
        <div class="card-content">
          <span class="card-title">Домашняя бухгалтерия</span>
          <div class="input-field">
            <input
                id="email"
                type="text"
                v-model.trim="emailField"
                :class="v.emailField.$errors.length && 'invalid'"
            >
            <label for="email">Email</label>
            <div
                class="form-error"
                v-for="(element, index) of v.emailField.$errors"
                :key="index">
              <div class="helper-text invalid">{{element.$message}}</div>
            </div>
          </div>
          <div class="input-field">
            <input
                id="password"
                type="password"
                class="validate"
                v-model.trim="passwordField"
                :class="v.passwordField.$errors.length && 'invalid'"
            >
            <label for="password">Пароль</label>
            <div
                class="form-error"
                v-for="(element, index) of v.passwordField.$errors"
                :key="index">
              <div class="helper-text invalid">{{element.$message}}</div>
            </div>
          </div>
          <div class="input-field">
            <input
                id="passwordRepeat"
                type="password"
                class="validate"
                v-model.trim="confirmPasswordField"
                :class="v.confirmPasswordField.$errors.length && 'invalid'"
            >
            <label for="passwordRepeat">Повторите пароль</label>
            <div
                class="form-error"
                v-for="(element, index) of v.confirmPasswordField.$errors"
                :key="index">
              <div class="helper-text invalid">{{element.$message}}</div>
            </div>
          </div>
          <div class="input-field">
            <input
                id="name"
                type="text"
                class="validate"
                v-model.trim="nameField"
                :class="v.nameField.$errors.length && 'invalid'"
            >
            <label for="name">Имя</label>
            <div
                class="form-error"
                v-for="(element, index) of v.nameField.$errors"
                :key="index">
              <div class="helper-text invalid">{{element.$message}}</div>
            </div>
          </div>
          <p>
            <label>
              <input type="checkbox" @click="!checkbox" v-model="checkbox"/>
              <span>С правилами согласен</span>
            </label>
          </p>
        </div>
        <div class="card-action">
          <div>
            <button
                class="btn waves-effect waves-light auth-submit"
                type="submit"
                :disabled="!checkbox"
            >
              Зарегистрироваться
              <i class="material-icons right">send</i>
            </button>
          </div>

          <p class="center">
            Уже есть аккаунт?
            <router-link to="/login">Войти!</router-link>
          </p>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'vRegister'
}
</script>


<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, email, required, sameAs } from '@vuelidate/validators'

import { useRouter } from 'vue-router'
import { useStore } from "vuex";
const router = useRouter()
const store = useStore()

const emailField = ref('')
const passwordField = ref('')
const nameField = ref('')
const confirmPasswordField = ref('')
const checkbox = ref(false)


const rules = computed(() => ({
  passwordField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3)),
    required: helpers.withMessage('Введите пароль', required)
  },
  emailField: {
    email: helpers.withMessage('Введите корректный email', email),
    required: helpers.withMessage('Введите email', required)
  },
  nameField: {
    required: helpers.withMessage('Введите Имя', required)
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value)),
  },
}))

const v = useVuelidate(rules, { emailField, passwordField, nameField, confirmPasswordField})

const submitForm = async () => {
  if (v.value.$invalid) {
    v.value.$touch()
    return
  } else {
    const formData = {
      email: emailField.value,
      password: passwordField.value,
      name: nameField.value,
    }

    try {
      await store.dispatch('register', formData)
      router.push('/')
    } catch (e) {
      // empty
    }

  }
}
</script>