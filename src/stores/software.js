import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useSoftwareStore = defineStore("software", () => {
  // State - Gerald Burke's Software Development Projects
  const software = ref([
    {
      id: 1,
      title: "ECRS Enterprise Software",
      description:
        "Full-stack development on large-scale enterprise retail automation SaaS application serving major retail chains.",
      longDescription:
        "Working with Vue.js, TypeScript, GraphQL, and Java to develop and maintain a comprehensive retail automation platform. Responsibilities include feature development, code review, CI/CD pipeline management, and Agile team collaboration on flagship products serving enterprise clients.",
      technologies: ["Vue.js", "TypeScript", "GraphQL", "Java", "GitLab CI/CD"],
      imageUrl: "/images/ecrs-software.jpg",
      githubUrl: null,
      demoUrl: null,
      featured: true,
      category: "Enterprise Software",
      startDate: "2025-01-01",
      status: "active",
    },
    {
      id: 2,
      title: "State Title and Registration System (STaRS)",
      description:
        "Vue.js SPA modernizing enterprise toolsets for Tennessee county clerk offices across the state.",
      longDescription:
        "Led front-end development on STaRS, a comprehensive single-page application built with Vue.js to streamline title and registration workflows for county clerk offices. Worked on an Agile team to deliver new features and enhanced functionality for this critical government infrastructure.",
      technologies: [
        "Vue.js",
        "SPA",
        "Enterprise Software",
        "Government Systems",
      ],
      imageUrl: "/images/stars-system.jpg",
      githubUrl: null,
      demoUrl: null,
      featured: true,
      category: "Government Software",
      startDate: "2020-01-01",
      status: "completed",
    },
    {
      id: 3,
      title: "Northeast State Cyber Range",
      description:
        "Cloud infrastructure engineering using OpenStack Heat Orchestration to support scalable educational and training deployments.",
      longDescription:
        "Designed and implemented cloud infrastructure solutions for Northeast State's Cyber Range, including a notable scalable Freeware Doom VLAN server for student organizations. Utilized Heat Orchestration in OpenStack to create flexible, educational technology environments.",
      technologies: [
        "OpenStack",
        "Heat Orchestration",
        "Cloud Engineering",
        "VLAN",
        "Infrastructure",
      ],
      imageUrl: "/images/cyber-range.jpg",
      githubUrl: null,
      demoUrl: null,
      featured: false,
      category: "Cloud Infrastructure",
      startDate: "2023-01-01",
      status: "completed",
    },
    {
      id: 4,
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
    {
      id: 5,
      title: "Plateau Tarot API",
      description:
        "API service powering tarot card reading applications with comprehensive card data and reading algorithms.",
      longDescription:
        "A specialized API that provides tarot card data, reading algorithms, and interpretation services. Features complete card database with imagery, meanings, and context-sensitive interpretations. Designed to power web and mobile tarot reading applications with flexible reading layouts.",
      technologies: [
        "Python",
        "FastAPI",
        "SQLite",
        "RESTful API",
        "Data Management",
      ],
      imageUrl: "/images/plateau-tarot.jpg",
      githubUrl: "https://github.com/geraldfingburke/plateau-tarot",
      demoUrl: "https://plateau-tarot-api.vercel.app",
      featured: false,
      category: "Web APIs",
      startDate: "2022-03-01",
      status: "completed",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Vue.js portfolio website showcasing software development, game development, and writing work with modern design.",
      longDescription:
        "A comprehensive portfolio website built with Vue 3, showcasing professional software development work, game development projects, and published writing. Features responsive design, dark theme, and optimized performance. Demonstrates proficiency in modern frontend development practices.",
      technologies: [
        "Vue.js",
        "Vue Router",
        "Pinia",
        "CSS Grid",
        "Responsive Design",
      ],
      imageUrl: "/images/portfolio-website.jpg",
      githubUrl: "https://github.com/geraldfingburke/portfolio",
      demoUrl: "https://geraldburke.com",
      featured: false,
      category: "Web Development",
      startDate: "2025-01-01",
      status: "active",
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
