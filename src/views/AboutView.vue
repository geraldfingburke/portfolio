<template>
  <div class="about-view">
    <div class="container">
      <h1 class="page-title">My Journey</h1>

      <div class="cv-notice">
        <p>
          If you're here for my professional summary, grab my CV
          <a href="#" class="cv-link">here</a>
        </p>
      </div>

      <div class="timeline">
        <div
          v-for="(event, index) in timelineEvents"
          :key="event.id"
          class="timeline-item"
          :class="{
            expanded: event.expanded,
            left: index % 2 === 0,
            right: index % 2 === 1,
          }"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="timeline-year">{{ event.year }}</h3>
              <h2 class="timeline-title">{{ event.title }}</h2>
            </div>
            <transition name="expand">
              <div v-if="event.expanded" class="timeline-details">
                <img
                  v-if="event.image"
                  :src="event.image"
                  :alt="event.title"
                  class="timeline-image"
                />
                <p class="timeline-description">{{ event.description }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import img1 from "@/assets/MyJourney/young-gerald.jpg";
import img2 from "@/assets/MyJourney/2p2s.png";
import img3 from "@/assets/MyJourney/adulting.jpg";
import img4 from "@/assets/MyJourney/college-1.jpg";
import img5 from "@/assets/MyJourney/trigamedev.jpg";
import img6 from "@/assets/MyJourney/college-2.jpg";
import img7 from "@/assets/MyJourney/bis.jpg";
import img8 from "@/assets/MyJourney/professor.jpg";
import img9 from "@/assets/MyJourney/grind.jpg";

const timelineEvents = ref([
  {
    id: 1,
    year: "1992-2006",
    title: "Young Gerald",
    description:
      "I started making games on pen and paper at a very young age. I was a voracious reader and an unstoppable writer. No one that knew me then is surprised by what I'm up to now.",
    image: img1,
    expanded: true,
  },
  {
    id: 2,
    year: "2006-2010",
    title: "Teen Years",
    description:
      "I was an absolutely insufferable teen. During this period, I mostly gave up on various hobbies for the sake of playing music. You can actually read that story in my writing section, 'A Brief History of My Shitty Bands'.",
    image: img2,
    expanded: true,
  },
  {
    id: 3,
    year: "2010-2014",
    title: "Let's Adulting",
    description:
      "As soon as I hit 18, I moved to Tennessee and married the first person I met. I worked a series of retail and warehouse gigs and had my first two children during this time.",
    image: img3,
    expanded: true,
  },
  {
    id: 4,
    year: "2014-2016",
    title: "Back to School",
    description:
      "I loved games, so I wanted to learn how to make them. I enrolled at a local university and studied Digital Media. I spent two years questioning my major, mismanaging my time, and generally flunking out before officially resigning in 2016. I was now both a high school and college dropout with two kids and no plan.",
    image: img4,
    expanded: true,
  },
  {
    id: 5,
    year: "2016-2018",
    title: "Figuring It Out",
    description:
      "I decided that I wanted to do make games, like, actually make them. School didn't really teach me anything about game development, so I started teaching myself. I worked a steady job and put all my spare time into figuring out this game stuff. This is when I started the Tri-Cities Game Developers. Now the much pithier TriGameDev.",
    image: img5,
    expanded: true,
  },
  {
    id: 6,
    year: "2018-2020",
    title: "Back to School... Again",
    description:
      "If you want to make games, you pretty much have to learn to code. In teaching myself programming, I fell head over heels in love. The raw creative power of willing things into a digital existence was and remains intoxicating to me. I decided to go back and actually study programming. While maintining a full-time job, two young children, a failing marriage, and my own hobbies, I spent two years hammering out an Associate's in Computer Programming. I finished in 2020, a year that will be remembered for nothing in particular.",
    image: img6,
    expanded: true,
  },
  {
    id: 7,
    year: "2020-2022",
    title: "Devving and Jeffing",
    description:
      "Right out of school, I landed a junior web gig at a local software firm. I spent a few years there learning the ropes and getting my feet wet with technologies and processes that were new to me. I met and worked with a lot of great people and thoroughly enjoyed my introduction to the industry.",
    image: img7,
    expanded: true,
  },
  {
    id: 8,
    year: "2022-2025",
    title: "Shifting into Education",
    description:
      "My second foray in formal education was much more successful than my first. From my graduation in 2020, I continued pursuing my Bachelor's and was accepted into the Master's program at Georgia Tech. My ultimate goal was to move into teaching. In 2023, I finally got that opportunity and was offered an instructor position at my alma mater. I loved the experience there. I've never experienced anything quite as rewarding as educating the next generation of developers. But I still had rubber on the wheels and I was itching to get back to active development.",
    image: img8,
    expanded: true,
  },
  {
    id: 9,
    year: "2025-Present",
    title: "Back to the Grind",
    description:
      "There's nothing that quite matches the grind of active development. It's a feeling that I missed dearly while teaching. I went back into full time development and intend to stay for the foreseeable future.",
    image: img9,
    expanded: true,
  },
]);

// Intersection Observer for scroll animations
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  // Observe all timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => observer.observe(item));
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.about-view {
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 3rem;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 2rem;
}

.cv-notice {
  text-align: center;
  margin-bottom: 4rem;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
}

.cv-notice p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin: 0;
}

