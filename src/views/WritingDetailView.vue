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
              >Published by {{ writing.publication }}</span
            >
            <a
              v-if="writing.externalUrl"
              :href="writing.externalUrl"
              target="_blank"
              class="external-link"
            >
              View on Original Site
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
import { computed, ref, onMounted, watch } from "vue";
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
    const htmlContent = ref("");

    // Get the current writing piece
    const writing = computed(() =>
      writingStore.getWritingBySlug(props.slug || route.params.slug)
    );

    // Load HTML content from file
    const loadHtmlContent = async () => {
      if (!writing.value?.htmlFile) {
        htmlContent.value = "";
        return;
      }

      try {
        const response = await fetch(writing.value.htmlFile);
        htmlContent.value = await response.text();
      } catch (error) {
        console.error("Error loading HTML content:", error);
        htmlContent.value = "<p>Error loading content.</p>";
      }
    };

    // Load content when component mounts or writing changes
    onMounted(() => {
      loadHtmlContent();
    });

    watch(writing, () => {
      loadHtmlContent();
    });

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

    // Use loaded HTML content instead of formatting markdown
    const formattedContent = computed(() => htmlContent.value);

    const formatDate = (dateString) => {
      const [year, month, day] = dateString.split("-");
      return new Date(year, month - 1, day).toLocaleDateString("en-US", {
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
  color: var(--text-primary);
  line-height: 1.8;
  font-size: 1.1rem;
}

.content-body :deep(h1) {
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 600;
  margin: 2.5rem 0 1.25rem;
  line-height: 1.3;
}

.content-body :deep(h2) {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  line-height: 1.4;
}

.content-body :deep(h3) {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.75rem 0 0.75rem;
  line-height: 1.4;
}

.content-body :deep(p) {
  margin-bottom: 1.5rem;
  text-align: justify;
}

.content-body :deep(em) {
  font-style: italic;
  color: var(--text-primary);
}

.content-body :deep(strong) {
  font-weight: 600;
  color: var(--text-primary);
}

.content-body :deep(a) {
  color: var(--accent-blue);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.content-body :deep(a:hover) {
  border-bottom-color: var(--accent-blue);
}

.content-body :deep(blockquote) {
  margin: 2.5rem auto;
  padding: 1.5rem 2rem;
  max-width: 600px;
  background: var(--bg-secondary);
  border-left: 4px solid var(--accent-blue);
  border-radius: 0.5rem;
  font-style: italic;
  color: var(--text-primary);
  font-size: 1.15rem;
  line-height: 1.7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.content-body :deep(blockquote p) {
  margin: 0;
  text-align: left;
}

.content-body :deep(blockquote p:not(:last-child)) {
  margin-bottom: 1rem;
}

.content-body :deep(ul),
.content-body :deep(ol) {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.content-body :deep(li) {
  margin-bottom: 0.75rem;
  line-height: 1.7;
}

.content-body :deep(code) {
  background: var(--bg-secondary);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: "Courier New", monospace;
  font-size: 0.95em;
  color: var(--accent-blue);
}

.content-body :deep(pre) {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
  border: 1px solid var(--border-primary);
}

.content-body :deep(pre code) {
  background: none;
  padding: 0;
  color: var(--text-primary);
}

.content-body :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin: 2rem auto;
  display: block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.content-body :deep(hr) {
  border: none;
  border-top: 2px solid var(--border-primary);
  margin: 3rem 0;
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
