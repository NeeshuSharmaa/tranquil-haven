import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

const randomDate = () => {
  const maxDate = Date.now();
  const randomDate = Math.floor(Math.random() * maxDate);

  return formatDate(randomDate);
};
export const posts = [
  {
    _id: uuid(),
    image: "/assets/images/dog.jpeg",
    content:
      "In the depths of those soulful eyes, caught a glimpse of something profound—an unspoken emotion that tugged at my heartstrings. It's the unmistakable loneliness that's lingering in the gaze, reminding us of their capacity to feel and their yearning for connection.",
    likes: {
      likeCount: 52,
      likedBy: ["noahdavis", "neeyasharmaa", "kathwilson"],
      dislikedBy: [],
    },
    username: "noahdavis",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },

  {
    _id: uuid(),
    image:
      "https://images.unsplash.com/photo-1642757111819-cdeff87559c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    content:
      "I couldn't resist capturing this moment of pure beauty. 🌸 As the warm sun kissed my skin, I couldn't help but feel gratitude for being able to witness such natural wonders. It's a reminder to slow down, embrace the present, and find joy in the simplest of things.",
    likes: {
      likeCount: 62,
      likedBy: ["noahdavis", "neeyasharmaa", "kathwilson", "jamesanderson"],
      dislikedBy: [],
    },
    username: "neeyasharmaa",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },

  {
    _id: uuid(),
    image: "/assets/images/book.jpeg",
    content: "Truly Madly Deeply",
    likes: {
      likeCount: 56,
      likedBy: ["neeyasharmaa"],
      dislikedBy: [],
    },
    username: "neeyasharmaa",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
  {
    _id: uuid(),
    image: "/assets/images/monkey.jpeg",
    content: "Finding Comfort in the Chaos 🤍",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    username: "neeyasharmaa",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
  {
    _id: uuid(),
    content:
      "Let loose and dance to your own beat. 💃 Who cares if your moves are unconventional or your rhythm is questionable? Let your inner goofball shine and embrace the joy of being uniquely you. Life's too short to worry about being perfect! #DanceLikeNobody'sWatching #EmbraceTheChaos #LaughOutLoud",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kathwilson",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
  {
    _id: uuid(),
    image: "/assets/images/beauty.jpeg",
    content:
      "La belleza está en todas partes, solo necesitamos abrir los ojos para verla.🍀",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "neeyasharmaa",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
  {
    _id: uuid(),
    image: "/assets/images/enigma.jpeg",
    content:
      "Being lost in the depth and enigma of dark night. Casting the enchanting spells!",
    likes: {
      likeCount: 25,
      likedBy: ["jamesanderson", "kathwilson"],
      dislikedBy: [],
    },
    username: "kathwilson",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },

  {
    _id: uuid(),
    image: "/assets/images/forest.jpeg",
    content:
      "Embracing the embrace of nature's gentle caress! Let's take a moment to immerse ourselves in the soothing symphony of birdsong and the serenity of a sun-dappled forest. Nature's wonders are a reminder of our connection to something greater. #NatureInspires #FindYourBliss 🌎",
    likes: {
      likeCount: 50,
      likedBy: ["noahdavis", "neeyasharmaa", "kathwilson", "jamesanderson"],
      dislikedBy: [],
    },
    username: "kathwilson",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
];
