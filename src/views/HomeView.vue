<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title fade-in-up">
            Hello, I'm <span class="highlight">Gerald Burke</span>
          </h1>
          <p class="hero-subtitle fade-in-up">
            Developer of Games and Software, Writer of Short Fiction and
            Tirades, Educator and Organizer
          </p>
          <p class="hero-description fade-in-up">
            I build enterprise software, silly games, and spooky stories. I
            started and manage a large community of local game developers. I
            even took a run at teaching for a few years. I love engaging in new
            experiences and bringing value to great teams with great vision. I'm
            based in Johnson City, in the Appalachian Mountains of Northeast
            Tennessee. <br /><br />Check out some of what I do!
          </p>
          <div class="hero-actions fade-in-up">
            <router-link to="/games" class="btn btn-primary">
              View My Games
            </router-link>
            <router-link to="/software" class="btn btn-outline">
              View My Software
            </router-link>
            <router-link to="/writing" class="btn btn-outline">
              View My Writing
            </router-link>
            <router-link to="/about" class="btn btn-outline">
              About Me
            </router-link>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-placeholder">
            <img
              src="../assets/Branding/Headshots/selfie.jpg"
              alt="a self portrait of Gerald Burke"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="featured-projects">
      <div class="container">
        <h2 class="section-title">Featured Games</h2>
        <div class="projects-grid">
          <div
            v-for="game in featuredGames"
            :key="game.id"
            class="project-card card"
          >
            <div class="project-image">
              <img
                :src="game.imageUrl"
                :alt="game.title"
                class="project-thumbnail"
              />
            </div>
            <div class="project-content">
              <h3>{{ game.title }}</h3>
              <p>{{ game.description }}</p>
              <div class="project-tags">
                <span v-for="tag in game.tags" :key="tag" class="tag-item">
                  {{ tag }}
                </span>
              </div>
              <div class="project-actions">
                <router-link
                  :to="`/games/${game.id}`"
                  class="btn btn-primary btn-sm"
                >
                  View Details
                </router-link>
                <a
                  v-if="game.githubUrl"
                  :href="game.githubUrl"
                  target="_blank"
                  class="btn btn-outline btn-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/games" class="btn btn-outline">
            View All Games
          </router-link>
        </div>
      </div>
    </section>

    <!-- Recent Writing Section -->
    <section class="recent-posts">
      <div class="container">
        <h2 class="section-title">Latest Writing</h2>
        <div class="posts-grid">
          <div
            v-for="writing in recentWritings"
            :key="writing.id"
            class="post-card card"
          >
            <div class="post-image">
              <img
                :src="writing.featuredImage"
                :alt="writing.title"
                class="featured-img"
              />
            </div>
            <div class="post-content">
              <div class="post-meta">
                <span class="post-date">{{
                  formatDate(writing.publishedAt)
                }}</span>
                <div class="post-tags">
                  <span
                    v-for="tag in writing.tags.slice(0, 2)"
                    :key="tag"
                    class="tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
              <h3 class="post-title">
                <router-link :to="`/writing/${writing.slug}`">
                  {{ writing.title }}
                </router-link>
              </h3>
              <p class="post-excerpt">{{ writing.excerpt }}</p>
              <router-link :to="`/writing/${writing.slug}`" class="read-more">
                Read More →
              </router-link>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/writing" class="btn btn-outline">
            View All Writing
          </router-link>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Enterprise Development</h3>
            <div class="skills-list">
              <span class="skill">Vue.js</span>
              <span class="skill">TypeScript</span>
              <span class="skill">GraphQL</span>
              <span class="skill">Java</span>
              <span class="skill">Enterprise SaaS</span>
              <span class="skill">Agile Development</span>
            </div>
          </div>
          <div class="skill-category">
            <h3>Game Development</h3>
            <div class="skills-list">
              <span class="skill">Unity</span>
              <span class="skill">Godot</span>
              <span class="skill">C#</span>
              <span class="skill">Game Design</span>
              <span class="skill">Narrative Design</span>
              <span class="skill">Interactive Fiction</span>
            </div>
          </div>
          <div class="skill-category">
            <h3>Writing & Publishing</h3>
            <div class="skills-list">
              <span class="skill">Horror Fiction</span>
              <span class="skill">Gaming Journalism</span>
              <span class="skill">Creative Writing</span>
              <span class="skill">Content Creation</span>
              <span class="skill">Blogging</span>
              <span class="skill">Poetry</span>
            </div>
          </div>
          <div class="skill-category">
            <h3>Infrastructure & Education</h3>
            <div class="skills-list">
              <span class="skill">OpenStack</span>
              <span class="skill">Cloud Engineering</span>
              <span class="skill">Computer Science Instruction</span>
              <span class="skill">Curriculum Development</span>
              <span class="skill">Public Speaking</span>
              <span class="skill">Community Building</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import { useGamesStore } from "@/stores/games";
