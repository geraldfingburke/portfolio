<template>
  <div class="software-detail-view">
    <div class="container">
      <div v-if="software" class="software-detail">
        <!-- Back Navigation -->
        <div class="back-nav">
          <router-link to="/software" class="back-link">
            ← Back to Software
          </router-link>
        </div>

        <!-- Software Header -->
        <header class="software-header">
          <div class="software-badges">
            <span v-if="software.featured" class="badge featured"
              >Featured Project</span
            >
            <span v-if="software.status === 'active'" class="badge active"
              >Active</span
            >
            <span v-if="software.status === 'completed'" class="badge completed"
              >Completed</span
            >
          </div>
          <h1 class="software-title">{{ software.title }}</h1>
          <p class="software-subtitle">{{ software.description }}</p>
          <div class="software-category">{{ software.category }}</div>

          <div class="software-actions">
            <a
              v-if="software.appUrl"
              :href="software.appUrl"
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
                  d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                />
              </svg>
              Try it now!
            </a>
            <a
              v-if="software.githubUrl"
              :href="software.githubUrl"
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
                  d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
              View Source
            </a>
          </div>
        </header>

        <!-- Software Image -->
        <div class="software-image">
          <img
            :src="software.imageUrl"
            :alt="software.title"
            class="software-main-image"
          />
        </div>

        <!-- Software Info Grid -->
        <div class="software-info-grid">
          <!-- Main Content -->
          <div class="software-content">
            <section class="software-section">
              <h2>About This Project</h2>
              <div class="software-description">
                {{ software.longDescription }}
              </div>
            </section>

            <!-- Technologies Used -->
            <section class="software-section">
              <h2>Technologies Used</h2>
              <div class="technologies-grid">
                <div
                  v-for="tech in software.technologies"
                  :key="tech"
                  class="tech-card"
                >
                  <span class="tech-name">{{ tech }}</span>
                </div>
              </div>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="software-sidebar">
            <!-- Software Details -->
            <div class="sidebar-card">
              <h3>Project Details</h3>
              <div class="detail-item">
                <span class="label">Category:</span>
                <span class="value">{{ software.category }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Start Date:</span>
                <span class="value">{{ formatDate(software.startDate) }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Status:</span>
                <span class="value status" :class="software.status">
                  {{ formatStatus(software.status) }}
                </span>
              </div>
            </div>

            <!-- Links -->
            <div
              v-if="software.appUrl || software.githubUrl"
              class="sidebar-card"
            >
              <h3>Links</h3>
              <div class="links-list">
                <a
                  v-if="software.appUrl"
                  :href="software.appUrl"
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
                      d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                    />
                  </svg>
                  Try it now!
                </a>
                <a
                  v-if="software.githubUrl"
                  :href="software.githubUrl"
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
          <h2>Software Project Not Found</h2>
          <p>
            The project you're looking for doesn't exist or has been removed.
          </p>
          <router-link to="/software" class="btn btn-primary"
            >Back to Software</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useSoftwareStore } from "@/stores/software";

export default {
  name: "SoftwareDetailView",
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
  },
  setup(props) {
    const route = useRoute();
    const softwareStore = useSoftwareStore();

    const software = computed(() =>
      softwareStore.getSoftwareById(props.id || route.params.id)
    );

    const formatDate = (dateString) => {
      const [year, month, day] = dateString.split("-");
      return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });
    };

    const formatStatus = (status) => {
      const statusMap = {
        active: "Active",
        completed: "Completed",
        maintenance: "Maintenance",
      };
      return statusMap[status] || status;
    };

    return {
      software,
      formatDate,
      formatStatus,
    };
  },
};
</script>

<style scoped>
.software-detail-view {
  padding: 2rem 0 4rem;
}

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

.software-header {
  text-align: center;
  margin-bottom: 3rem;
}

.software-badges {
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

.badge.active {
  background: #27ae60;
  color: white;
}

.badge.completed {
  background: #95a5a6;
  color: white;
}

.software-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.software-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 1rem;
  line-height: 1.6;
}

.software-category {
  color: var(--text-tertiary);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
}

.software-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.software-image {
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  overflow: hidden;
  height: 400px;
}

.software-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.software-info-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.software-section {
  margin-bottom: 3rem;
}

.software-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.software-description {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
}

.technologies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.tech-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.tech-card:hover {
  border-color: var(--accent-blue);
  transform: translateY(-2px);
}

.tech-name {
  font-weight: 500;
  color: var(--text-primary);
}

.software-sidebar {
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

.status.active {
  color: #27ae60;
}

.status.completed {
  color: #95a5a6;
}

.status.maintenance {
  color: #f39c12;
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

@media (max-width: 968px) {
  .software-info-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .software-title {
    font-size: 2rem;
  }

  .software-subtitle {
    font-size: 1rem;
  }

  .software-actions {
    flex-direction: column;
    align-items: center;
  }

  .technologies-grid {
    grid-template-columns: 1fr;
  }
}
</style>
