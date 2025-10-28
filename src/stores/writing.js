import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Import featured images
import momaFeaturedImage from "@/assets/Writing/i-got-someone-at-the-moma-to-play-my-dumb-jam-game/featured.jpg";
import dispatcherFeaturedImage from "@/assets/Writing/choice-of-the-emergency-dispatcher/featured.jpg";

export const useWritingStore = defineStore("writing", () => {
  // State - Gerald Burke's Writing/Published Works
  const writings = ref([
    {
      id: 1,
      title: "I Got Someone at the MoMA to Play My Dumb Jam Game",
      slug: "moma-jam-game-superjump",
      folder: "i-got-someone-at-the-moma-to-play-my-dumb-jam-game",
      excerpt: "I genuinely did. It happened.",
      featuredImage: momaFeaturedImage,
      htmlFile:
        "/assets/Writing/i-got-someone-at-the-moma-to-play-my-dumb-jam-game/text.html",
      tags: ["Game Development", "Humor", "Ludum Dare"],
      category: "Games",
      featured: true,
      published: true,
      publishedAt: "2023-02-13",
      publication: "SUPERJUMP Magazine",
      externalUrl:
        "https://superjumpmagazine.com/i-got-someone-at-the-moma-to-play-my-dumb-jam-game/",
    },
    {
      id: 2,
      title: "Choice of The Emergency Dispatcher",
      slug: "choice-of-the-emergency-dispatcher",
      folder: "choice-of-the-emergency-dispatcher",
      excerpt:
        "What would you do if a life was on the line? What if it was your own? It's just a game... right?",
      featuredImage: dispatcherFeaturedImage,
      htmlFile: "/assets/Writing/choice-of-the-emergency-dispatcher/text.html",
      tags: ["Horror", "Podcast", "Technology"],
      category: "Horror",
      featured: true,
      published: true,
      publishedAt: "2025-05-25",
      publication: "The NoSleep Podcast",
      externalUrl: "https://www.thenosleeppodcast.com/episodes/s22/22x24",
    },
  ]);

  // Getters
  const publishedWritings = computed(() =>
    writings.value.filter((writing) => writing.published)
  );

  const featuredWritings = computed(() =>
    writings.value.filter((writing) => writing.featured && writing.published)
  );

  const recentWritings = computed(() =>
    publishedWritings.value
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, 3)
  );

  const getWritingBySlug = (slug) =>
    writings.value.find(
      (writing) => writing.slug === slug && writing.published
    );

  const getWritingById = (id) =>
    writings.value.find((writing) => writing.id === parseInt(id));

  const writingsByTag = (tag) =>
    publishedWritings.value.filter((writing) => writing.tags.includes(tag));

  const writingsByCategory = (category) =>
    publishedWritings.value.filter((writing) => writing.category === category);

  const allTags = computed(() => {
    const tags = writings.value.flatMap((writing) => writing.tags);
    return [...new Set(tags)].sort();
  });

  const allCategories = computed(() => {
    const categories = writings.value.map((writing) => writing.category);
    return [...new Set(categories)].sort();
  });

  // Simple return - no CMS functionality needed
  return {
    writings,
    publishedWritings,
    featuredWritings,
    recentWritings,
    getWritingBySlug,
    getWritingById,
    writingsByTag,
    writingsByCategory,
    allTags,
    allCategories,
  };
});
