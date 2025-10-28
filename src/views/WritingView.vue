<template>
  <div class="writing-view">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1 class="page-title">Writing</h1>
        <p class="page-description">
          Stuff I have written. Some of it is good. Some of it is technically
          the written word.
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
              <img
                :src="writing.featuredImage"
                :alt="writing.title"
                class="featured-img"
              />
            </div>
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
      <div class="filters">
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'all' }"
          @click="setFilter('all')"
        >
          All Writing ({{ getFilterCount("all") }})
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'featured' }"
          @click="setFilter('featured')"
        >
          Featured ({{ getFilterCount("featured") }})
        </button>
        <button
          v-for="category in allCategories"
          :key="category"
          class="filter-btn"
          :class="{ active: activeFilter === category }"
          @click="setFilter(category)"
        >
          {{ category }} ({{ getFilterCount(category) }})
        </button>
      </div>

      <!-- Writing List -->
      <section class="writings-list">
        <h2 class="section-title">All Writing</h2>
        <div class="writings-grid">
          <article
            v-for="writing in filteredWritings"
            :key="writing.id"
            class="writing-card card"
          >
            <div class="writing-image">
              <img
                :src="writing.featuredImage"
                :alt="writing.title"
                class="featured-img"
              />
            </div>
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
    const activeFilter = ref("all");

    // Computed properties
    const featuredWritings = computed(() => writingStore.featuredWritings);
    const allCategories = computed(() => writingStore.allCategories);

    const filteredWritings = computed(() => {
      if (activeFilter.value === "all") {
        return [...writingStore.publishedWritings].sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
      }

      if (activeFilter.value === "featured") {
        return [...writingStore.featuredWritings].sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
      }

      return [...writingStore.writingsByCategory(activeFilter.value)].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
    });

    // Methods
    const setFilter = (filter) => {
      activeFilter.value = filter;
    };

    const getFilterCount = (filter) => {
      if (filter === "all") {
        return writingStore.publishedWritings.length;
      }
      if (filter === "featured") {
        return writingStore.featuredWritings.length;
      }
      return writingStore.writingsByCategory(filter).length;
    };

    const clearFilters = () => {
      activeFilter.value = "all";
    };

    const formatDate = (dateString) => {
      if (!dateString) return "";
      const [year, month, day] = dateString.split("-");
      return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    return {
      featuredWritings,
      allCategories,
      filteredWritings,
      activeFilter,
      setFilter,
      getFilterCount,
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
  height: 250px;
}

.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-writing:hover .featured-img {
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
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 4rem;
}

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
