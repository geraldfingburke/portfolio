<template>
  <div class="game-detail-view">
    <div class="container">
      <div v-if="game" class="game-detail">
        <!-- Back Navigation -->
        <div class="back-nav">
          <router-link to="/games" class="back-link">
            ← Back to Games
          </router-link>
        </div>

        <!-- Game Header -->
        <header class="game-header">
          <div class="game-badges">
            <span v-if="game.featured" class="badge featured"
              >Featured Game</span
            >
            <span v-if="game.status === 'released'" class="badge released"
              >Released</span
            >
            <span v-if="game.status === 'ongoing'" class="badge ongoing"
              >Ongoing</span
            >
          </div>
          <h1 class="game-title">{{ game.title }}</h1>
          <p class="game-subtitle">{{ game.description }}</p>

          <div class="game-actions">
            <a
              v-if="game.browserPlayable && game.gameUrl"
              :href="game.gameUrl"
              target="_blank"
              class="btn btn-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Play in Browser
            </a>
            <a
              v-else-if="game.gameUrl"
              :href="game.gameUrl"
              target="_blank"
              class="btn btn-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                />
              </svg>
              Download Game
            </a>
            <a
              v-if="game.githubUrl"
              :href="game.githubUrl"
              target="_blank"
              class="btn btn-outline"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </header>

        <!-- Game Image -->
        <div class="game-image">
          <img :src="game.imageUrl" :alt="game.title" class="game-screenshot" />
        </div>

        <!-- Game Info Grid -->
        <div class="game-info-grid">
          <!-- Main Content -->
          <div class="game-content">
            <section class="game-section">
              <h2>About This Game</h2>
              <div class="game-description">
                {{ game.longDescription }}
              </div>
            </section>

            <!-- Browser Playable Game Embed -->
            <section
              v-if="game.browserPlayable && game.gameUrl"
              class="game-section"
            >
              <h2>Play Now</h2>
              <div class="game-embed" ref="gameEmbedContainer">
                <iframe
                  :src="getEmbedUrl(game.embedUrl)"
                  class="game-iframe"
                  ref="gameIframe"
                  frameborder="0"
                  allowfullscreen
                  allow="autoplay; fullscreen; microphone; camera; midi; monetization; payment; sync-xhr; gamepad; gyroscope; accelerometer"
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  title="Game Embed"
                >
                </iframe>
                <!-- Play on Itch.io button (bottom left) -->
                <a
                  :href="game.gameUrl"
                  target="_blank"
                  class="itch-btn"
                  title="Play on Itch.io"
                  aria-label="Play on Itch.io"
                >
                  <span>Play on itch.io</span>
                </a>
                <!-- Fullscreen button (bottom right) -->
                <button
                  @click="toggleFullscreen"
                  class="fullscreen-btn"
                  title="Toggle Fullscreen"
                  aria-label="Toggle Fullscreen"
                >
                  <svg
                    v-if="!isFullscreen"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                    />
                  </svg>
                  <svg
                    v-else
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
                    />
                  </svg>
                </button>
              </div>
            </section>

            <!-- Tags -->
            <section class="game-section">
              <h2>Tags</h2>
              <div class="tags-grid">
                <router-link
                  v-for="tag in game.tags"
                  :key="tag"
                  :to="{ path: '/games', query: { tag: tag } }"
                  class="tag-card tag-link"
                >
                  <span class="tag-name">{{ tag }}</span>
                </router-link>
              </div>
            </section>

            <!-- Related Games -->
            <section v-if="relatedGames.length > 0" class="game-section">
              <h2>Other Games</h2>
              <div class="related-games">
                <div
                  v-for="relatedGame in relatedGames"
                  :key="relatedGame.id"
                  class="related-game-card"
                >
                  <router-link
                    :to="{ name: 'GameDetail', params: { id: relatedGame.id } }"
                    class="related-game-link"
                  >
                    <div class="related-game-image">
                      <img
                        :src="relatedGame.imageUrl"
                        :alt="relatedGame.title"
                        class="related-game-img"
                      />
                    </div>
                    <div class="related-game-content">
                      <h4 class="related-game-title">
                        {{ relatedGame.title }}
                      </h4>
                      <p class="related-game-description">
                        {{ relatedGame.description }}
                      </p>
                    </div>
                  </router-link>
                </div>
              </div>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="game-sidebar">
            <!-- Game Details -->
            <div class="sidebar-card">
              <h3>Game Details</h3>
              <div class="detail-item">
                <span class="label">Release Date:</span>
                <span class="value">{{ formatDate(game.releaseDate) }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Status:</span>
                <span class="value status" :class="game.status">
                  {{ formatStatus(game.status) }}
                </span>
              </div>
              <div v-if="game.tags.length > 1" class="detail-item">
                <span class="label">Platform:</span>
                <div class="tag-list">
                  <span class="tag-badge">
                    {{ game.tags[1] }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Links -->
            <div v-if="game.gameUrl || game.githubUrl" class="sidebar-card">
              <h3>Links</h3>
              <div class="links-list">
                <a
                  v-if="game.gameUrl"
                  :href="game.gameUrl"
                  target="_blank"
                  class="link-item"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play Game
                </a>
                <a
                  v-if="game.githubUrl"
                  :href="game.githubUrl"
                  target="_blank"
                  class="link-item"
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
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Not Found State -->
      <div v-else class="not-found">
        <div class="not-found-content">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
            />
          </svg>
          <h2>Game Not Found</h2>
          <p>The game you're looking for doesn't exist or has been removed.</p>
          <router-link to="/games" class="btn btn-primary">
            Back to Games
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useGamesStore } from "@/stores/games";

export default {
  name: "GameDetailView",
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
  },
  setup(props) {
    const route = useRoute();
    const gamesStore = useGamesStore();

    // Get the current game
    const game = computed(() =>
      gamesStore.getGameById(props.id || route.params.id)
    );

    // Get three randomized games (excluding current game)
    const relatedGames = computed(() => {
      const otherGames = gamesStore.games.filter(
        (g) => g.id !== game.value?.id
      );

      // Shuffle the array using Fisher-Yates algorithm
      const shuffled = [...otherGames];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return shuffled.slice(0, 3);
    });

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    const formatStatus = (status) => {
      const statusMap = {
        released: "Released",
        ongoing: "Ongoing",
        development: "In Development",
      };
      return statusMap[status] || status;
    };

    const getEmbedUrl = (embedUrl) => {
      // If embedUrl is provided, use it directly
      if (embedUrl) {
        return embedUrl;
      }
      // Fallback for older games without embedUrl
      return null;
    };

    // Fullscreen functionality
    const gameEmbedContainer = ref(null);
    const gameIframe = ref(null);
    const isFullscreen = ref(false);

    const toggleFullscreen = async () => {
      try {
        if (!isFullscreen.value) {
          // Enter fullscreen
          const container = gameEmbedContainer.value;
          if (container.requestFullscreen) {
            await container.requestFullscreen();
          } else if (container.webkitRequestFullscreen) {
            await container.webkitRequestFullscreen();
          } else if (container.msRequestFullscreen) {
            await container.msRequestFullscreen();
          }
        } else {
          // Exit fullscreen
          if (document.exitFullscreen) {
            await document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            await document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            await document.msExitFullscreen();
          }
        }
      } catch (error) {
        console.warn("Fullscreen request failed:", error);
      }
    };

    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;

      isFullscreen.value = fullscreenElement === gameEmbedContainer.value;
    };

    onMounted(() => {
      // Listen for fullscreen changes
      document.addEventListener("fullscreenchange", handleFullscreenChange);
      document.addEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.addEventListener("msfullscreenchange", handleFullscreenChange);
    });

    onUnmounted(() => {
      // Cleanup event listeners
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    });

    return {
      game,
      relatedGames,
      formatDate,
      formatStatus,
      getEmbedUrl,
      gameEmbedContainer,
      gameIframe,
      isFullscreen,
      toggleFullscreen,
    };
  },
};
</script>

