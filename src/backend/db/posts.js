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

    content:
      "I like freedom. I wake up in the morning and say, ‘I don’t know, should I have a popsicle or a donut?’ You know, who knows?",
    likes: {
      likeCount: 50,
      likedBy: [],
      dislikedBy: [],
    },
    username: "annegraffity",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
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
      likedBy: [],
      dislikedBy: [],
    },
    username: "jamieanderson",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
  {
    _id: uuid(),
    image: "/assets/images/read.jpg",
    content:
      "Happy Sunday ✨ I just finished Finlay Donovan is Killing It not even an hour ago... and I loved it SO MUCH. It’s probably a 5/5 for me. This is a fun murder/mystery/comedy.",
    likes: {
      likeCount: 23,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sarahgibson",

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
    username: "jamieanderson",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
  {
    _id: uuid(),
    image: "/assets/images/butterfly.jpg",
    content: `Blessed be the mind that dreamed the day
The blueprint of your life
Would begin to glow on earth,
Illuminating all the faces and voices
That would arrive to invite
Your soul to growth…..

Blessed be the gifts you never notice,
Your health, eyes to behold the world,
Thoughts to countenance the unknown,
Memory to harvest vanished days,
Your heart to feel the world's waves,
Your breath to breathe the nourishment
Of distance made intimate by earth….`,
    likes: {
      likeCount: 75,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sarahgibson",

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
    username: "noahdavis",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
  {
    _id: uuid(),

    content:
      "My mother always used to say: The older you get, the better you get, unless you’re a banana XD",
    likes: {
      likeCount: 50,
      likedBy: [],
      dislikedBy: [],
    },
    username: "danielparker",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
  {
    _id: uuid(),
    image: "/assets/images/halloween.jpg",

    content: "Happy Halloween. We tried, hahaa 👻",
    likes: {
      likeCount: 50,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sarahgibson",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },

  {
    _id: uuid(),
    image:
      "https://img.freepik.com/free-photo/male-florist-making-beautiful-bouquet_23-2149127309.jpg?w=740&t=st=1689313546~exp=1689314146~hmac=8e47fc2b1ab7077e93f631f7a1c16fc7049d03031db9e167842101481c57c724",

    content:
      "Amidst vibrant petals, solace blooms, embracing my weary soul. Fragrant blossoms whisper tranquility, soothing every breath I take. In nature's embrace, I find solace, a haven of peace among delicate flowers. 🤍",
    likes: {
      likeCount: 65,
      likedBy: [],
      dislikedBy: [],
    },
    username: "danielparker",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
  {
    _id: uuid(),
    image: "/assets/images/yellow_stone.jpg",

    content:
      "So THAT’S why they call it #Yellowstone. Worth the 19 hours in the car. #breathtaking",
    likes: {
      likeCount: 68,
      likedBy: [],
      dislikedBy: [],
    },
    username: "annegraffity",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
  {
    _id: uuid(),
    image: "/assets/images/aNd.jpg",
    content:
      "Trying to fight the urge to reread Aristotle and Dante Discover the Secrets of the Universe for the fourth time this summer 🌞 This is one of my favorite books of all time, and my mom was so kind enough to gift me this gorgeous 10th anniversary edition and I am obsessed, it is so beautiful.",
    likes: {
      likeCount: 72,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sarahgibson",

    createdAt: randomDate(),
    updatedAt: randomDate(),
  },
];
