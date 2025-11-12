<template>
  <div class="software-view">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1 class="page-title">Software</h1>
        <p class="page-description">
          FOSS stuff I've worked on and shared with all y'all. If you want to
          know about my professional stuff, ask me in person. I've primarily
          been a contributor on large teams working on proprietary enterprise
          software, and it wouldn't be appropriate (or, likely, legal) to show
          that stuff here.
        </p>
      </header>

      <!-- Filter Section -->
      <div class="filters">
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'all' }"
          @click="setFilter('all')"
        >
          All Projects
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'featured' }"
          @click="setFilter('featured')"
        >
          Featured
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'active' }"
          @click="setFilter('active')"
        >
          Active
        </button>
        <button
          v-for="category in allCategories"
          :key="category"
          class="filter-btn"
          :class="{ active: activeFilter === category }"
          @click="setFilter(category)"
        >
          {{ category }}
        </button>
      </div>

      <!-- Software Grid -->
      <div class="software-grid">
        <div
          v-for="project in filteredSoftware"
          :key="project.id"
          class="software-card card"
        >
          <div class="software-image">
            <img
              :src="project.imageUrl"
              :alt="project.title"
              class="project-image"
            />
            <div class="software-overlay">
              <div class="overlay-actions">
                <router-link
                  :to="{ name: 'SoftwareDetail', params: { id: project.id } }"
                  class="btn btn-primary btn-sm"
                >
                  View Details
                </router-link>
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  class="btn btn-outline btn-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div class="software-content">
            <div class="software-header">
              <h3 class="software-title">
                <router-link
                  :to="{ name: 'SoftwareDetail', params: { id: project.id } }"
                >
                  {{ project.title }}
                </router-link>
              </h3>
              <div class="software-badges">
                <span v-if="project.featured" class="badge featured"
                  >Featured</span
                >
                <span v-if="project.status === 'active'" class="badge active"
                  >Active</span
                >
                <span
                  v-if="project.status === 'completed'"
                  class="badge completed"
                  >Completed</span
                >
              </div>
            </div>

            <div class="software-category">{{ project.category }}</div>

            <p class="software-description">{{ project.description }}</p>

            <div class="software-technologies">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
                @click="setTechnologyFilter(tech)"
              >
                {{ tech }}
              </span>
            </div>

            <div class="software-meta">
              <span class="software-date">{{
                formatDate(project.startDate)
              }}</span>
              <div class="software-links">
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  class="software-link"
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
                  v-if="project.appUrl"
                  :href="project.appUrl"
                  target="_blank"
                  class="software-link"
                  title="Try it now!"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredSoftware.length === 0" class="empty-state">
        <div class="empty-content">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M9.4,16.6L4.8,12L3.4,13.4L9.4,19.4L20.6,8.2L19.2,6.8L9.4,16.6Z"
            />
          </svg>
          <h3>No software found</h3>
          <p>
            Try adjusting your filters or check back later for new projects.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useSoftwareStore } from "@/stores/software";

export default {
  name: "SoftwareView",
  setup() {
    const softwareStore = useSoftwareStore();
    const activeFilter = ref("all");

    const allCategories = computed(() => softwareStore.allCategories);
    const allTechnologies = computed(() => softwareStore.allTechnologies);

    const filteredSoftware = computed(() => {
      if (activeFilter.value === "all") {
        return softwareStore.software;
      }
      if (activeFilter.value === "featured") {
        return softwareStore.featuredSoftware;
      }
      if (activeFilter.value === "active") {
        return softwareStore.activeSoftware;
      }
      if (activeFilter.value === "completed") {
        return softwareStore.completedSoftware;
      }
      // Filter by category
      if (allCategories.value.includes(activeFilter.value)) {
        return softwareStore.softwareByCategory(activeFilter.value);
      }
      // Filter by technology
      return softwareStore.softwareByTechnology(activeFilter.value);
    });

    const setFilter = (filter) => {
      activeFilter.value = filter;
    };

    const setTechnologyFilter = (tech) => {
      activeFilter.value = tech;
    };

    const formatDate = (dateString) => {
      if (!dateString) return "Recent"; // Handle undefined/null dates
      const [year, month, day] = dateString.split("-");
      return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });
    };

    return {
      activeFilter,
      allCategories,
      allTechnologies,
      filteredSoftware,
      setFilter,
      setTechnologyFilter,
      formatDate,
    };
  },
};
</script>

<style scoped>
.software-view {
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

/* Software Grid */
.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
}

.software-card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.software-card:hover {
  transform: translateY(-5px);
}

.software-image {
  position: relative;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 0.5rem;
  height: 250px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.software-card:hover .project-image {
  transform: scale(1.05);
}

.software-overlay {
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

.software-card:hover .software-overlay {
  opacity: 1;
}

.overlay-actions {
  display: flex;
  gap: 1rem;
}

.software-content {
  padding: 0 0.5rem;
}

.software-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.software-title {
  margin: 0;
  flex: 1;
}

.software-title a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.software-title a:hover {
  color: var(--accent-blue);
}

.software-badges {
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

.badge.active {
  background: #27ae60;
  color: white;
}

.badge.completed {
  background: #95a5a6;
  color: white;
}

.software-category {
  color: var(--text-tertiary);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.software-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.software-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--accent-blue);
  color: var(--text-primary);
}

.software-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-primary);
}

.software-date {
  color: var(--text-tertiary);
  font-size: 0.875rem;
}

.software-links {
  display: flex;
  gap: 0.75rem;
}

.software-link {
  color: var(--text-tertiary);
  transition: color 0.3s ease;
}

.software-link:hover {
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

  .software-grid {
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

  .software-header {
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
  .software-meta {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
