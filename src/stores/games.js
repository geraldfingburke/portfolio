import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Import game images
import noTruceImage from "@/assets/Games/no_truce_with_the_groceries/FeaturedImage.png";
import jrpgImage from "@/assets/Games/jrpg_the_game/FeaturedImage.png";
import spelunkKingImage from "@/assets/Games/spelunk_king/FeaturedImage.png";
import alienLabImage from "@/assets/Games/alien_lab_assistant_simulator/FeaturedImage.png";
import anxietySimImage from "@/assets/Games/back_to_school_anxiety_simulator_pro/FeaturedImage.png";
import saltImage from "@/assets/Games/could_you_pass_the_salt_please/FeaturedImage.png";
import cyclovaniaImage from "@/assets/Games/cyclevania/FeaturedImage.png";
import experimental3dImage from "@/assets/Games/experimental_3d_game/FeaturedImage.png";
import galaxusImage from "@/assets/Games/galaxus/FeaturedImage.png";
import lifeShortImage from "@/assets/Games/life_is_short/FeaturedImage.png";
import loversGiftImage from "@/assets/Games/lovers_gift/FeaturedImage.png";
import midnightManorImage from "@/assets/Games/midnight_manor/FeaturedImage.png";
import nsfwImage from "@/assets/Games/nsfw/FeaturedImage.png";
import sayRightThingImage from "@/assets/Games/say_the_right_thing/FeaturedImage.png";
import antivirusImage from "@/assets/Games/tcgd_antivirus_98/FeaturedImage.png";
import wallsClosingImage from "@/assets/Games/the_walls_are_closing_in/FeaturedImage.png";
import pressButtonImage from "@/assets/Games/press_this_button/FeaturedImage.jpg";
import pirateTdImage from "@/assets/Games/pirate_tower_defense/FeaturedImage.png";
import chillBoostImage from "@/assets/Games/chill_boost/FeaturedImage.png";
import cubegenicsImage from "@/assets/Games/cubegenics/FeaturedImage.png";
import cromancerImage from "@/assets/Games/cromancer/FeaturedImage.png";
import deusImage from "@/assets/Games/deus/FeaturedImage.png";
import feederImage from "@/assets/Games/feeder/FeaturedImage.png";
import demoDerbyImage from "@/assets/Games/demo_derby/FeaturedImage.png";
import pokemonImage from "@/assets/Games/whos_that_pokemon/FeaturedImage.png";
import depthsImage from "@/assets/Games/the_depths/FeaturedImage.png";
import remainIndoorsImage from "@/assets/Games/remain_indoors/FeaturedImage.png";
import timegunImage from "@/assets/Games/timegun/FeaturedImage.png";
import hoursImage from "@/assets/Games/12_hours/FeaturedImage.png";
import agesManImage from "@/assets/Games/ages_of_man/FeaturedImage.png";
import dietodayImage from "@/assets/Games/you_are_going_to_die_today/FeaturedImage.png";
import iceAgeImage from "@/assets/Games/ice_age/FeaturedImage.png";
import sadLibsImage from "@/assets/Games/sad_libs/FeaturedImage.png";
import redFactionImage from "@/assets/Games/spelunk_king/Screenshots/red_faction.png";
import spelunkKingScreenshot from "@/assets/Games/spelunk_king/Screenshots/spelunk-king-screenshot.png";
import jrpgScreenshot1 from "@/assets/Games/jrpg_the_game/Screenshots/1.png";
import jrpgScreenshot2 from "@/assets/Games/jrpg_the_game/Screenshots/2.png";
import jrpgScreenshot3 from "@/assets/Games/jrpg_the_game/Screenshots/3.png";

