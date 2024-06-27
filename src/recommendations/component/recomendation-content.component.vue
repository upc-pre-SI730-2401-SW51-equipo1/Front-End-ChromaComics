<script setup>
import { ref, onMounted } from 'vue';
import RecommendationsService from '../../recommendations/services/recommendations.service.js';

const recommendedComics = ref([]);

onMounted(async () => {
  try {
    const comics = await RecommendationsService.getAllComics();
    recommendedComics.value = comics;
  } catch (error) {
    console.error('Error fetching recommended comics:', error);
  }
});
</script>

<template>
  <div class="container">
    <div class="header-space"></div>
    <h1 class="title">Recommendations</h1>
    <div class="book-cards">
      <div
          v-for="(comicGroup, index) in chunkArray(recommendedComics, 3)"
          :key="index"
          class="book-group"
      >
        <div
            v-for="comic in comicGroup"
            :key="comic.id"
            class="book-card"
        >
          <div class="book-info">
            <h3 class="book-title">{{ comic.bookTitle }}</h3>
            <p class="book-author">Author: {{ comic.author }}</p>
            <p class="book-genre">Genre: {{ comic.genre }}</p>
            <p class="book-description">{{ comic.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="show-more">Show More</button>
  </div>
</template>

<script>
export default {
  methods: {
    chunkArray(array, chunkSize) {
      const chunks = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.container {
  background-color: #0073b7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.header-space {
  height: 80px;
}

.title {
  color: white;
  text-align: center;
  margin-bottom: 40px;
  font-size: 32px;
  font-weight: 600;
}

.book-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(800px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.book-group {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.book-card {
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  max-width: 250px;
}

.book-card:hover {
  transform: translateY(-5px);
}

.book-info {
  text-align: center;
}

.book-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.book-author, .book-genre, .book-description {
  margin: 8px 0;
  font-size: 14px;
  color: #888;
}

.show-more {
  background-color: white;
  color: #0073b7;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.show-more:hover {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .book-cards {
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }

  .book-group {
    flex-direction: column;
    align-items: center;
  }
}
</style>