import { useSoftwareStore } from "@/stores/software";
import { useWritingStore } from "@/stores/writing";

export default {
  name: "HomeView",
  setup() {
    const gamesStore = useGamesStore();
    const softwareStore = useSoftwareStore();
    const writingStore = useWritingStore();

    const featuredGames = computed(() => gamesStore.featuredGames.slice(0, 2));
    const featuredSoftware = computed(() =>
      softwareStore.featuredSoftware.slice(0, 2)
    );
    const recentWritings = computed(() => writingStore.recentWritings);

    const formatDate = (dateString) => {
      const [year, month, day] = dateString.split("-");
      return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    return {
      featuredGames,
      featuredSoftware,
      recentWritings,
      formatDate,
    };
  },
};
</script>

<style scoped>
.home-view {
  padding-bottom: 2rem;
}

/* Hero Section */
.hero {
  background: linear-gradient(
    135deg,
    var(--bg-secondary) 0%,
    var(--bg-tertiary) 100%
  );
  border-bottom: 1px solid var(--border-primary);
  color: var(--text-primary);
  padding: 4rem 0;
  margin-bottom: 4rem;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.highlight {
  color: var(--accent-blue);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.hero-image .image-placeholder {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image .image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Sections */
.featured-projects,
.recent-posts,
.skills {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--text-primary);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.project-card {
  overflow: hidden;
}

.project-image {
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  height: 200px;
}

.project-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.project-card:hover .project-thumbnail {
  transform: scale(1.05);
}

.project-image .image-placeholder {
  width: 100%;
  height: 200px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-primary);
  border-radius: 0.5rem;
}

.project-content h3 {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.project-content p {
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag-item {
  background: var(--accent-blue);
  color: var(--text-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* Posts Grid */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.post-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.post-image {
  overflow: hidden;
  height: 200px;
  border-radius: 0.5rem 0.5rem 0 0;
}

.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .featured-img {
  transform: scale(1.05);
}

.post-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.post-date {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  border: 1px solid var(--border-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.post-title {
  margin-bottom: 0.5rem;
}

.post-title a {
  color: var(--text-primary);
  text-decoration: none;
}

.post-title a:hover {
  color: var(--accent-blue);
}

.post-excerpt {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.read-more {
  color: var(--accent-blue);
  font-weight: 500;
  text-decoration: none;
}

.read-more:hover {
  color: var(--accent-blue-hover);
}

/* Skills Section */
.skills {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-primary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.skill-category h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
  text-align: center;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.skill {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  border: 1px solid var(--border-primary);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 500;
  box-shadow: 0 2px 5px var(--shadow-dark);
  transition: all 0.3s ease;
}

.skill:hover {
  background: var(--accent-blue);
  color: var(--text-primary);
  border-color: var(--accent-blue);
  transform: translateY(-2px);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image .image-placeholder {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  .projects-grid,
  .posts-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
