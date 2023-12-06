import { MenuType } from "../../../app/core/models/Menu";

export const MenuMainSection: MenuType[] = [
  {
    id: 0,
    name: "Dashboard",
    src: "/images/home_menu.svg",
    link: "/",
  },
  {
    id: 1,
    name: "Graphiques",
    src: "/images/charts_menu.svg",
    link: "/graphs",
  },
  {
    id: 2,
    name: "Projets",
    src: "/images/data_menu.svg",
    link: "/projects-container",
    sub_menu: [
      {
        id: 0,
        name: "Cadres des Projets",
        src: "/images/charts_menu.svg",
        link: "/frameworks",
      },
      {
        id: 1,
        name: "Tous les Projets",
        src: "/images/signin_menu.svg",
        link: "/projects",
      },
      {
        id: 2,
        name: "Clients",
        src: "/images/users_menu.svg",
        link: "/clients",
      },
      {
        id: 3,
        name: "Activités et Domaines",
        src: "/images/data_menu.svg",
        link: "/activities",
      },
    ],
  },
];