.cv-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.cv-link:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

.timeline {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 0;
  min-height: 100vh;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--primary-color);
  z-index: 0;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Animation states for left items */
.timeline-item.left {
  justify-content: flex-start;
  transform: translateX(-100px);
}

.timeline-item.left.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Animation states for right items */
.timeline-item.right {
  justify-content: flex-end;
  transform: translateX(100px);
}

.timeline-item.right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Content positioning */
.timeline-item.left .timeline-content {
  margin-right: auto;
  margin-left: 0;
  width: calc(50% - 40px);
}

.timeline-item.left .timeline-marker {
  left: 50%;
  transform: translateX(-50%);
}

.timeline-item.right .timeline-content {
  margin-left: auto;
  margin-right: 0;
  width: calc(50% - 40px);
}

.timeline-item.right .timeline-marker {
  left: 50%;
  transform: translateX(-50%);
}

.timeline-marker {
  position: absolute;
  top: 8px;
  width: 24px;
  height: 24px;
  background: var(--primary-color);
  border: 4px solid var(--bg-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--primary-color);
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-item.expanded .timeline-marker {
  background: var(--primary-hover);
  box-shadow: 0 0 0 4px var(--primary-hover);
}

.timeline-content {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  border-color: var(--primary-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.timeline-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.timeline-year {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  min-width: 80px;
}

.timeline-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0;
  flex: 1;
}

.expand-icon {
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 300;
  line-height: 1;
  transition: transform 0.3s ease;
  user-select: none;
}

.timeline-item.expanded .expand-icon {
  transform: rotate(180deg);
}

.timeline-details {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.timeline-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid var(--border-color);
}

.timeline-description {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1.05rem;
  margin: 0;
}

/* Expand Transition */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
  padding-top: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .cv-notice {
    padding: 1rem;
  }

  .cv-notice p {
    font-size: 1rem;
  }

  .timeline::before {
    left: 20px;
    transform: none;
  }

  .timeline-item {
    justify-content: flex-start !important;
  }

  .timeline-item.left .timeline-content,
  .timeline-item.right .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px;
    margin-right: 0;
  }

  .timeline-item.left .timeline-marker,
  .timeline-item.right .timeline-marker {
    left: 8px;
    transform: none;
  }

  .timeline-marker {
    width: 20px;
    height: 20px;
  }

  .timeline-content {
    padding: 1rem;
  }

  .timeline-header {
    flex-wrap: wrap;
  }

  .timeline-year {
    min-width: auto;
    font-size: 1rem;
  }

  .timeline-title {
    font-size: 1.25rem;
    flex-basis: 100%;
  }

  .expand-icon {
    font-size: 1.5rem;
  }

  .timeline-description {
    font-size: 1rem;
  }
}
</style>
