<template>
  <div class="writing-view">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1 class="page-title">Writing</h1>
        <p class="page-description">
          Published works including journalism, fiction, poetry, and essays on
          gaming, technology, and creative expression.
        </p>
      </header>

      <!-- Featured Writing -->
      <section v-if="featuredWritings.length > 0" class="featured-writings">
        <h2 class="section-title">Featured Works</h2>
        <div class="featured-grid">
          <article
            v-for="writing in featuredWritings"
            :key="writing.id"
            class="featured-writing card"
          >
            <div class="writing-image">
              <div class="image-placeholder">
                <svg
                  width="100%"
                  height="200"
                  viewBox="0 0 400 200"
                  fill="none"
                >
                  <rect width="400" height="200" fill="var(--accent-blue)" />
                  <text
                    x="200"
                    y="100"
                    text-anchor="middle"
                    fill="white"
                    font-size="16"
                    font-weight="600"
                  >
                    {{ writing.title }}
                  </text>
                </svg>
              </div>
            </div>
            <div class="writing-content">
              <div class="writing-meta">
                <span class="writing-date">{{
                  formatDate(writing.publishedAt)
                }}</span>
                <div class="writing-tags">
                  <span
                    v-for="tag in writing.tags.slice(0, 2)"
                    :key="tag"
                    class="tag"
                    @click="setTagFilter(tag)"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
              <h3 class="writing-title">
                <router-link
                  :to="{
                    name: 'WritingDetail',
                    params: { slug: writing.slug },
                  }"
                >
                  {{ writing.title }}
                </router-link>
              </h3>
              <p class="writing-excerpt">{{ writing.excerpt }}</p>
              <div class="writing-footer">
                <span class="publication">{{ writing.publication }}</span>
                <router-link
                  :to="{
                    name: 'WritingDetail',
                    params: { slug: writing.slug },
                  }"
                  class="read-more"
                >
                  Read More
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Filter Section -->
      <section class="filter-section">
        <div class="filters">
          <h3>Filter by:</h3>
          <div class="filter-groups">
            <div class="filter-group">
              <span class="filter-label">Category:</span>
              <div class="filter-options">
                <button
                  class="filter-btn"
                  :class="{ active: selectedCategory === null }"
                  @click="setCategoryFilter(null)"
                >
                  All
                </button>
                <button
                  v-for="category in allCategories"
                  :key="category"
                  class="filter-btn"
                  :class="{ active: selectedCategory === category }"
                  @click="setCategoryFilter(category)"
                >
                  {{ category }}
                </button>
              </div>
            </div>
            <div class="filter-group">
              <span class="filter-label">Tags:</span>
              <div class="filter-options">
                <button
                  class="filter-btn"
                  :class="{ active: selectedTag === null }"
                  @click="setTagFilter(null)"
                >
                  All
                </button>
                <button
                  v-for="tag in allTags.slice(0, 6)"
                  :key="tag"
                  class="filter-btn"
                  :class="{ active: selectedTag === tag }"
                  @click="setTagFilter(tag)"
                >
                  {{ tag }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Writing List -->
      <section class="writings-list">
        <h2 class="section-title">All Writing</h2>
        <div class="writings-grid">
          <article
            v-for="writing in filteredWritings"
            :key="writing.id"
            class="writing-card card"
          >
            <div class="writing-content">
              <div class="writing-meta">
                <span class="writing-date">{{
                  formatDate(writing.publishedAt)
                }}</span>
                <span class="writing-category">{{ writing.category }}</span>
              </div>
              <h3 class="writing-title">
                <router-link
                  :to="{
                    name: 'WritingDetail',
                    params: { slug: writing.slug },
                  }"
                >
                  {{ writing.title }}
                </router-link>
              </h3>
              <p class="writing-excerpt">{{ writing.excerpt }}</p>
              <div class="writing-tags">
                <span
                  v-for="tag in writing.tags"
                  :key="tag"
                  class="tag"
                  @click="setTagFilter(tag)"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="writing-footer">
                <span class="publication">{{ writing.publication }}</span>
                <div class="writing-actions">
                  <a
                    v-if="writing.externalUrl"
                    :href="writing.externalUrl"
                    target="_blank"
                    class="external-link"
                    title="Read on original site"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                      />
                    </svg>
                  </a>
                  <router-link
                    :to="{
                      name: 'WritingDetail',
                      params: { slug: writing.slug },
                    }"
                    class="read-more"
                  >
                    Read More
                  </router-link>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="filteredWritings.length === 0" class="empty-state">
          <div class="empty-content">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
              />
            </svg>
            <h3>No writing found</h3>
            <p>
              Try adjusting your filters or check back later for new writing.
            </p>
            <button class="btn btn-primary" @click="clearFilters()">
              Clear Filters
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useWritingStore } from "@/stores/writing";

