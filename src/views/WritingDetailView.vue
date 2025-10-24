<template>
  <div class="writing-detail-view">
    <div class="container">
      <div v-if="writing" class="writing-detail">
        <!-- Back Navigation -->
        <div class="back-nav">
          <router-link to="/writing" class="back-link">
            ← Back to Writing
          </router-link>
        </div>

        <!-- Writing Header -->
        <header class="writing-header">
          <div class="writing-meta">
            <span class="writing-category">{{ writing.category }}</span>
            <span class="writing-date">{{
              formatDate(writing.publishedAt)
            }}</span>
          </div>
          <h1 class="writing-title">{{ writing.title }}</h1>
          <p class="writing-excerpt">{{ writing.excerpt }}</p>

          <div class="writing-tags">
            <span v-for="tag in writing.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>

          <div class="writing-info">
            <span class="publication"
              >Published in {{ writing.publication }}</span
            >
            <a
              v-if="writing.externalUrl"
              :href="writing.externalUrl"
              target="_blank"
              class="external-link"
            >
              Read on Original Site
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
          </div>
        </header>

        <!-- Writing Content -->
        <article class="writing-content">
          <div class="content-body" v-html="formattedContent"></div>
        </article>

        <!-- Author Info -->
        <div class="author-section">
          <div class="author-info">
            <div class="author-avatar">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                />
              </svg>
            </div>
            <div class="author-details">
              <h4>Gerald Burke</h4>
              <p>
                Writer, educator, and software developer in Northeast Tennessee.
                Published in NoSleep Podcast, SUPERJUMP, and various other
                publications.
              </p>
            </div>
          </div>
        </div>

        <!-- Related Writing -->
        <section v-if="relatedWritings.length > 0" class="related-section">
          <h2>More Writing</h2>
          <div class="related-writings">
            <article
              v-for="relatedWriting in relatedWritings"
              :key="relatedWriting.id"
              class="related-writing-card"
            >
              <router-link
                :to="{
                  name: 'WritingDetail',
                  params: { slug: relatedWriting.slug },
                }"
              >
                <div class="related-content">
                  <span class="related-category">{{
                    relatedWriting.category
                  }}</span>
                  <h3>{{ relatedWriting.title }}</h3>
                  <p>{{ relatedWriting.excerpt }}</p>
                  <div class="related-meta">
                    <span class="related-date">{{
                      formatDate(relatedWriting.publishedAt)
                    }}</span>
                    <span class="related-publication">{{
                      relatedWriting.publication
                    }}</span>
                  </div>
                </div>
              </router-link>
            </article>
          </div>
        </section>
      </div>

      <!-- Not Found State -->
      <div v-else class="not-found">
        <div class="not-found-content">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
            />
          </svg>
          <h2>Writing Not Found</h2>
          <p>
            The writing you're looking for doesn't exist or has been removed.
          </p>
          <router-link to="/writing" class="btn btn-primary">
            Back to Writing
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useWritingStore } from "@/stores/writing";

export default {
  name: "WritingDetailView",
  props: {
    slug: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const route = useRoute();
    const writingStore = useWritingStore();

    // Get the current writing piece
    const writing = computed(() =>
      writingStore.getWritingBySlug(props.slug || route.params.slug)
    );

    // Get related writings (same category or tags)
    const relatedWritings = computed(() => {
      if (!writing.value) return [];

      return writingStore.publishedWritings
        .filter((w) => w.id !== writing.value.id)
        .filter(
          (w) =>
            w.category === writing.value.category ||
            w.tags.some((tag) => writing.value.tags.includes(tag))
        )
        .slice(0, 3);
    });

    // Format content with basic markdown-like formatting
    const formattedContent = computed(() => {
      if (!writing.value?.content) return "";

      return writing.value.content
        .replace(/\n\n/g, "</p><p>")
        .replace(/^(.+)$/, "<p>$1</p>")
        .replace(/^# (.+)$/gm, "<h1>$1</h1>")
        .replace(/^## (.+)$/gm, "<h2>$1</h2>")
        .replace(/^### (.+)$/gm, "<h3>$1</h3>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br>");
    });

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    return {
      writing,
      relatedWritings,
      formattedContent,
      formatDate,
    };
  },
};
</script>

<style scoped>
.writing-detail-view {
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

/* Writing Header */
.writing-header {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.writing-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.writing-category {
  color: var(--accent-blue);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

.writing-date {
  color: var(--text-tertiary);
  font-size: 0.875rem;
}

.writing-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.writing-excerpt {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.writing-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.writing-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-primary);
}

.publication {
  color: var(--text-tertiary);
  font-style: italic;
}

.external-link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--accent-blue);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.external-link:hover {
  color: var(--accent-blue-dark);
}

/* Writing Content */
.writing-content {
  max-width: 800px;
  margin: 0 auto 4rem;
}

.content-body {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
}

.content-body :deep(h1) {
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
}

.content-body :deep(h2) {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem;
}

.content-body :deep(h3) {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.25rem 0 0.5rem;
}

.content-body :deep(p) {
  margin-bottom: 1.5rem;
}

.content-body :deep(em) {
  font-style: italic;
  color: var(--text-primary);
}

.content-body :deep(strong) {
  font-weight: 600;
  color: var(--text-primary);
}

/* Author Section */
.author-section {
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 0.5rem;
  border: 1px solid var(--border-primary);
}

.author-info {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.author-avatar {
  flex-shrink: 0;
}

.author-avatar svg {
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  border-radius: 50%;
  padding: 0.5rem;
}

.author-details h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.author-details p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Related Writing */
.related-section {
  max-width: 800px;
  margin: 0 auto;
}

.related-section h2 {
  color: var(--text-primary);
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.related-writings {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.related-writing-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.related-writing-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-blue);
}

.related-writing-card a {
  display: block;
  text-decoration: none;
  color: inherit;
}

.related-content {
  padding: 1.5rem;
}

.related-category {
  color: var(--accent-blue);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

.related-writing-card h3 {
  color: var(--text-primary);
  font-size: 1.125rem;
  margin: 0.5rem 0 0.75rem;
  line-height: 1.4;
}

.related-writing-card p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.related-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

.related-publication {
  font-style: italic;
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
@media (max-width: 768px) {
  .writing-title {
    font-size: 2rem;
  }

  .writing-excerpt {
    font-size: 1rem;
  }

  .writing-meta {
    flex-direction: column;
    gap: 0.5rem;
  }

  .writing-info {
    flex-direction: column;
    gap: 0.5rem;
  }

  .author-info {
    flex-direction: column;
    text-align: center;
  }

  .related-writings {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .writing-header,
  .writing-content,
  .author-section,
  .related-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
