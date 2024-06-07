<script>
  import Button from "primevue/button";
  import Image from "primevue/image";

  export default {
    name: 'ComicCard',
    props: {
      comic: Object
    },
    components: {
      'pv-menubar': Menubar,
      'pv-data-table': DataTable,
      'pv-card': Card,
      'pv-column': Column,
      'pv-toolbar': Toolbar,
      'pv-cascade-select': CascadeSelect,
      'pv-button': Button,
      'img': Image
    }
  }
</script>

<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <img :src="comic.image" style="width: 150px;" alt="Comics Cover" :aria-label="`Image by ${comic.writer}`"/>
    </template>
    <template #title>{{ comic.title }}</template>
    <template #subtitle>
      <div>
        <span>Year: </span>{{ comic.year }}
      </div>
      <div>
        <span>Publisher: </span>{{ comic.publisher }}
      </div>
      <div>
        <span>Writer: </span>{{ comic.writer }}
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
img {
  border-radius: inherit;
}
</style>