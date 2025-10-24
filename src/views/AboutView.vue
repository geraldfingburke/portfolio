<template>
  <div class="about-view">
    <div class="container">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="hero-content">
          <div class="hero-image">
            <div class="image-placeholder">
              <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
                <circle
                  cx="125"
                  cy="125"
                  r="120"
                  stroke="#3498db"
                  stroke-width="3"
                  fill="#f8f9fa"
                />
                <text
                  x="125"
                  y="135"
                  text-anchor="middle"
                  fill="#2c3e50"
                  font-size="20"
                  font-weight="600"
                >
                  Your Photo
                </text>
              </svg>
            </div>
          </div>
          <div class="hero-text">
            <h1>About Gerald Burke</h1>
            <p class="hero-subtitle">
              Writer, Educator & Game/Web/Software Developer
            </p>
            <p class="hero-description">
              I'm Gerald Burke, living and working in the Appalachian Mountains
              of Northeast Tennessee. I combine my passions for writing,
              education, and technology to create interactive stories,
              educational tools, and digital humanities projects that explore
              the intersection of narrative and technology.
            </p>
            <div class="hero-actions">
              <a
                href="https://geraldburke.com"
                class="btn btn-primary"
                target="_blank"
              >
                Visit My Current Site
              </a>
              <router-link to="/portfolio" class="btn btn-outline">
                View My Projects
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills-section">
        <h2 class="section-title">Skills & Expertise</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <div class="category-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>Frontend Development</h3>
            <p>
              Creating responsive, interactive user interfaces with modern
              frameworks and libraries.
            </p>
            <div class="skill-tags">
              <span>Vue.js</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>CSS3</span>
              <span>HTML5</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="category-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3>Backend Development</h3>
            <p>
              Building robust server-side applications, APIs, and database
              systems.
            </p>
            <div class="skill-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>REST APIs</span>
              <span>GraphQL</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="category-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3>Tools & Workflow</h3>
            <p>
              Utilizing modern development tools and best practices for
              efficient workflows.
            </p>
            <div class="skill-tags">
              <span>Git</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Figma</span>
              <span>Webpack</span>
              <span>Vite</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Timeline -->
      <section class="experience-section">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-date">2023 - Present</div>
              <h3>Senior Full-Stack Developer</h3>
              <h4>Your Company</h4>
              <p>
                Leading development of modern web applications using Vue.js,
                Node.js, and cloud technologies. Responsible for architecture
                decisions, code reviews, and mentoring junior developers.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-date">2021 - 2023</div>
              <h3>Full-Stack Developer</h3>
              <h4>Previous Company</h4>
              <p>
                Developed and maintained multiple client projects using various
                technologies. Collaborated with design teams to implement
                pixel-perfect user interfaces.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-date">2020 - 2021</div>
              <h3>Frontend Developer</h3>
              <h4>Startup Company</h4>
              <p>
                Built responsive web applications and contributed to the
                company's main product. Focused on performance optimization and
                user experience improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section">
        <h2 class="section-title">What I Value</h2>
        <div class="values-grid">
          <div class="value-item">
            <div class="value-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
                <path d="M3 12h6m6 0h6" />
              </svg>
            </div>
            <h3>Quality Code</h3>
            <p>
              Writing clean, maintainable, and well-documented code that follows
              best practices and industry standards.
            </p>
          </div>

          <div class="value-item">
            <div class="value-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
            </div>
            <h3>User Experience</h3>
            <p>
              Prioritizing intuitive design and seamless interactions to create
              applications that users love to use.
            </p>
          </div>

          <div class="value-item">
            <div class="value-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Collaboration</h3>
            <p>
              Working effectively with teams, sharing knowledge, and
              contributing to a positive development culture.
            </p>
          </div>

          <div class="value-item">
            <div class="value-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
            </div>
            <h3>Continuous Learning</h3>
            <p>
              Staying up-to-date with the latest technologies and continuously
              improving skills and knowledge.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="contact-content">
          <h2>Let's Work Together</h2>
          <p>
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>

          <div class="contact-methods">
            <a href="mailto:your.email@example.com" class="contact-method">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              <div>
                <h4>Email</h4>
                <p>your.email@example.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              class="contact-method"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              <div>
                <h4>LinkedIn</h4>
                <p>/in/yourprofile</p>
              </div>
            </a>

            <a href="https://github.com/yourusername" class="contact-method">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
              <div>
                <h4>GitHub</h4>
                <p>/yourusername</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about-view {
  padding: 2rem 0 4rem;
}

/* Hero Section */
.about-hero {
  margin-bottom: 6rem;
}

.hero-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
}

.hero-text h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.125rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

/* Section Titles */
.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
}

/* Skills Section */
.skills-section {
  margin-bottom: 6rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.skill-category {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
}

.category-icon {
  color: #3498db;
  margin-bottom: 1.5rem;
}

.skill-category h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.skill-category p {
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.skill-tags span {
  background: #ecf0f1;
  color: #555;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-tags span:hover {
  background: #3498db;
  color: white;
}

/* Experience Timeline */
.experience-section {
  margin-bottom: 6rem;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #3498db;
}

.timeline-item {
  position: relative;
  padding-left: 60px;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: 10px;
  top: 0;
  width: 20px;
  height: 20px;
  background: #3498db;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #3498db;
}

.timeline-date {
  color: #3498db;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  color: #2c3e50;
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
}

.timeline-content h4 {
  color: #7f8c8d;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.timeline-content p {
  color: #555;
  line-height: 1.6;
}

/* Values Section */
.values-section {
  background: #f8f9fa;
  padding: 4rem 0;
  margin-bottom: 6rem;
  border-radius: 2rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.value-item {
  text-align: center;
  padding: 2rem 1rem;
}

.value-icon {
  color: #3498db;
  margin-bottom: 1rem;
}

.value-item h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.value-item p {
  color: #555;
  line-height: 1.6;
}

/* Contact Section */
.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 2rem;
  text-align: center;
}

.contact-content h2 {
  color: white;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.contact-content > p {
  font-size: 1.125rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.contact-method:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  color: white;
}

.contact-method svg {
  flex-shrink: 0;
}

.contact-method h4 {
  color: white;
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.contact-method p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .timeline::before {
    left: 15px;
  }

  .timeline-item {
    padding-left: 50px;
  }

  .timeline-marker {
    left: 5px;
    width: 16px;
    height: 16px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .contact-methods {
    grid-template-columns: 1fr;
  }

  .contact-method {
    text-align: left;
  }
}
</style>
