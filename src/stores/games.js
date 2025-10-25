import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Import game images
import noTruceImage from "@/assets/no_truce_with_the_groceries.png";
import jrpgImage from "@/assets/jrpg_the_game.png";
import spelunkKingImage from "@/assets/spelunk-king.png";
import alienLabImage from "@/assets/alien_lab_assistant_simulator.png";
import anxietySimImage from "@/assets/back_to_school_anxiety_simulator_pro.png";
import saltImage from "@/assets/could_you_pass_the_salt_please.png";
import cyclovaniaImage from "@/assets/cyclevania.png";
import experimental3dImage from "@/assets/experimental_3d_game.png";
import galaxusImage from "@/assets/galaxus.png";
import lifeShortImage from "@/assets/life_is_short.png";
import loversGiftImage from "@/assets/lovers_gift.png";
import midnightManorImage from "@/assets/midnight_manor.png";
import nsfwImage from "@/assets/nsfw.png";
import sayRightThingImage from "@/assets/say_the_right_thing.png";
import antivirusImage from "@/assets/tcgd_antivirus_98.png";
import wallsClosingImage from "@/assets/the_walls_are_closing_in.png";
import pressButtonImage from "@/assets/press_this_button.jpg";
import pirateTdImage from "@/assets/pirate_tower_defense.png";
import chillBoostImage from "@/assets/chill_boost.png";
import cubegenicsImage from "@/assets/cubegenics.png";
import cromancerImage from "@/assets/cromancer.png";
import deusImage from "@/assets/Deus.png";
import feederImage from "@/assets/feeder.png";
import demoDerbyImage from "@/assets/demo_derby.png";
import pokemonImage from "@/assets/whos_that_pokemon.png";
import depthsImage from "@/assets/the_depths.png";
import remainIndoorsImage from "@/assets/remain_indoors.png";
import timegunImage from "@/assets/timegun.png";
import hoursImage from "@/assets/12_hours.png";
import agesManImage from "@/assets/ages_of_man.png";
import dietodayImage from "@/assets/you_are_going_to_die_today.png";
import iceAgeImage from "@/assets/ice_age.png";
import sadLibsImage from "@/assets/sad_libs.png";

export const useGamesStore = defineStore("games", () => {
  // State - Gerald Burke's Game Development Projects
  const games = ref([
    {
      id: 1,
      title: "No Truce with the Groceries (Jam)",
      description:
        "A short interactive fiction game about grocery shopping in this dystopian wasteland we call home.",
      longDescription:
        "This game was originally put together for the Pompous Trash Jam. My buddy Robert and I both wanted to do games for the jam and we realized that in all our years of working next to each other, we'd never actually worked together on a single project. By the time it was submitted, it was the length of a Stephen King 'short' story. Now, ramping into a full release, it is the length of a novella.",
      tags: ["Interactive Fiction", "Web", "Custom Engine", "Game Jam", "2D"],
      imageUrl: noTruceImage,
      githubUrl: null,
      gameUrl:
        "https://high-tower-games.itch.io/no-truce-with-the-groceries-jam",
      embedUrl: "https://html-classic.itch.zone/html/14342748/index.html",
      browserPlayable: true,
      featured: true,
      releaseDate: "2024-03-15",
      status: "released",
    },
    {
      id: 2,
      title: "JRPG: The Game",
      description: "Avenge your father's death and become the hero of legend!",
      longDescription:
        "I first played around with RPG Maker back in the early 2000's with Don Miguel's English translation of RPG Maker 2000.Despite my love for the software, it wasn't until a game jam with the theme 'Try Something New' that I actually sat down and made a complete game with the software.\nAs if to make up for lost time, 'JRPG the Game' is a pastiche of all of my favorite JRPG tropes.\nThis is a project that I'm particularly proud of and still makes me laugh when I revisit it.",
      tags: ["RPG", "Windows", "RPG Maker", "Game Jam", "2D"],
      imageUrl: jrpgImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/jrpg-the-game",
      widgetHtml:
        '<iframe frameborder="0" src="https://itch.io/embed/1017863?linkback=true&amp;border_width=2&amp;bg_color=21262d&amp;fg_color=f0f6fc&amp;link_color=58a6ff&amp;border_color=30363d" width="554" height="169"><a href="https://gerald-burke.itch.io/jrpg-the-game">JRPG: The Game by Gerald Burke</a></iframe>',
      browserPlayable: false,
      featured: true,
      releaseDate: "2023-08-20",
      status: "released",
    },
    {
      id: 3,
      title: "Spelunk-King",
      description:
        "Shoot your way to victory in this fast-paced multiplayer platformer featuring a fully destructible environment",
      longDescription:
        "I have always loved games where the actions of the player have a direct and visible impact on the game world. One of my favorites was the destructible environments featured in 'Red Faction'. My skills at that point were not up to building a fully 3D world. But the beauty of 2D tilesets, is the proof of concept was as simple as creating a tilemap that allowed a player to remove tiles when attacking. From there, it was just a matter of getting two players into the world to blow it all up.",
      tags: ["Platformer", "Windows", "Unity", "Multiplayer", "2D"],
      imageUrl: spelunkKingImage,
      githubUrl: "https://github.com/geraldfingburke/spelunk-king",
      gameUrl: "https://gerald-burke.itch.io/spelunk-king",
      browserPlayable: false,
      featured: true,
      releaseDate: "2022-11-20",
      status: "released",
    },
    {
      id: 4,
      title: "Press This Button",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Be the change you want to see in the world!",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Experimental", "Web", "Godot", "Game Jam", "2D"],
      imageUrl: pressButtonImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/press-this-button",
      embedUrl: "https://gerald-burke.itch.io/press-this-button?embed=true",
      browserPlayable: true,
      featured: false,
      releaseDate: "2025-01-01",
      status: "released",
    },
    {
      id: 5,
      title: "Pirate Tower Defense",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Strategic tower defense with a pirate theme.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Strategy", "Windows", "Godot", "Made for Learning", "3D"],
      imageUrl: pirateTdImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/pirate-tower-defense",
      browserPlayable: false,
      featured: false,
      releaseDate: "2025-01-01",
      status: "released",
    },
    {
      id: 6,
      title: "Chill Boost",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A simple rocket game made for the GameDev.tv Godot 3D course.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Platformer", "Windows", "Godot", "Made for Learning", "3D"],
      imageUrl: chillBoostImage,
      githubUrl: null,
      gameUrl: "https://gerald-burke.itch.io/chill-boost",
      browserPlayable: false,
      featured: false,
      releaseDate: "2025-01-01",
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
    games.value.filter((game) => game.featured)
  );

  const releasedGames = computed(() =>
    games.value.filter((game) => game.status === "released")
  );

  const getGameById = (id) =>
    games.value.find((game) => game.id === parseInt(id));

  const gamesByTag = (tag) =>
    games.value.filter((game) => game.tags.includes(tag));

  const gamesByStatus = (status) =>
    games.value.filter((game) => game.status === status);

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
