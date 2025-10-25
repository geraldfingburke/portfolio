<template>
  <div class="random-view">
    <div class="container">
      <h1 class="page-title">Random</h1>

      <div class="random-image-container">
        <div v-if="currentImage" class="image-wrapper" @click="loadRandomImage">
          <img
            :src="currentImage"
            :key="imageKey"
            alt="Random image"
            class="random-image"
          />
          <p class="click-hint">Click to load another image</p>
        </div>
        <div v-else class="no-images">
          <p>No images found in the Random folder.</p>
          <p class="hint">
            Add some images to src/assets/Random/ to get started!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentImage = ref(null);
const imageKey = ref(0);
const images = ref([]);

// Import all images from the Random folder
const importImages = () => {
  try {
    // Use require.context for webpack
    const context = require.context(
      "@/assets/Random",
      false,
      /\.(jpg|jpeg|png|gif|webp)$/
    );
    images.value = context.keys().map((key) => context(key));
    console.log("Loaded images:", images.value.length);
  } catch (error) {
    console.error("Error loading images:", error);
    images.value = [];
  }
};

const loadRandomImage = () => {
  if (images.value.length === 0) {
    currentImage.value = null;
    return;
  }

  // Get a random image that's different from the current one (if possible)
  let newImage;
  if (images.value.length === 1) {
    newImage = images.value[0];
  } else {
    do {
      const randomIndex = Math.floor(Math.random() * images.value.length);
      newImage = images.value[randomIndex];
    } while (newImage === currentImage.value && images.value.length > 1);
  }

  currentImage.value = newImage;
  imageKey.value++; // Force re-render for transitions
};

onMounted(() => {
  importImages();
  loadRandomImage();
});
</script>

<style scoped>
.random-view {
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 3rem;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 3rem;
}

.random-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.image-wrapper {
  position: relative;
  max-width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: scale(1.02);
}

.image-wrapper:active {
  transform: scale(0.98);
}

.random-image {
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
}

.click-hint {
  text-align: center;
  margin-top: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover .click-hint {
  opacity: 1;
}

.no-images {
  text-align: center;
  padding: 3rem;
  background: var(--bg-secondary);
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
}

.no-images p {
  color: var(--text-secondary);
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.no-images .hint {
  color: var(--text-tertiary);
  font-size: 0.9rem;
  font-style: italic;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .random-image {
    max-height: 60vh;
  }
}
</style>
