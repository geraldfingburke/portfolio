import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useWritingStore = defineStore("writing", () => {
  // State - Gerald Burke's Writing/Published Works
  const writings = ref([
    {
      id: 1,
      title: "I Got Someone at the MoMA to Play My Dumb Jam Game",
      slug: "moma-jam-game-superjump",
      excerpt:
        "Adventures in guerilla marketing: How I convinced the Museum of Modern Art to review my cow-stacking Ludum Dare game by presenting it as high art.",
      content: `# I Got Someone at the MoMA to Play My Dumb Jam Game

*Adventures in guerilla marketing and stacking cows*

If you're familiar with the indie game jam scene, you've likely heard of Ludum Dare - one of the longest-running, largest-scale jams in the community. For the uninitiated, game jams are events where developers have a time limit to make a small game, usually 48-72 hours.

## Ludum Dare 52: When Everything Goes Wrong

I've participated in Ludum Dare seven times over the past five years, and I've bitten off more than I could chew in every single event. Ludum Dare 52 was no different. The theme was "Harvest" and I thought it would be fun to make a subversive farming game in the vein of Harvest Moon, packed with high-minded references to modern agriculture.

I started strong with a mini-game about stacking cows. Then I got sick. I ended up spending the rest of the jam period in bed, and when I realized I was going to miss the deadline, I made a standalone build of my little cow-stacking game.

## The Art of Pretension

This is where I reached a crossroads. Instead of writing the typical post-mortem about what went wrong, I decided to take the tone that I was releasing exactly the game I had meant to. I gave it a title way fancier than it deserved: "The Ballad of Eric Hernandez, Cattle Rancher," and picked some public domain high art to represent the game.

When feedback started coming in, I noticed people were happy to play along with the pseudo-intellectual spin I was giving this thing that was only just a game by definition. One jammer even wrote an incredible song inspired by the game.

## The MoMA Gambit

I decided to lean fully into presenting this dumb jam game as high art. I made blog posts using the voice of a pretentious artist, which led me to the idea of reaching out to a genuine museum. I chose the Museum of Modern Art, partly due to its reputation and partly because "MoMA" sounds more like a Michelin Star restaurant than a museum.

From my perspective, the email was all I needed to carry the joke further and get more people to play the game. But just a few days later, I got a response from an actual MoMA representative who had played my game and given me feedback!

## The Results

The whole point was to get people to play and rate my game, and a lot of people did. I could say with almost complete honesty that my game had been "reviewed" by the Museum of Modern Art. When the final rankings came in, I had once again made a middling game - but for the first time since doing the jam, I broke into the top 100 in the "Humor" category, placing 65th out of roughly 2,000 entries.

It seems strange to brag about 65th place, but out of a pool so large, I like to think I did pretty well. Imagine if I had actually made a good game.

*Originally published in SUPERJUMP Magazine, February 13, 2023*`,
      tags: [
        "Game Development",
        "Art",
        "Indie Games",
        "Community",
        "Journalism",
      ],
      category: "Gaming Journalism",
      featured: true,
      published: true,
      publishedAt: "2023-02-13",
      publication: "SUPERJUMP Magazine",
      externalUrl:
        "https://superjumpmagazine.com/i-got-someone-at-the-moma-to-play-my-dumb-jam-game/",
    },
    {
      id: 2,
      title:
        "Indies for Ukraine: How Game Developers Mobilized for Crisis Relief",
      slug: "indies-ukraine-crisis-analysis",
      excerpt:
        "An analysis of how the indie game development community rapidly organized fundraising efforts during the Ukraine crisis, raising significant funds through creative initiatives.",
      content: `# Indies for Ukraine: How Game Developers Mobilized for Crisis Relief

*Community response and creative fundraising in times of crisis*

When international crises strike, creative communities often find unique ways to contribute to relief efforts. The indie game development community's response to the Ukraine crisis demonstrated the power of collective action and creative thinking in fundraising.

## The Rapid Response

Within days of the crisis escalating, indie developers began organizing fundraising initiatives. The speed and coordination of these efforts was remarkable, showing how digital communities can mobilize quickly for humanitarian causes.

## Creative Fundraising Methods

The indie game community employed various innovative approaches:

- **Bundle Sales**: Massive collections of indie games sold at reduced prices with proceeds going to relief organizations
- **Game Jams**: Special themed development events where entry fees and donations supported Ukraine
- **Direct Sales**: Developers pledging percentages of their game sales to relief efforts
- **Community Challenges**: Streaming events and community goals that encouraged donations

## Impact and Results

The collective efforts raised substantial funds for humanitarian organizations, demonstrating the economic impact that indie game communities can have when mobilized for a cause.

## Lessons for Community Organizing

This crisis response offers valuable insights into how creative communities can organize effectively for humanitarian purposes, combining their unique skills with fundraising efforts.

*Analysis based on community observations and fundraising data from March 2022*`,
      tags: [
        "Community",
        "Indie Games",
        "Fundraising",
        "Crisis Response",
        "Analysis",
      ],
      category: "Gaming Journalism",
      featured: true,
      published: true,
      publishedAt: "2022-03-25",
      publication: "Independent Analysis",
      externalUrl: null,
    },
    {
      id: 3,
      title: "The Liminal Space of Horror Gaming",
      slug: "horror-gaming-nosleep-analysis",
      excerpt:
        "Exploring the intersection of written horror and interactive media through my work with NoSleep Podcast and independent horror game development.",
      content: `# The Liminal Space of Horror Gaming

*Where written horror meets interactive terror*

Horror has always been a genre that thrives on the audience's imagination filling in the gaps. In my work with both NoSleep Podcast and independent horror game development, I've explored how different media create and sustain fear.

## The Power of Suggestion

Written horror, particularly in the NoSleep format, relies heavily on suggestion and the reader's imagination. The community-driven nature of NoSleep creates a unique dynamic where the boundary between fiction and reality becomes deliberately blurred.

## Interactive Horror Design

Game development adds layers of agency and immediacy to horror storytelling. Players aren't just consuming a narrative; they're making choices that lead them deeper into frightening situations.

## Crossing Media Boundaries

Working across both written and interactive horror has taught me about the unique strengths of each medium:

- **Written Horror**: Allows for deep psychological exploration and lets the reader's imagination create the most personally terrifying images
- **Interactive Horror**: Creates immediate tension through player agency and environmental storytelling
- **Audio Horror**: Combines the intimacy of spoken word with sound design to create immersive experiences

## The NoSleep Connection

My contributions to NoSleep Podcast represent a particular approach to horror writing that embraces the community aspect of fear-sharing. These stories work within the subreddit's rules while pushing boundaries of what makes effective horror.

*Reflections on horror writing and game development, 2023*`,
      tags: [
        "Horror",
        "Game Development",
        "Creative Writing",
        "NoSleep",
        "Media Analysis",
      ],
      category: "Creative Writing",
      featured: false,
      published: true,
      publishedAt: "2023-08-15",
      publication: "Personal Essay",
      externalUrl: null,
    },
    {
      id: 4,
      title: "Poetry Collection: Digital Landscapes",
      slug: "digital-landscapes-poetry",
      excerpt:
        "A collection of poems exploring themes of technology, isolation, and human connection in the digital age.",
      content: `# Digital Landscapes: A Poetry Collection

*Verses from the intersection of technology and humanity*

## Connection Protocol

    We speak in packets now,
    compressed emotions
    traveling through fiber optic dreams.
    
    Your laugh arrives
    three milliseconds late,
    but I save it anyway
    in my heart's cache.

## Loading Screen

    Buffering between
    who I was
    and who I'm becoming—
    
    Progress bar stuck
    at 67%,
    neither here
    nor there.

## Error 404: Relationship Not Found

    I searched for you
    in every database,
    queried the servers
    of my memory.
    
    But some connections
    can't be restored
    from backup.

## Notification

    The red dot blinks
    like a digital heartbeat,
    demanding attention
    I no longer have to give.
    
    Silence, at last,
    is a conscious choice
    to disconnect.

*From the collection "Digital Landscapes," 2022*`,
      tags: ["Poetry", "Technology", "Digital Culture", "Personal Expression"],
      category: "Poetry",
      featured: false,
      published: true,
      publishedAt: "2022-11-01",
      publication: "Personal Collection",
      externalUrl: null,
    },
    {
      id: 5,
      title: "The Developer's Dilemma",
      slug: "developer-dilemma-creative-writing",
      excerpt:
        "A short story exploring the psychological landscape of software development and the tension between creativity and commercial demands.",
      content: `# The Developer's Dilemma

*A short story*

Sarah stared at the terminal, the cursor blinking like a metronome counting down to deadline. The feature request seemed simple enough: "Add social sharing functionality." But underneath those four words lay a web of decisions that would determine whether her creation remained true to its original vision or became another data-harvesting tool in the endless surveillance economy.

## The Vision

When she'd started the project six months ago, it was supposed to be different. A simple tool that helped people organize their thoughts without judgment, without metrics, without the constant pressure to perform for an invisible audience.

## The Reality

But investors wanted user engagement. They wanted growth metrics. They wanted to know exactly how people were using the app, when they were using it, and most importantly, how to keep them using it longer.

## The Choice

The cursor continued blinking. Sarah's fingers hovered over the keyboard. She could implement the feature as requested—a few lines of code that would open the floodgates to a dozen other "small" features that would gradually transform her creation into something unrecognizable.

Or she could push back, knowing it might mean the end of funding, the end of the project, the end of her ability to create something meaningful in a world that seemed to measure worth only in daily active users.

## The Code

She began typing:

    // TODO: Implement social sharing
    // NOTE: Considering implications for user privacy
    // DECISION: Pending further discussion with stakeholders

Sometimes, she realized, the most important code you write is the code that refuses to be written.

*Published in Creepy Magazine, Issue #47, 2023*`,
      tags: [
        "Short Fiction",
        "Technology",
        "Creative Writing",
        "Developer Culture",
      ],
      category: "Fiction",
      featured: true,
      published: true,
      publishedAt: "2023-09-01",
      publication: "Creepy Magazine",
      externalUrl: null,
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
