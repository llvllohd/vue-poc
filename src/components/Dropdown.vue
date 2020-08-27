<template>
  <div class="container">
    <div class="borderup"></div>
    <div class="menu">
      <div class="breakfast" v-on:click="breakfast">
        <h3>Breakfast Menu</h3>
        <h4>6:00 AM - 10:29AM</h4>
      </div>
      <div class="lunch" v-on:click="lunch">
        <h3>Lunch Menu</h3>
        <h4>10:30 AM - 4:59PM</h4>
      </div>
      <div class="dinner" v-on:click="dinner">
        <h3>Dinner Menu</h3>
        <h4>5:00 PM - 3:30AM</h4>
      </div>
    </div>
    <div class="borderdown"></div>
    <FoodItems  v-bind:items="items" />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import FoodItems from "./FoodItems";
export default {
  name: "Dropdown",
  components: {
    FoodItems,
  },
  data() {
    return {
      categories: [],
      jsonData: [],

      items: [],
      name: null,
    };
  },
  created() {
    this.axios.get("https://my-json-server.typicode.com/llvllohd/json/data").then((res) => {
      this.jsonData = res.data;
      this.categories = this.jsonData.categories[0].menus;

      this.name= this.jsonData.categories[0].name;
      this.items = this.jsonData.categories[0].menuitems;
    });
  },
  methods: {
    breakfast() {
      const breakfast = this.jsonData.categories[0].menus;
      this.categories = breakfast;

      this.name= this.jsonData.categories[0].name;
      this.items = this.jsonData.categories[0].menuitems;
    },
    lunch() {
      const lunch = this.jsonData.categories[1].menus;
      this.categories = lunch;

      this.name= this.jsonData.categories[1].name;
      this.items = this.jsonData.categories[1].menuitems;
    },
    dinner() {
      const dinner = this.jsonData.categories[2].menus;
      this.categories = dinner;

      this.name= this.jsonData.categories[2].name;
      this.items = this.jsonData.categories[2].menuitems;
    },
  },
};
</script>

<style scoped>
.borderup {
  width: 100%;
  border-top: 1px solid rgb(214, 214, 214);
  margin-bottom: 2rem;
}
.borderdown {
  width: 100%;
  border-top: 1px solid rgb(214, 214, 214);
  margin-top: 2rem;
}

.menu {
  margin-left: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 1rem;
}

.breakfast {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(231, 231, 231);
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 8px;
  padding: 0.9rem;
  cursor: pointer;
}
.breakfast:hover,
.lunch:hover,
.dinner:hover {
  border: 0.1rem solid #121212;
}

.breakfast:active,
.lunch:active,
.dinner:active {
  transform: scale(0.9);
}

.lunch {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(231, 231, 231);
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 8px;
  padding: 0.9rem;
  cursor: pointer;
}
.dinner {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(231, 231, 231);
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 8px;
  padding: 0.9rem;
  cursor: pointer;
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

h4 {
  color: #767676;
}

@media (max-width: 575px) {
  .menu {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    flex-direction: column;
  }
  .breakfast {
    margin-bottom: 1rem;
    width: 250px;
  }
  .lunch {
    margin-bottom: 1rem;
    width: 250px;
  }
  .dinner {
    margin-bottom: 1rem;
    width: 250px;
  }
}
</style>
