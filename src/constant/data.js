import { ROUTES } from "./routes";

export const navdata = [
  {
    id: 1,
    text: "Home",
    path: ROUTES.HOME,
  },
  {
    id: 2,
    text: "About",
    path: ROUTES.ABOUT,
  },
  {
    id: 3,
    text: "Guide",
    path: ROUTES.GUIDE,
  },
  {
    id: 3,
    text: "Contact",
    path: ROUTES.CONTACT,
  },
];

export const footerdata = [
  {
    id: 1,
    text: "What is Memory Mimic?",
    children: [
      {
        id: 1,
        text: "Memory Mimic is a cloud storage services based on Blockchain and Web3 technology, designed to help teams collaborate and file sharing in a completely private like never before.",
      },
    ],
  },
  {
    id: 2,
    text: "Products",
    children: [
      { id: 1, text: "Features", path: "" },
      { id: 2, text: "Features", path: "" },
      { id: 3, text: "Features", path: "" },
      { id: 4, text: "Features", path: "" },
    ],
  },
  {
    id: 3,
    text: "Resource",
    children: [
      { id: 1, text: "Features", path: "" },
      { id: 2, text: "Features", path: "" },
      { id: 3, text: "Features", path: "" },
      { id: 4, text: "Features", path: "" },
    ],
  },
  {
    id: 4,
    text: "Community",
    children: [
      { id: 1, text: "Features", path: "" },
      { id: 2, text: "Features", path: "" },
      { id: 3, text: "Features", path: "" },
      { id: 4, text: "Features", path: "" },
    ],
  },
];
