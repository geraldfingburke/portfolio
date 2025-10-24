<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
/* CSS Custom Properties for Dark Theme */
:root {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --bg-tertiary: #21262d;
  --text-primary: #f0f6fc;
  --text-secondary: #8b949e;
  --text-muted: #6e7681;
  --accent-blue: #58a6ff;
  --accent-blue-hover: #1f6feb;
  --border-primary: #30363d;
  --border-secondary: #21262d;
  --shadow-dark: rgba(0, 0, 0, 0.3);
  --shadow-darker: rgba(0, 0, 0, 0.5);
}

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* Account for fixed header */
}

/* Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}

p {
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

/* Links */
a {
  color: var(--accent-blue);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--accent-blue-hover);
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--accent-blue);
  color: var(--text-primary);
}

.btn-primary:hover {
  background-color: var(--accent-blue-hover);
  color: var(--text-primary);
}

.btn-secondary {
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

.btn-secondary:hover {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}

.btn-outline {
  background-color: transparent;
  color: var(--accent-blue);
  border: 2px solid var(--accent-blue);
}

.btn-outline:hover {
  background-color: var(--accent-blue);
  color: var(--bg-primary);
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Grid */
.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Cards */
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px var(--shadow-dark);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 25px var(--shadow-darker);
  border-color: var(--border-secondary);
}

/* Responsive */
@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }

  .container {
    padding: 0 1rem;
  }

  .grid {
    gap: 1rem;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease;
}

/* Utility Classes */
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}

.mt-1 {
  margin-top: 0.5rem;
}
.mt-2 {
  margin-top: 1rem;
}
.mt-3 {
  margin-top: 1.5rem;
}
.mt-4 {
  margin-top: 2rem;
}

.mb-1 {
  margin-bottom: 0.5rem;
}
.mb-2 {
  margin-bottom: 1rem;
}
.mb-3 {
  margin-bottom: 1.5rem;
}
.mb-4 {
  margin-bottom: 2rem;
}

.p-1 {
  padding: 0.5rem;
}
.p-2 {
  padding: 1rem;
}
.p-3 {
  padding: 1.5rem;
}
.p-4 {
  padding: 2rem;
}
</style>
