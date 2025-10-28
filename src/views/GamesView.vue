<template>
  <div class="games-view">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1 class="page-title">Games</h1>
        <p class="page-description">
          All kinds of games. You can play them. You can eat them. You can show
          them to your friends and make fun of me.
        </p>
      </header>

      <!-- Filter Section -->
      <div class="filters">
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'all' }"
          @click="setFilter('all')"
        >
          All Games ({{ getFilterCount("all") }})
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'featured' }"
          @click="setFilter('featured')"
        >
          Featured ({{ getFilterCount("featured") }})
        </button>
        <button
          v-for="tag in allTags"
          :key="tag"
          class="filter-btn"
          :class="{ active: activeFilter === tag }"
          @click="setFilter(tag)"
        >
          {{ tag }} ({{ getFilterCount(tag) }})
        </button>
      </div>

      <!-- Games Grid -->
      <div class="games-grid">
        <div
          v-for="game in filteredGames"
          :key="game.id"
          class="game-card card"
        >
          <div class="game-image">
            <img
              :src="game.imageUrl"
              :alt="game.title"
              class="game-thumbnail"
            />
            <div class="game-overlay">
              <div class="overlay-actions">
                <router-link
                  :to="{ name: 'GameDetail', params: { id: game.id } }"
                  class="btn btn-primary btn-sm"
                >
                  View Details
                </router-link>
                <a
                  v-if="game.gameUrl"
                  :href="game.gameUrl"
                  target="_blank"
                  class="btn btn-outline btn-sm"
                >
                  Play Game
                </a>
              </div>
            </div>
          </div>

          <div class="game-content">
            <div class="game-header">
              <h3 class="game-title">
                <router-link
                  :to="{ name: 'GameDetail', params: { id: game.id } }"
                >
                  {{ game.title }}
                </router-link>
              </h3>
              <div class="game-badges">
                <span v-if="game.featured" class="badge featured"
                  >Featured</span
                >
                <span v-if="game.status === 'released'" class="badge released"
                  >Released</span
                >
                <span
                  v-if="game.status === 'in development'"
                  class="badge in-development"
                  >In Development</span
                >
              </div>
            </div>

            <p class="game-description">{{ game.description }}</p>

            <div class="game-tags">
              <span
                v-for="tag in game.tags"
                :key="tag"
                class="tag-item"
                @click="setFilter(tag)"
              >
                {{ tag }}
              </span>
            </div>

            <div class="game-meta">
              <span class="game-date">{{ formatDate(game.releaseDate) }}</span>
              <div class="game-links">
                <a
                  v-if="game.githubUrl"
                  :href="game.githubUrl"
                  target="_blank"
                  class="game-link"
                  title="View Source"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  v-if="game.gameUrl"
                  :href="game.gameUrl"
                  target="_blank"
                  class="game-link"
                  title="Play Game"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredGames.length === 0" class="empty-state">
        <div class="empty-content">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M21.58 16.09l-1.09-7.66A3.996 3.996 0 0016.53 5H7.47C6.21 5 5.17 5.93 5.03 7.17L3.94 16.09c-.03.24-.03.49-.03.73C3.91 18.85 5.06 20 6.09 20h11.82c1.03 0 2.18-1.15 2.18-3.18 0-.24 0-.49-.03-.73zM9 11H7.5v1.5H9V11zm8.5 1.5H16V11h1.5v1.5z"
            />
          </svg>
          <h3>No games found</h3>
          <p>Try adjusting your filters or check back later for new games.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGamesStore } from "@/stores/games";

export default {
  name: "GamesView",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const gamesStore = useGamesStore();
    const activeFilter = ref("all");

    const allTags = computed(() => {
      const tags = new Set();
      gamesStore.games.forEach((game) => {
        game.tags.forEach((tag) => tags.add(tag));
      });
      return Array.from(tags).sort();
    });

    const getFilterCount = (filter) => {
      if (filter === "all") {
        return gamesStore.games.length;
      }
      if (filter === "featured") {
        return gamesStore.featuredGames.length;
      }
      return gamesStore.games.filter((game) => game.tags.includes(filter))
        .length;
    };

    const filteredGames = computed(() => {
      if (activeFilter.value === "all") {
        return [...gamesStore.games].sort(
          (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
        );
      }
      if (activeFilter.value === "featured") {
        return gamesStore.featuredGames;
      }
      return gamesStore.games
        .filter((game) => game.tags.includes(activeFilter.value))
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    });

    const setFilter = (filter) => {
      activeFilter.value = filter;
      // Update URL query parameter
      router.push({
        path: "/games",
        query: filter === "all" ? {} : { tag: filter },
      });
    };

    // Initialize filter from URL query parameter
    onMounted(() => {
      const tagFromUrl = route.query.tag;
      if (tagFromUrl) {
        // Validate that the tag exists in our games
        const validTag =
          allTags.value.includes(tagFromUrl) || tagFromUrl === "featured";
        if (validTag) {
          activeFilter.value = tagFromUrl;
        }
      }
    });

    const formatDate = (dateString) => {
      const [year, month, day] = dateString.split("-");
      return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });
    };

    return {
      activeFilter,
      allTags,
      filteredGames,
      setFilter,
      formatDate,
      getFilterCount,
    };
  },
};
</script>

<style scoped>
.games-view {
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

/* Filters */
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
}

.filter-btn {
  background: var(--bg-secondary);
  border: 2px solid var(--border-primary);
  color: var(--text-secondary);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 500;
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

/* Games Grid */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
}

.game-card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.game-card:hover {
  transform: translateY(-5px);
}

.game-image {
  position: relative;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 0.5rem;
  height: 250px;
}

.game-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.game-card:hover .game-thumbnail {
  transform: scale(1.05);
}

.image-placeholder {
  width: 100%;
  background: var(--bg-tertiary);
  transition: transform 0.3s ease;
}

.game-card:hover .image-placeholder {
  transform: scale(1.05);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(52, 152, 219, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.overlay-actions {
  display: flex;
  gap: 1rem;
}

.game-content {
  padding: 0 0.5rem;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.game-title {
  margin: 0;
  flex: 1;
}

.game-title a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.game-title a:hover {
  color: var(--accent-blue);
}

.game-badges {
  display: flex;
  gap: 0.5rem;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.badge.featured {
  background: #f39c12;
  color: white;
}

.badge.released {
  background: #27ae60;
  color: white;
}

.badge.in-development {
  background: #e67e22;
  color: white;
}

.game-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.game-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag-item {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag-item:hover {
  background: var(--accent-blue);
  color: var(--text-primary);
}

.game-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-primary);
}

.game-date {
  color: var(--text-tertiary);
  font-size: 0.875rem;
}

.game-links {
  display: flex;
  gap: 0.75rem;
}

.game-link {
  color: var(--text-tertiary);
  transition: color 0.3s ease;
}

.game-link:hover {
  color: var(--accent-blue);
}

/* Button Styles */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
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

  .games-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .filters {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 0 1rem;
  }

  .filter-btn {
    white-space: nowrap;
    flex-shrink: 0;
  }

  .game-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .overlay-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .game-meta {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
