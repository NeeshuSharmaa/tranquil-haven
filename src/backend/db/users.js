import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
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
    _id: uuid(),
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
    _id: uuid(),
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
    _id: uuid(),
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