export default {
  name: "WritingView",
  setup() {
    const writingStore = useWritingStore();
    const selectedCategory = ref(null);
    const selectedTag = ref(null);

    // Computed properties
    const featuredWritings = computed(() => writingStore.featuredWritings);
    const allTags = computed(() => writingStore.allTags);
    const allCategories = computed(() => writingStore.allCategories);

    const filteredWritings = computed(() => {
      let writings = writingStore.publishedWritings;

      if (selectedCategory.value) {
        writings = writings.filter(
          (writing) => writing.category === selectedCategory.value
        );
      }

      if (selectedTag.value) {
        writings = writings.filter((writing) =>
          writing.tags.includes(selectedTag.value)
        );
      }

      return writings.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
    });

    // Methods
    const setCategoryFilter = (category) => {
      selectedCategory.value = category;
      selectedTag.value = null; // Clear tag filter when setting category
    };

    const setTagFilter = (tag) => {
      selectedTag.value = tag;
      selectedCategory.value = null; // Clear category filter when setting tag
    };

    const clearFilters = () => {
      selectedCategory.value = null;
      selectedTag.value = null;
    };

    const formatDate = (dateString) => {
      const [year, month, day] = dateString.split("-");
      return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    return {
      featuredWritings,
      allTags,
      allCategories,
      filteredWritings,
      selectedCategory,
      selectedTag,
      setCategoryFilter,
      setTagFilter,
      clearFilters,
      formatDate,
    };
  },
};
</script>

<style scoped>
.writing-view {
  padding: 2rem 0 4rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Featured Writings */
.featured-writings {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.featured-writing {
  overflow: hidden;
  transition: transform 0.3s ease;
}

.featured-writing:hover {
  transform: translateY(-5px);
}

.writing-image {
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0 0;
}

.image-placeholder {
  width: 100%;
  transition: transform 0.3s ease;
}

.featured-writing:hover .image-placeholder {
  transform: scale(1.05);
}

.writing-content {
  padding: 1.5rem;
}

.writing-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.writing-date {
  color: var(--text-tertiary);
  font-size: 0.875rem;
}

.writing-category {
  color: var(--text-tertiary);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.writing-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag:hover {
  background: var(--accent-blue);
  color: var(--text-primary);
}

.writing-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.writing-title a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.writing-title a:hover {
  color: var(--accent-blue);
}

.writing-excerpt {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.writing-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.publication {
  color: var(--text-tertiary);
  font-size: 0.875rem;
  font-style: italic;
}

.writing-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.external-link {
  color: var(--text-tertiary);
  transition: color 0.3s ease;
}

.external-link:hover {
  color: var(--accent-blue);
}

.read-more {
  color: var(--accent-blue);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: var(--accent-blue-dark);
}

/* Filter Section */
.filter-section {
  margin-bottom: 3rem;
}

.filters h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.filter-groups {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.filter-label {
  color: var(--text-secondary);
  font-weight: 500;
  min-width: 80px;
}

.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  background: var(--bg-secondary);
  border: 2px solid var(--border-primary);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--accent-blue);
  color: var(--accent-blue);
}

.filter-btn.active {
  background: var(--accent-blue);
  border-color: var(--accent-blue);
  color: var(--text-primary);
}

/* Writing List */
.writings-list {
  margin-bottom: 2rem;
}

.writings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
}

.writing-card {
  transition: transform 0.3s ease;
}

.writing-card:hover {
  transform: translateY(-3px);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-tertiary);
}

.empty-content svg {
  color: var(--text-tertiary);
  margin-bottom: 1rem;
}

.empty-content h3 {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.empty-content p {
  margin-bottom: 2rem;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-description {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .featured-grid,
  .writings-grid {
    grid-template-columns: 1fr;
  }

  .filter-group {
    flex-direction: column;
    align-items: flex-start;
  }

  .filter-label {
    min-width: auto;
  }

  .writing-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .writing-content {
    padding: 1rem;
  }

  .filter-options {
    justify-content: center;
  }
}
</style>
