<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('toggle')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{date}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            {{name}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import M from 'materialize-css'
// import { useStore } from "vuex";

// import dateFilter from "@/filters/date.filter";

// const store = useStore()

export default {
  name: "vNavbar",
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
    options: {},
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    },
  },
  computed: {
    dateFilter() {
      const options = {}

      options.day = '2-digit'
      options.month = 'long'
      options.year = 'numeric'
      options.hour = '2-digit'
      options.minute = '2-digit'
      options.second = '2-digit'

      return new Intl.DateTimeFormat('ru-RU', options).format(new Date())
    },
    name() {
      return this.$store.getters.info.name
    },

  },
  created() {
    this.date = this.dateFilter
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = this.dateFilter
    }, 1000)

    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {constrainWidth: true})
  },
  beforeUnmount() {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
}
</script>