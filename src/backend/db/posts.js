import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "noahdavis",

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:
      "https://images.unsplash.com/photo-1611764837904-aaab5f6ab8af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content:
      "Embracing the embrace of nature's gentle caress! Let's take a moment to immerse ourselves in the soothing symphony of birdsong, the vibrant hues of blooming flowers, and the serenity of a sun-dappled forest. Nature's wonders are a reminder of our connection to something greater. #NatureInspires #FindYourBliss 🌎",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kathwilson",

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