<style scoped>
.game-detail-view {
  padding: 2rem 0 4rem;
}

/* Back Navigation */
.back-nav {
  margin-bottom: 2rem;
}

.back-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: var(--accent-blue);
}

/* Game Header */
.game-header {
  text-align: center;
  margin-bottom: 3rem;
}

.game-badges {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.badge {
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: 0.875rem;
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

.badge.ongoing {
  background: #e67e22;
  color: white;
}

.game-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.game-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.game-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* Game Image */
.game-image {
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  overflow: hidden;
}

.game-screenshot {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.image-placeholder {
  width: 100%;
  background: var(--bg-tertiary);
}

/* Game Embed */
.game-embed {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  border-radius: 0.5rem;
  background: var(--bg-secondary);
}

.game-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.5rem;
}

/* Itch.io button (bottom left) */
.itch-btn {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-decoration: none;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(4px);
  z-index: 10;
  font-size: 0.875rem;
  white-space: nowrap;
  min-width: fit-content;
  width: auto;
}

.itch-btn:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.05);
  color: white;
  text-decoration: none;
}

.itch-btn:active {
  transform: scale(0.95);
}

/* Fullscreen button (bottom right) */
.fullscreen-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  z-index: 10;
}

.fullscreen-btn:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.05);
}

.fullscreen-btn:active {
  transform: scale(0.95);
}

