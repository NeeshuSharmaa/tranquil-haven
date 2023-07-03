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
    image: "/assets/images/avatar-2.png",
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
    image: "/assets/images/avatar-1.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "70f6605b-0d1a-4e89-b1e6-68d08fe4a702",
    firstName: "James",
    lastName: "Anderson",
    username: "jamesanderson",
    email: "andersonjames@gmail.com",
    password: "james123",
    image: "/assets/images/avatar-2.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
