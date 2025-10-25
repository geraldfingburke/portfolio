import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("@/views/GamesView.vue"),
  },
  {
    path: "/games/:id",
    name: "GameDetail",
    component: () => import("@/views/GameDetailView.vue"),
    props: true,
  },
  {
    path: "/software",
    name: "Software",
    component: () => import("@/views/SoftwareView.vue"),
  },
  {
    path: "/software/:id",
    name: "SoftwareDetail",
    component: () => import("@/views/SoftwareDetailView.vue"),
    props: true,
  },
  {
    path: "/writing",
    name: "Writing",
    component: () => import("@/views/WritingView.vue"),
  },
  {
    path: "/writing/:slug",
    name: "WritingDetail",
    component: () => import("@/views/WritingDetailView.vue"),
    props: true,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/random",
    name: "Random",
    component: () => import("@/views/RandomView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// No admin routes, no auth guard needed

export default router;
