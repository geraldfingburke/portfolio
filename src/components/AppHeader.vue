<template>
  <header class="header">
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <!-- Logo/Brand -->
          <router-link to="/" class="nav-brand">
            <h2>Gerald Burke</h2>
          </router-link>

          <!-- Mobile Menu Toggle -->
          <button
            class="mobile-toggle"
            @click="toggleMobileMenu"
            :class="{ 'is-active': isMobileMenuOpen }"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <!-- Navigation Links -->
          <div class="nav-menu" :class="{ 'is-active': isMobileMenuOpen }">
            <router-link to="/" class="nav-link" @click="closeMobileMenu">
              Home
            </router-link>
            <router-link to="/games" class="nav-link" @click="closeMobileMenu">
              Games
            </router-link>
            <router-link
              to="/software"
              class="nav-link"
              @click="closeMobileMenu"
            >
              Software
            </router-link>
            <router-link
              to="/writing"
              class="nav-link"
              @click="closeMobileMenu"
            >
              Writing
            </router-link>
            <router-link to="/about" class="nav-link" @click="closeMobileMenu">
              About
            </router-link>
            <router-link to="/random" class="nav-link" @click="closeMobileMenu">
              Random
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AppHeader",
  setup() {
    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
    };
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-primary);
  box-shadow: 0 2px 10px var(--shadow-dark);
}

.navbar {
  padding: 1rem 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h2 {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--accent-blue);
}

.nav-link.router-link-active {
  color: var(--accent-blue);
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-blue);
}

/* Mobile Menu Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 30px;
  height: 30px;
}

.mobile-toggle span {
  width: 100%;
  height: 3px;
  background-color: var(--text-primary);
  margin: 2px 0;
  transition: 0.3s;
  transform-origin: center;
}

.mobile-toggle.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-toggle.is-active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-primary);
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    box-shadow: 0 2px 10px var(--shadow-dark);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .nav-menu.is-active {
    transform: translateX(0);
  }

  .nav-link {
    padding: 1rem 2rem;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid var(--border-primary);
  }

  .nav-link:last-child {
    border-bottom: none;
  }
}
</style>
