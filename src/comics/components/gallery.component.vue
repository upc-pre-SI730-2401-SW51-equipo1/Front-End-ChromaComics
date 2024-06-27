<script>
import {defineComponent} from "vue";
import ComicCard from "../components/comic-card.component.vue";
import {fetchComics} from "../service/comics-api.service.js";
import Button from "primevue/button";
import Image from "primevue/image";
import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Card from "primevue/card";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import CascadeSelect from "primevue/cascadeselect";

export default defineComponent({
  name: 'Gallery',
  components: {
    ComicCard,
    'pv-menubar': Menubar,
    'pv-data-table': DataTable,
    'pv-card': Card,
    'pv-column': Column,
    'pv-toolbar': Toolbar,
    'pv-cascade-select': CascadeSelect,
    'pv-button': Button,
    'img': Image
  },
  data() {
    return {
      comics: [],
      searchTerm: '',
    };
  },
  methods: {
    search() {
      if (this.searchTerm) {
        this.comics = this.comics.filter(comic => comic.name.includes(this.searchTerm));
      } else {
        // Fetch all comics again if the search term is empty
        fetchComics().then(data => {
          this.comics = data;
        });
      }
    }
  },
  created() {
    fetchComics().then(data => {
      this.comics = data;
    });
  },
})
</script>

<template>


    <nav class="navbar">
      <pv-button icon="pi pi-sliders-h" class="p-mr-2" plain text></pv-button>
      <div class="search-bar">
        <input type="text" v-model="searchTerm" placeholder="Search comics">
        <button type="button" @click="search">Search</button>
      </div>
    </nav>
  <div style="overflow: auto;">
    <ComicCard  v-for="comic in comics" :key="comic.id" :comic="comic" class="ComicCard"></ComicCard>
  </div>




</template>

<style scoped>

.ComicCard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
}

nav{
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
ul{
  display: flex;
  gap: 1rem;
  list-style: none;
}
li{
  display: inline;
}

/* Navbar styles */
/* Navbar styles */
.navbar {
  background-color: #fff;
  color: #222;
  padding: 1rem 1rem;
  width: 100%;
  z-index: 10;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.search-bar {
  display: flex;
  margin-left: auto;
}

.search-bar input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.search-bar button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

/* Responsive styles for hamburger menu */
@media (max-width: 768px) {
  .search-bar {
    flex-basis: 100%;
    justify-content: center;
  }
}

</style>