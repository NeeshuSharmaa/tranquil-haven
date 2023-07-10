import { formatDate } from "../utils/authUtils";
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