/* Fullscreen styles */
.game-embed:fullscreen {
  padding-bottom: 0;
  height: 100vh;
  border-radius: 0;
}

.game-embed:fullscreen .game-iframe {
  border-radius: 0;
}

.game-embed:fullscreen .fullscreen-btn {
  background: rgba(0, 0, 0, 0.8);
}

/* Webkit fullscreen support */
.game-embed:-webkit-full-screen {
  padding-bottom: 0;
  height: 100vh;
  border-radius: 0;
}

.game-embed:-webkit-full-screen .game-iframe {
  border-radius: 0;
}

/* Game Info Grid */
.game-info-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.game-content {
  max-width: none;
}

.game-section {
  margin-bottom: 3rem;
}

.game-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.game-description {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
}

/* Tags */
.tags-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.tag-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;
}

.tag-card:hover {
  border-color: var(--accent-blue);
  transform: translateY(-2px);
  text-decoration: none;
}

.tag-link {
  cursor: pointer;
}

.tag-link:hover .tag-name {
  color: var(--accent-blue);
}

.tag-name {
  font-weight: 500;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

/* Related Games */
.related-games {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.related-game-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.related-game-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-blue);
}

.related-game-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.related-game-image {
  position: relative;
  width: 100%;
  height: 120px;
  overflow: hidden;
}

.related-game-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.related-game-card:hover .related-game-img {
  transform: scale(1.05);
}

.related-game-content {
  padding: 1rem;
}

.related-game-title {
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.related-game-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Sidebar */
.game-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.sidebar-card h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.label {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.value {
  color: var(--text-primary);
  font-weight: 500;
}

.status.released {
  color: #27ae60;
}

.status.ongoing {
  color: #e67e22;
}

.status.development {
  color: #f39c12;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-blue);
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.link-item:hover {
  background: var(--bg-tertiary);
}

/* Not Found */
.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found-content svg {
  color: var(--text-tertiary);
  margin-bottom: 1rem;
}

.not-found-content h2 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.not-found-content p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

/* Mobile Responsiveness */
@media (max-width: 968px) {
  .game-info-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .game-title {
    font-size: 2rem;
  }

  .game-subtitle {
    font-size: 1rem;
  }

  .game-actions {
    flex-direction: column;
    align-items: center;
  }

  .tags-grid {
    grid-template-columns: 1fr;
  }

  .related-games {
    grid-template-columns: 1fr;
  }
}
</style>
