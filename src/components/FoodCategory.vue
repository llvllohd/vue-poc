<template>
  <div class="container">
    <!-- --------------------------------------- -->
    <div class="row">
      <ul class="ul">
        <li v-for="i in data.slice(0, 4)" v-bind:key="i.name">
          <a>
            <router-link :to="i.link">{{ i.category }}</router-link>
          </a>
        </li>
        <li class="menu">
          <a v-on:click="display">
            <router-link to="#">More</router-link>
            <span>
              <fa-icon
                class="caretdown"
                :icon="['fas', 'caret-down']"
                size="1x"
                :spin="(spin = false)"
            /></span>
          </a>
          <div v-if="show" class="dropdown">
            <li v-for="i in data.slice(4, data.length - 1)" v-bind:key="i.name">
              <a>
                <router-link :to="i.link">{{ i.category }}</router-link>
              </a>
            </li>
          </div>
        </li>
      </ul>
    </div>
    <!-- ------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "FoodCategory",
  props: ["data"],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    display() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  display: flex;
  display: -ms-flexbox;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
}

li {
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: #302e4d;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: capitalize;
  border: 1px solid transparent;
  padding: 5px 0px;
  border-radius: 3px;
  transition: all 0.3s ease;
  text-decoration: none;
}

li a.router-link-exact-active {
  border-bottom: 5px solid #121212;
}

.caretdown {
  margin-left: 0.5rem;
}

.dropdown {
  display: flex;
  background-color: red;
  flex-direction: column;
}

@media (max-width: 550px) {
  li {
    margin-bottom: 1rem;
  }
}
</style>
