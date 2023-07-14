import { formatDate } from "../utils/authUtils";
import { v4 as uuid } from "uuid";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "29d72b31-9d03-4b93-b214-96bab76b6c48",
    firstName: "Neeya",
    lastName: "Sharma",
    username: "neeyasharmaa",
    email: "neeyasharmaa@gmail.com",
    password: "neeya123",
    image: "/assets/images/guest_user.jpg",
    bio: "Bookworm with an insatiable appetite for words, worlds, and the magic they hold...",
    website: "https://example.com/neeyasharmaa",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "b5351edb-417d-43e9-88e2-02228994efb1",
    firstName: "Kath",
    lastName: "Wilson",
    username: "kathwilson",
    email: "kwilsonnyc@gmail.com",
    password: "kath123",
    image:
      "https://images.unsplash.com/photo-1521417531039-75e91486cc40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpbmdlciUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    bio: "Singing my way through life's symphony 🎵",
    website: "https://example.com/kathwilson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "41f5ad23-8dd0-4ee2-9854-3c416524d465",
    firstName: "Noah",
    lastName: "Davis",
    username: "noahdavis",
    email: "noahdavis@yahoo.com",
    password: "noah123",
    image:
      "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    bio: "Embracing the beauty of the natural world ",
    website: "https://example.com/noahdavis",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "70f6605b-0d1a-4e89-b1e6-68d08fe4a702",
    firstName: "Jamie",
    lastName: "Anderson",
    username: "jamieanderson",
    email: "andersonjamie@gmail.com",
    password: "james123",
    image:
      "https://images.unsplash.com/photo-1531218614045-e596f12f0393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGhhcHB5JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    bio: "Capturing moments and telling stories through the lens 📷",
    website: "https://example.com/jamieanderson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "f5c67534-2f9c-4bf6-ae5e-679f1b66a1ca",
    firstName: "Anne",
    lastName: "Graffity",
    username: "annegraffity",
    email: "annegraffity@gmail.com",
    password: "anne123",
    image:
      "https://img.freepik.com/free-photo/woman-relaxing-hammock-while-beach-with-book_23-2148700244.jpg?w=1060&t=st=1689248570~exp=1689249170~hmac=44d0231c52b530a53049f2b67c4d89f20a46f81bf7698a381a834da534b150e8",
    bio: "All colors in one with full brightness",
    website: "https://example.com/annegraffity",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "40fb31bb-5861-4e95-b47e-db7656a21604",
    firstName: "Sarah",
    lastName: "Gibson",
    username: "sarahgibson",
    email: "sarahgibson@yahoo.com",
    password: "sarah123",
    image: "/assets/images/gabby.jpg",
    bio: "I know people usually better than they know themselves.",
    website: "https://example.com/donnapaulson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "029aa6c1-b37f-45a6-b4d1-ef6a3d3c7d1e",
    firstName: "Daniel",
    lastName: "Parker",
    username: "danielparker",
    email: "danielparker@yahoo.com",
    password: "daniel123",
    image:
      "https://img.freepik.com/free-photo/male-florist-making-beautiful-bouquet_23-2149127292.jpg?size=626&ext=jpg&uid=R107571445&ga=GA1.2.115290866.1687443538&semt=sph",
    bio: "Capturing moments and telling stories through the lens 📷",
    website: "https://example.com/danielparker",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
