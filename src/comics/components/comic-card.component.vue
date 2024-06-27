<script>
  import Button from "primevue/button";
  import Image from "primevue/image";
  import Menubar from "primevue/menubar";
  import DataTable from "primevue/datatable";
  import Card from "primevue/card";
  import Column from "primevue/column";
  import Toolbar from "primevue/toolbar";
  import CascadeSelect from "primevue/cascadeselect";

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
      <img src="../../assets/book.png"/>
    </template>
    <template #title>{{ comic.title }}</template>
    <template #subtitle>
      <div>
        <span>Sumary: </span>{{ comic.summary }}
      </div>
      <div>
        <span>category: </span>{{ comic.category.name }}
      </div>
      <div>
        <span>status: </span>{{ comic.status }}
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
img {
  border-radius: inherit;
}
</style>