export const useGamesStore = defineStore("games", () => {
  // State - Gerald Burke's Game Development Projects
  const games = ref([
    {
      id: 1,
      title: "No Truce with the Groceries",
      description:
        "A short interactive fiction game about grocery shopping in this dystopian wasteland we call home.",
      longDescription:
        "<p>This game was originally put together for the Pompous Trash Jam.</p><p> My buddy Robert and I both wanted to do games for the jam and we realized that in all our years of working next to each other, we'd never actually worked together on a single project.</p><p> By the time it was submitted, it was the length of a Stephen King 'short' story. Now, ramping into a full release, it is the length of a novella.</p>",
      tags: ["Interactive Fiction", "Web", "Custom Engine", "Game Jam", "2D"],
      imageUrl: noTruceImage,
      githubUrl: null,
      gameUrl:
        "https://high-tower-games.itch.io/no-truce-with-the-groceries-jam",
      embedUrl: "https://html-classic.itch.zone/html/14342748/index.html",
      browserPlayable: true,
      featured: true,
      releaseDate: "2025-04-14",
      status: "in development",
    },
    {
      id: 2,
      title: "JRPG: The Game",
      description: "Avenge your father's death and become the hero of legend!",
      longDescription: `<p>I first played around with RPG Maker back in the early 2000's with Don Miguel's English translation of RPG Maker 2000.</p><div style="text-align: center; margin: 2rem 0;"><img src="${jrpgScreenshot3}" alt="JRPG Screenshot 3" style="max-width: 100%; height: auto; border-radius: 0.5rem; border: 1px solid #30363d;" /></div><p>Despite my love for the software, it wasn't until a game jam with the theme 'Try Something New' that I actually sat down and made a complete game with the software.</p><p>As if to make up for lost time, <strong>'JRPG the Game'</strong> is a pastiche of all of my favorite JRPG tropes.</p><p>This is a project that I'm particularly proud of and still makes me laugh when I revisit it.</p><div style="text-align: center; margin: 2rem 0;"><img src="${jrpgScreenshot1}" alt="JRPG Screenshot 1" style="max-width: 100%; height: auto; border-radius: 0.5rem; border: 1px solid #30363d;" /></div><div style="text-align: center; margin: 2rem 0;"><img src="${jrpgScreenshot2}" alt="JRPG Screenshot 2" style="max-width: 100%; height: auto; border-radius: 0.5rem; border: 1px solid #30363d;" /></div>`,
      tags: ["RPG", "Windows", "RPG Maker", "Game Jam", "2D"],
      imageUrl: jrpgImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/jrpg-the-game",
      widgetHtml:
        '<iframe frameborder="0" src="https://itch.io/embed/1017863?linkback=true&amp;border_width=2&amp;bg_color=21262d&amp;fg_color=f0f6fc&amp;link_color=58a6ff&amp;border_color=30363d" width="554" height="169"><a href="https://gerald-burke.itch.io/jrpg-the-game">JRPG: The Game by Gerald Burke</a></iframe>',
      browserPlayable: false,
      featured: true,
      releaseDate: "2021-04-28",
      status: "released",
    },
    {
      id: 3,
      title: "Spelunk-King",
      description:
        "Shoot your way to victory in this fast-paced multiplayer platformer featuring a fully destructible environment",
      longDescription: `<p>I have always loved games where the actions of the player have a direct and visible impact on the game world.</p><p> One of my favorites was the destructible environments featured in 'Red Faction'.</p><div style="text-align: center; margin: 2rem 0;"><img src="${redFactionImage}" alt="Red Faction" style="max-width: 100%; height: auto; border-radius: 0.5rem; border: 1px solid #30363d;" /></div><p> My skills at that point were not up to building a fully 3D world. But the beauty of 2D tilesets, is the proof of concept was as simple as creating a tilemap that allowed a player to remove tiles when attacking. From there, it was just a matter of getting two players into the world to blow it all up.</p><div style="text-align: center; margin: 2rem 0;"><img src="${spelunkKingScreenshot}" alt="Spelunk-King Screenshot" style="max-width: 100%; height: auto; border-radius: 0.5rem; border: 1px solid #30363d;" /></div><p>The orignal incarnation of this idea was to serve as a simple playable demo for ETSU Con 2018. Something easy to pick up, that allowed a couple people at our booth to play a game while we chatted.</p><p>The gameplay was then expanded and refined for a standalone release to itch.io.</p>`,
      tags: ["Platformer", "Windows", "Unity", "Multiplayer", "2D"],
      imageUrl: spelunkKingImage,
      githubUrl: "https://github.com/geraldfingburke/spelunk-king",
      gameUrl: "https://gerald-burke.itch.io/spelunk-king",
      widgetHtml:
        '<iframe frameborder="0" src="https://itch.io/embed/496686?linkback=true&amp;border_width=2&amp;bg_color=21262d&amp;fg_color=f0f6fc&amp;link_color=58a6ff&amp;border_color=30363d" width="554" height="169"><a href="https://gerald-burke.itch.io/spelunk-king">Spelunk-King by Gerald Burke</a></iframe>',
      browserPlayable: false,
      featured: true,
      releaseDate: "2019-10-08",
      status: "released",
    },
    {
      id: 4,
      title: "Press This Button",
      description: "Press a button to right systemic wrongs",
      longDescription:
        "<p>I have something of a cynical streak. I try to fight it pretty hard, but sometimes I feel compelled to kvetch ad nauseum. Sometimes I feel compelled to do something small, petty, and spiteful.</p><p>A buddy of mine shared this jam. I'm not going to name and shame, if you look it up, you'll find it. But everything felt off about it. It called for video games that supported civic action, with a suggestion of a publishing deal for the winner. They even got a non-sequitur of a ...celebrity, to lend the competition credence.</p><p>I did, for a moment, actually consider doing something sincere for the jam. Some of the groups associated with the event are actually groups I have admiration for. But then that nasty little goblin in my head told me that I had to make fun of them for caring about something.</p><p>I'm a work in progress, and I'm working on it.</p>",
      tags: ["Experimental", "Web", "Godot", "Game Jam", "2D"],
      imageUrl: pressButtonImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/press-this-button",
      embedUrl: "https://html-classic.itch.zone/html/14116688/index.html",
      browserPlayable: true,
      featured: false,
      releaseDate: "2025-06-26",
      status: "released",
    },
    {
      id: 5,
      title: "Pirate Tower Defense",
      description:
        "A short, simple Pirate themed Tower Defense game made for the GameDev.tv Godot 3D course",
      longDescription:
        "<p><em>This was a <strong><a href='https://gamedev.tv/' target='_blank' rel='noopener noreferrer'>GameDev.tv</a></strong> project</em></p><p><em>I cannot recommend them more highly!</em></p><p>This project was a lot of fun to put together. When I approach these courses, I challenge myself to source my own assets rather than using those provided. It's a practice I've found very fruitful, as it has challenged me to dig deeper into the tools I'm learning and solve problems that weren't already solved for me.</p><p><a href='https://kenney.nl/assets/pirate-kit' target='_blank' rel='noopener noreferrer'>Kenney.nl had a fantastic kit of 3D pirate resources</a> that I was able to leverage and make this project more unique. I also got to play with shaders a little in my attempts to make the water look and feel a bit more like water than a giant, semi-transparent rectangle.</p><p>The game is short. It's just the one level, then it resets. If I liked tower defense games more or had some ideas on expanding it, I would. I'm not entirely against revisiting the concept either.</p><div style='text-align: center; margin: 2rem 0;'><iframe width='560' height='315' src='https://www.youtube.com/embed/s0K1FaanuyU' title='Pirate Tower Defense Test' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen style='max-width: 100%; border-radius: 0.5rem; border: 1px solid #30363d;'></iframe></div>",
      tags: ["Strategy", "Windows", "Godot", "Made for Learning", "3D"],
      imageUrl: pirateTdImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/pirate-tower-defense",
      widgetHtml:
        '<iframe frameborder="0" src="https://itch.io/embed/3662155?linkback=true&amp;border_width=2&amp;bg_color=21262d&amp;fg_color=f0f6fc&amp;link_color=58a6ff&amp;border_color=30363d" width="554" height="169"><a href="https://gerald-burke.itch.io/pirate-tower-defense">Pirate Tower Defense by Gerald Burke</a></iframe>',
      browserPlayable: false,
      featured: false,
      releaseDate: "2025-06-21",
      status: "released",
    },
    {
      id: 6,
      title: "Chill Boost",
      description:
        "A simple rocket platformer with vaporwave vibes made for the GameDev.tv Godot 3D course.",
      longDescription: `
        <p><em>This was a <strong><a href='https://gamedev.tv/' target='_blank' rel='noopener noreferrer'>GameDev.tv</a></strong> project</em></p>
        <p><em>I cannot recommend them more highly!</em></p>
        <p>This piece was my introduction to putting 3D games together in Godot. Most of my time spent on this projects was poking around, trying to find parallels for processes I'd been accustomed to in Unity.</p>
        <p>I'm particularly proud of the particle system I landed on for the rocket exhaust. The persistence of the particles give me an idea for a skywriting type game, though I'm not sure what that would actually look like or if it would actually be fun. I guess the latter comes down to execution.</p>
        <div style='text-align:center; margin:2rem 0;'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/h25SoD_Cs5Y?si=gBmryx0XRRCXTA2e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style='max-width:100%; border-radius:0.5rem; border:1px solid #30363d;'></iframe>
        </div>
      `,
      tags: ["Platformer", "Windows", "Godot", "Made for Learning", "3D"],
      imageUrl: chillBoostImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/chill-boost",
      browserPlayable: false,
      featured: false,
      releaseDate: "2025-06-17",
      status: "released",
    },
    {
      id: 7,
      title: "Cubegenics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A Eugenics Simulator for the Whole Family!",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Simulation", "Web", "Godot", "Game Jam", "3D"],
      imageUrl: cubegenicsImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/cubegenics",
      embedUrl: "https://gerald-burke.itch.io/cubegenics?embed=true",
      browserPlayable: true,
      featured: false,
      releaseDate: "2025-01-01",
      status: "released",
    },
    {
      id: 8,
      title: "Cromancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necromancy meets agriculture in this unique simulation.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Adventure", "Web", "Godot", "Game Jam", "2D"],
      imageUrl: cromancerImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/cromancer",
      browserPlayable: false,
      featured: false,
      releaseDate: "2025-01-01",
      status: "released",
    },
    {
      id: 9,
      title: "Deus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A Simple God-Game Style Simulation.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Simulation", "Web", "Phaser", "Game Jam", "2D"],
      imageUrl: deusImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/deus",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2025-01-01",
      status: "released",
    },
    {
      id: 10,
      title: "Feeder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. You're a super chill guy, but the boys are hungry and you have to feed them.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Action", "Web", "Godot", "Game Jam", "2D"],
      imageUrl: feederImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/feeder",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2025-01-01",
      status: "released",
    },
    {
      id: 11,
      title: "Demo Derby",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A 'less than complete' demo derby style game done for the Secret Santa Jam.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Racing", "Windows", "Godot", "Game Jam", "3D"],
      imageUrl: demoDerbyImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/demo-derby-proof-of-concept",
      browserPlayable: false,
      featured: false,
      releaseDate: "2024-12-25",
      status: "released",
    },
    {
      id: 12,
      title: "Who's That Pokemon?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A browser based guessing game leveraging the PokeAPI.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Trivia", "Web", "Custom Engine", "Multiplayer", "2D"],
      imageUrl: pokemonImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/whos-that-pokemon",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2024-06-01",
      status: "released",
    },
    {
      id: 13,
      title: "The Depths",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A Black and White Dungeon Crawling Experience.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Adventure", "Web", "Godot", "Game Jam", "2D"],
      imageUrl: depthsImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/the-depths",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2024-03-01",
      status: "released",
    },
    {
      id: 14,
      title: "Remain Indoors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Post-apocalyptic text adventure set in Northeast Tennessee.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Adventure", "Windows", "Custom Engine", "Text-Based"],
      imageUrl: remainIndoorsImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/remain-indoors",
      browserPlayable: false,
      featured: false,
      releaseDate: "2019-10-01",
      status: "released",
    },
    {
      id: 15,
      title: "TimeGun",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Shoot your way into the future!",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Action", "Web", "Unity", "Game Jam", "2D"],
      imageUrl: timegunImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/cubegenics",
      embedUrl: "https://gerald-burke.itch.io/cubegenics?embed=true",
      browserPlayable: true,
      featured: false,
      releaseDate: "2018-05-01",
      status: "released",
    },
    {
      id: 16,
      title: "12 Hours",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A narrative experience exploring time constraints.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Experimental", "Windows", "Unity", "Ludum Dare", "2D"],
      imageUrl: hoursImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/12-hours",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2022-08-01",
      status: "released",
    },
    {
      id: 17,
      title: "Ages of Man",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Adventure", "Windows", "Unity", "Dungeon Crawler", "3D"],
      imageUrl: agesManImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/ages-of-man",
      browserPlayable: false,
      featured: false,
      releaseDate: "2024-05-29",
      status: "released",
    },
    {
      id: 18,
      title: "You Are Going to Die Today",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. My entry for Ludum Dare 47.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Adventure", "Windows", "Unity", "Ludum Dare", "3D"],
      imageUrl: dietodayImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/you-are-going-to-die-today",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2020-10-01",
      status: "released",
    },
    {
      id: 19,
      title: "Ice Age",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A little sim about glacial cycles.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Simulation", "Web", "Unity", "Game Jam", "2D"],
      imageUrl: iceAgeImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/ice-age",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2020-05-01",
      status: "released",
    },
    {
      id: 20,
      title: "Sad Libs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Like mad libs, but with emo song lyrics.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Experimental", "Web", "Godot", "Made for Learning", "2D"],
      imageUrl: sadLibsImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/sad-libs-game",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2023-03-01",
      status: "released",
    },
    {
      id: 21,
      title: "Alien Lab Assistant Simulator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Help conduct experiments in an alien laboratory.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Experimental", "Web", "Unity", "Game Jam", "2D"],
      imageUrl: alienLabImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/alien-lab-assistant-simulator",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2017-08-01",
      status: "released",
    },
    {
      id: 22,
      title: "Back to School Anxiety Simulator Pro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Experience the stress of returning to school.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Simulation", "Web", "Unity", "Game Jam", "2D"],
      imageUrl: anxietySimImage,
      githubUrl:
        "https://gerald-burke.itch.io/back-to-school-anxiety-simulator-pro",
      gameUrl:
        "https://gerald-burke.itch.io/back-to-school-anxiety-simulator-pro",
      browserPlayable: false,
      featured: false,
      releaseDate: "2019-08-01",
      status: "released",
    },
    {
      id: 23,
      title: "Could You Pass The Salt, Please?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Short twine story about a relationship.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Interactive Fiction", "Web", "Twine", "Game Jam", "2D"],
      imageUrl: saltImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/could-you-pass-the-salt-please",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2017-06-01",
      status: "released",
    },
    {
      id: 24,
      title: "Cyclevania",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A collaborative project combining cycling mechanics with vampire themes.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Action", "Web", "Unity", "Ludum Dare", "2D"],
      imageUrl: cyclovaniaImage,
      githubUrl: "https://arendev.itch.io/cyclevania",
      gameUrl: "https://arendev.itch.io/cyclevania",
      browserPlayable: false,
      featured: false,
      releaseDate: "2018-06-01",
      status: "released",
    },
    {
      id: 25,
      title: "Experimental 3D Game",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. My first time playing with 3D development.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Experimental", "Windows", "Unity", "Game Jam", "3D"],
      imageUrl: experimental3dImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/3d-experiment",
      browserPlayable: false,
      featured: false,
      releaseDate: "2020-03-01",
      status: "released",
    },
    {
      id: 26,
      title: "Galaxus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A space-themed adventure game.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Action", "Android", "Unity", "Multiplayer", "2D"],
      imageUrl: galaxusImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/galaxus",
      browserPlayable: false,
      featured: false,
      releaseDate: "2020-07-01",
      status: "released",
    },
    {
      id: 27,
      title: "Life is Short",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A contemplative interactive fiction piece.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Interactive Fiction", "Web", "Unity", "Made for Learning", "2D"],
      imageUrl: lifeShortImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/life-is-short",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2017-04-01",
      status: "released",
    },
    {
      id: 28,
      title: "Lover's Gift",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A romantic interactive story.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Adventure", "Web", "Unity", "Game Jam", "3D"],
      imageUrl: loversGiftImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/lovers-gift",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2018-02-14",
      status: "released",
    },
    {
      id: 29,
      title: "Midnight Manor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore a mysterious manor at the stroke of midnight.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Adventure", "Web", "Unity", "Ludum Dare", "2D"],
      imageUrl: midnightManorImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/midnight-manor",
      browserPlayable: false,
      featured: false,
      releaseDate: "2019-10-31",
      status: "released",
    },
    {
      id: 30,
      title: "NSFW",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A small game about a social media platform.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Interactive Fiction", "Web", "Unity", "Game Jam", "2D"],
      imageUrl: nsfwImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/nsfw-jam",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2022-04-01",
      status: "released",
    },
    {
      id: 31,
      title: "Say The Right Thing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Navigate social conversations with care.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Experimental", "Windows", "Custom Engine", "Text-Based", "2D"],
      imageUrl: sayRightThingImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/say-the-right-thing",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2017-02-01",
      status: "released",
    },
    {
      id: 32,
      title: "TCGD AntiVirus '98",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Retro computer simulation with virus protection themes.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Action", "Web", "Unity", "Ludum Dare", "2D"],
      imageUrl: antivirusImage,
      githubUrl: "https://arendev.itch.io/tcgd-antivirus",
      gameUrl: "https://arendev.itch.io/tcgd-antivirus",
      browserPlayable: false,
      featured: false,
      releaseDate: "2018-08-01",
      status: "released",
    },
    {
      id: 33,
      title: "The Walls Are Closing In",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A claustrophobic psychological experience.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: [
        "Experimental",
        "Windows",
        "Game Maker",
        "Made for Learning",
        "2D",
      ],
      imageUrl: wallsClosingImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/the-walls-are-closing-in",
      embedUrl: null,
      browserPlayable: true,
      featured: false,
      releaseDate: "2017-01-01",
      status: "released",
    },
  ]);

  // Getters
  const featuredGames = computed(() =>
    games.value
      .filter((game) => game.featured)
      .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
  );

  const releasedGames = computed(() =>
    games.value
      .filter((game) => game.status === "released")
      .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
  );

  const getGameById = (id) =>
    games.value.find((game) => game.id === parseInt(id));

  const gamesByTag = (tag) =>
    games.value
      .filter((game) => game.tags.includes(tag))
      .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

  const gamesByStatus = (status) =>
    games.value
      .filter((game) => game.status === status)
      .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

  // Simple return - no CMS functionality needed
  return {
    games,
    featuredGames,
    releasedGames,
    getGameById,
    gamesByTag,
    gamesByStatus,
  };
});
