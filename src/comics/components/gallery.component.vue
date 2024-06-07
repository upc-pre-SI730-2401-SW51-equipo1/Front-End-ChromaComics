<script>
import {defineComponent} from "vue";
import ComicCard from "@/comics/components/comic-card.component.vue";
import {fetchComics} from "@/comics/service/comics-api.service";
import Button from "primevue/button";
import Image from "primevue/image";

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
    };
  },
  created() {
    fetchComics().then(data => {
      this.comics = data;
    });
  },
})
</script>

<template>
  <div>
  <nav class="navbar">
    <pv-button icon="pi pi-sliders-h" class="p-mr-2" plain text></pv-button>
    <div class="search-bar">
      <input type="text" placeholder="Search comics">
      <button type="button">Search</button>
    </div>
  </nav>
  </div>

  <div>
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
.navbar {
  background-color: #fff;
  color: #222;
  padding: 1rem 1rem;
  position: fixed;
  top: 0;
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