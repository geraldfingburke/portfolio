import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Import featured images
import momaFeaturedImage from "@/assets/Writing/i-got-someone-at-the-moma-to-play-my-dumb-jam-game/featured.jpg";
import dispatcherFeaturedImage from "@/assets/Writing/choice-of-the-emergency-dispatcher/featured.jpg";
import year2023FeaturedImage from "@/assets/Writing/2023-wont-be-my-year/featured.jpg";
import bandsFeaturedImage from "@/assets/Writing/a-brief-history-of-my-shitty-bands/featured.png";
import enolaGayFeaturedImage from "@/assets/Writing/enola-gay/featured.jpg";
import fakeFeaturedImage from "@/assets/Writing/fake/featured.jpg";
import fearFeaturedImage from "@/assets/Writing/fear/featured.jpg";
import hangmansNooseFeaturedImage from "@/assets/Writing/hangmans-noose/featured.jpg";
import herFeaturedImage from "@/assets/Writing/her/featured.jpg";
import sevenDollarsFeaturedImage from "@/assets/Writing/how-i-made-7-dollars-making-games/featured.jpg";
import presidentFeaturedImage from "@/assets/Writing/i-dont-care-who-the-president-is-and-neither-should-you/featured.jpg";
import indiesForUkraineFeaturedImage from "@/assets/Writing/indies-for-ukraine/featured.jpg";
import lightBetraysFeaturedImage from "@/assets/Writing/light-betrays-the-black-beneath/featured.jpg";
import potentialFeaturedImage from "@/assets/Writing/potential/featured.jpg";
import promisesFeaturedImage from "@/assets/Writing/promises/featured.jpg";
import killBabiesFeaturedImage from "@/assets/Writing/so-you-want-to-kill-babies/featured.jpg";
import urgencyFallacyFeaturedImage from "@/assets/Writing/the-urgency-of-fallacy/featured.jpg";
import fireUnclesFeaturedImage from "@/assets/Writing/there-was-a-fire-at-my-uncles-house/featured.jpg";
import tickTockFeaturedImage from "@/assets/Writing/tick-and-tock/featured.jpg";
import millersHollowFeaturedImage from "@/assets/Writing/up-millers-hollow/featured.jpg";
import youFeaturedImage from "@/assets/Writing/you/featured.jpg";

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
      category: "Horror",
      featured: true,
      published: true,
      publishedAt: "2025-05-25",
      publication: "The NoSleep Podcast",
      externalUrl: "https://www.thenosleeppodcast.com/episodes/s22/22x24",
    },
    {
      id: 3,
      title: "2023 Won't Be My Year",
      slug: "2023-wont-be-my-year",
      folder: "2023-wont-be-my-year",
      excerpt: "Self reflection at the start of a new year.",
      featuredImage: year2023FeaturedImage,
      htmlFile: "/assets/Writing/2023-wont-be-my-year/text.html",
      category: "Rant",
      featured: false,
      published: true,
      publishedAt: "2023-01-01",
      publication: "Me on Medium",
      externalUrl:
        "https://burkeg.medium.com/2023-wont-be-my-year-99627e369309",
    },
    {
      id: 4,
      title: "A Brief History of My Shitty Bands",
      slug: "a-brief-history-of-my-shitty-bands",
      folder: "a-brief-history-of-my-shitty-bands",
      excerpt: "Or How to Fail as a Musician Over the Course of a Decade",
      featuredImage: bandsFeaturedImage,
      htmlFile: "/assets/Writing/a-brief-history-of-my-shitty-bands/text.html",
      category: "Rant",
      featured: false,
      published: true,
      publishedAt: "2023-01-03",
      publication: "Me on Medium",
      externalUrl:
        "https://burkeg.medium.com/a-brief-history-of-my-shitty-bands-f425661136bd",
    },
    {
      id: 5,
      title: "Enola Gay",
      slug: "enola-gay",
      folder: "enola-gay",
      excerpt: "I was mostly trying to write a poem that was half numbers",
      featuredImage: enolaGayFeaturedImage,
      htmlFile: "/assets/Writing/enola-gay/text.html",
      category: "Bad Poetry",
      featured: false,
      published: true,
      publishedAt: "2015-01-20",
      publication: "Me on Writer's Cafe",
      externalUrl:
        "https://www.writerscafe.org/writing/geraldfingburke/1474426/",
    },
    {
      id: 6,
      title: "Fake",
      slug: "fake",
      folder: "fake",
      excerpt: "I spent a lot of time in my 20's faking it till I 'made it'.",
      featuredImage: fakeFeaturedImage,
      htmlFile: "/assets/Writing/fake/text.html",
      category: "Bad Poetry",
      featured: false,
      published: true,
      publishedAt: "2017-06-09",
      publication: "Me on Writer's Cafe",
      externalUrl:
        "https://www.writerscafe.org/writing/geraldfingburke/1928203/",
    },
    {
      id: 7,
      title: "Fear",
      slug: "fear",
      folder: "fear",
      excerpt:
        "I was going through a horrible divorce at the time this was written, but things were finally taking a more positive turn.",
      featuredImage: fearFeaturedImage,
      htmlFile: "/assets/Writing/fear/text.html",
      category: "Bad Poetry",
      featured: false,
      published: true,
      publishedAt: "2023-04-26",
      publication: "Me on Medium",
      externalUrl: "https://burkeg.medium.com/fear-f03e9ca8f224",
    },
    {
      id: 8,
      title: "Hangman's Noose",
      slug: "hangmans-noose",
      folder: "hangmans-noose",
      excerpt: "An executioner laments the loss of a local rope maker.",
      featuredImage: hangmansNooseFeaturedImage,
      htmlFile: "/assets/Writing/hangmans-noose/text.html",
      category: "Short-Fiction",
      featured: false,
      published: true,
      publishedAt: "2014-04-01",
      publication: "Me on Writer's Cafe",
      externalUrl:
        "https://www.writerscafe.org/writing/geraldfingburke/1337287/",
    },
    {
      id: 9,
      title: "Her",
      slug: "her",
      folder: "her",
      excerpt: "I was smitten, bro.",
      featuredImage: herFeaturedImage,
      htmlFile: "/assets/Writing/her/text.html",
      category: "Bad Poetry",
      featured: false,
      published: true,
      publishedAt: "2023-04-19",
      publication: "Me on Medium",
      externalUrl: "https://burkeg.medium.com/her-221107230581",
    },
    {
      id: 10,
      title: "How I Made 7 Dollars Making Games",
      slug: "how-i-made-7-dollars-making-games",
      folder: "how-i-made-7-dollars-making-games",
      excerpt: "I have now made ten times that amount.",
      featuredImage: sevenDollarsFeaturedImage,
      htmlFile: "/assets/Writing/how-i-made-7-dollars-making-games/text.html",
      category: "Games",
      featured: false,
      published: true,
      publishedAt: "2019-11-24",
      publication: "The Hidden Pixel (Defunct)",
      externalUrl:
        "https://bio.site/TheHiddenPixel?fbclid=PAZXh0bgNhZW0CMTEAAacFp4pKbeB9unoQjw5LgMW6gzIiM8HHE2cH-7xczCRMaCRx_uzTZlfuK0P_UQ_aem__g7zdCeP4kqNI0yc4OZiSA",
    },
    {
      id: 11,
      title: "I Don't Care Who the President Is and Neither Should You",
      slug: "i-dont-care-who-the-president-is-and-neither-should-you",
      folder: "i-dont-care-who-the-president-is-and-neither-should-you",
      excerpt: "2020 was not a super awesome year.",
      featuredImage: presidentFeaturedImage,
      htmlFile:
        "/assets/Writing/i-dont-care-who-the-president-is-and-neither-should-you/text.html",
      category: "Rant",
      featured: false,
      published: true,
      publishedAt: "2021-01-26",
      publication: "Me on Medium",
      externalUrl:
        "https://burkeg.medium.com/i-dont-care-who-the-president-is-and-neither-should-you-32d5f6cab4b2",
    },
    {
      id: 12,
      title: "Indies for Ukraine",
      slug: "indies-for-ukraine",
      folder: "indies-for-ukraine",
      excerpt:
        "A collective of indie game developers raising funds for Ukraine. Where did those funds go? No clue. Did it win them the war? Probably, who could possibly know?",
      featuredImage: indiesForUkraineFeaturedImage,
      htmlFile: "/assets/Writing/indies-for-ukraine/text.html",
      category: "Games",
      featured: false,
      published: true,
      publishedAt: "2022-03-18",
      publication: "SUPERJUMP Magazine",
      externalUrl:
        "https://medium.com/super-jump/indies-for-ukraine-how-a-niche-internet-community-raised-almost-5m-for-crisis-intervention-f8f34858a1f0",
    },
    {
      id: 13,
      title: "Light Betrays the Black Beneath",
      slug: "light-betrays-the-black-beneath",
      folder: "light-betrays-the-black-beneath",
      excerpt: "Sometimes I feel big feelings.",
      featuredImage: lightBetraysFeaturedImage,
      htmlFile: "/assets/Writing/light-betrays-the-black-beneath/text.html",
      category: "Bad Poetry",
      featured: false,
      published: true,
      publishedAt: "2023-03-29",
      publication: "Me on Medium",
      externalUrl:
        "https://burkeg.medium.com/light-betrays-the-black-beneath-c1959a45aa9f",
    },
    {
      id: 14,
      title: "Potential",
      slug: "potential",
      folder: "potential",
      excerpt:
        "I don't believe in the concept of 'the one that got away'. With that, here is my story about the one that got away.",
      featuredImage: potentialFeaturedImage,
      htmlFile: "/assets/Writing/potential/text.html",
      category: "Rant",
      featured: false,
      published: true,
      publishedAt: "2021-01-30",
      publication: "Me on Medium",
      externalUrl: "https://burkeg.medium.com/potential-2d85f1004919",
    },
    {
      id: 15,
      title: "Promises",
      slug: "promises",
      folder: "promises",
      excerpt:
        "I had no clue what I was doing as a young adult, but I was responsible for a young family. It was hard, man.",
      featuredImage: promisesFeaturedImage,
      htmlFile: "/assets/Writing/promises/text.html",
      category: "Bad Poetry",
      featured: false,
      published: true,
      publishedAt: "2016-03-05",
      publication: "Me on Writer's Cafe",
      externalUrl:
        "https://www.writerscafe.org/writing/geraldfingburke/1733416/",
    },
    {
      id: 16,
      title: "So You Want to Kill Babies",
      slug: "so-you-want-to-kill-babies",
      folder: "so-you-want-to-kill-babies",
      excerpt:
        "This is why everything is bad. I'm convinced this is how people are and this isn't special or new. People just suck and will say whatever gets them what they want.",
      featuredImage: killBabiesFeaturedImage,
      htmlFile: "/assets/Writing/so-you-want-to-kill-babies/text.html",
      category: "Rant",
      featured: false,
      published: true,
      publishedAt: "2020-07-27",
      publication: "Me on Medium",
      externalUrl:
        "https://burkeg.medium.com/a-member-of-the-opposition-asked-me-so-you-want-to-kill-babies-93f824560624",
    },
    {
      id: 17,
      title: "The Urgency of Fallacy",
      slug: "the-urgency-of-fallacy",
      folder: "the-urgency-of-fallacy",
      excerpt:
        "The least qualified person in the world to lead is the person that wants to lead the most.",
      featuredImage: urgencyFallacyFeaturedImage,
      htmlFile: "/assets/Writing/the-urgency-of-fallacy/text.html",
      category: "Bad Poetry",
      featured: false,
      published: true,
      publishedAt: "2015-01-17",
      publication: "Me on Writer's Cafe",
      externalUrl:
        "https://www.writerscafe.org/writing/geraldfingburke/1472445/",
    },
    {
      id: 18,
      title: "There Was a Fire at My Uncle's House",
      slug: "there-was-a-fire-at-my-uncles-house",
      folder: "there-was-a-fire-at-my-uncles-house",
      excerpt:
        "There actually was. A person died. It was not my uncle, but rather a family friend. I wrote this story after it happened. Maybe to process. Maybe to exploit. I have a weird relationship with this piece.",
      featuredImage: fireUnclesFeaturedImage,
      htmlFile: "/assets/Writing/there-was-a-fire-at-my-uncles-house/text.html",
      category: "Horror",
      featured: false,
      published: true,
      publishedAt: "2023-03-20",
      publication: "Creepy",
      externalUrl:
        "https://www.patreon.com/posts/3-20-2023-there-80282357?utm_medium=social&utm_source=twitter&utm_campaign=postshare_fan&utm_content=join_link",
    },
    {
      id: 19,
      title: "Tick and Tock",
      slug: "tick-and-tock",
      folder: "tick-and-tock",
      excerpt:
        "This is just straight up silly. I was being a silly little goose.",
      featuredImage: tickTockFeaturedImage,
      htmlFile: "/assets/Writing/tick-and-tock/text.html",
      category: "Bad Poetry",
      featured: false,
      published: true,
      publishedAt: "2015-01-21",
      publication: "Me on Writer's Cafe",
      externalUrl:
        "https://www.writerscafe.org/writing/geraldfingburke/1474533/",
    },
    {
      id: 20,
      title: "Up Miller's Hollow",
      slug: "up-millers-hollow",
      folder: "up-millers-hollow",
      excerpt:
        "This is a story that came to me while driving delivery through Appalachian hollers late at night. There is some of my complicated relationship with my mother in it. Maybe one day I'll get to take a run up Miller's Hollow.",
      featuredImage: millersHollowFeaturedImage,
      htmlFile: "/assets/Writing/up-millers-hollow/text.html",
      category: "Horror",
      featured: false,
      published: true,
      publishedAt: "2023-08-09",
      publication: "Creepy",
      externalUrl:
        "https://www.patreon.com/posts/8-9-2023-up-87430974?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share",
    },
    {
      id: 21,
      title: "You",
      slug: "you",
      folder: "you",
      excerpt:
        "As I've matured, I've realized that harboring 'unrequited love' is selfish and gross. You effectively use the person as a prop, like Demian and Beatrice. Here is a poem about harboring unrequited love, written before I had matured.",
      featuredImage: youFeaturedImage,
      htmlFile: "/assets/Writing/you/text.html",
      category: "Bad Poetry",
      featured: false,
      published: true,
      publishedAt: "2015-01-27",
      publication: "Me on Writer's Cafe",
      externalUrl:
        "https://www.writerscafe.org/writing/geraldfingburke/1478184/",
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

  const writingsByCategory = (category) =>
    publishedWritings.value.filter((writing) => writing.category === category);

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
    writingsByCategory,
    allCategories,
  };
});
