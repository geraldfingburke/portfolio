import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useSoftwareStore = defineStore("software", () => {
  // State - Gerald Burke's Software Development Projects
  const software = ref([
    {
      id: 1,
      title: "Dossier",
      description:
        "A containerized, AI powered RSS digest that sends personalized summaries of your favorite feeds to your email",
      longDescription:
        "A full-stack leaderboard management system featuring a RESTful API built with modern backend technologies and a responsive front-end interface. Includes user authentication, score submission validation, and real-time updates. Designed for easy integration with games and applications.",
      technologies: ["Go", "Vue.js", "PostgreSQL", "Docker", "Ollama"],
      imageUrl: "/assets/Software/dossier.jpg",
      githubUrl: "https://github.com/geraldfingburke/dossier",
      featured: true,
      category: "Applications",
      startDate: "2025-10-31",
      status: "completed",
    },
    {
      id: 2,
      title: "Plateau Tarot API",
      description:
        "API service powering tarot card reading applications with comprehensive card data and reading algorithms.",
      longDescription:
        "A specialized API that provides tarot card data, reading algorithms, and interpretation services. Features complete card database with imagery, meanings, and context-sensitive interpretations. Designed to power web and mobile tarot reading applications with flexible reading layouts.",
      technologies: ["RESTful API", "Data Management"],
      imageUrl: "/images/plateau-tarot.jpg",
      githubUrl: "https://github.com/geraldfingburke/plateau-tarot",
      demoUrl: "https://plateau-tarot-api.vercel.app",
      featured: false,
      category: "Web APIs",
      startDate: "2022-03-01",
      status: "completed",
    },
    {
      id: 3,
      title: "Simple Leaderboard API",
      description:
        "RESTful API service for managing game leaderboards with front-end interface and comprehensive documentation.",
      longDescription:
        "A full-stack leaderboard management system featuring a RESTful API built with modern backend technologies and a responsive front-end interface. Includes user authentication, score submission validation, and real-time updates. Designed for easy integration with games and applications.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "RESTful API",
        "Authentication",
      ],
      imageUrl: "/images/leaderboard-api.jpg",
      githubUrl: "https://github.com/geraldfingburke/simple-leaderboard",
      demoUrl: "https://simple-leaderboard-demo.herokuapp.com",
      featured: true,
      category: "Web APIs",
      startDate: "2022-06-01",
      status: "completed",
    },
  ]);

  // Getters
  const featuredSoftware = computed(() =>
    software.value.filter((project) => project.featured)
  );

  const activeSoftware = computed(() =>
    software.value.filter((project) => project.status === "active")
  );

  const completedSoftware = computed(() =>
    software.value.filter((project) => project.status === "completed")
  );

  const getSoftwareById = (id) =>
    software.value.find((project) => project.id === parseInt(id));

  const softwareByTechnology = (tech) =>
    software.value.filter((project) => project.technologies.includes(tech));

  const softwareByCategory = (category) =>
    software.value.filter((project) => project.category === category);

  const softwareByStatus = (status) =>
    software.value.filter((project) => project.status === status);

  const allCategories = computed(() => {
    const categories = software.value.map((project) => project.category);
    return [...new Set(categories)].sort();
  });

  const allTechnologies = computed(() => {
    const technologies = software.value.flatMap(
      (project) => project.technologies
    );
    return [...new Set(technologies)].sort();
  });

  // Simple return - no CMS functionality needed
  return {
    software,
    featuredSoftware,
    activeSoftware,
    completedSoftware,
    getSoftwareById,
    softwareByTechnology,
    softwareByCategory,
    softwareByStatus,
    allCategories,
    allTechnologies,
  };
});
