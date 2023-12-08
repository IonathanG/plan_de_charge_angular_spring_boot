import { MenuType } from "../../../app/core/models/Menu";

export const MenuMainSection: MenuType[] = [
  {
    id: 0,
    name: "Dashboard",
    src: "../../../assets/images/icons/home_menu.svg",
    link: "/",
  },
  {
    id: 1,
    name: "Graphiques",
    src: "../../../assets/images/icons/charts_menu.svg",
    link: "/graphs",
  },
  {
    id: 2,
    name: "Projets",
    src: "../../../assets/images/icons/projects_menu.svg",
    link: "/projects",
    sub_menu: [
      {
        id: 0,
        name: "Cadres des Projets",
        src: "../../../assets/images/icons/sub_menu.svg",
        link: "/frameworks",
      },
      {
        id: 1,
        name: "Tous les Projets",
        src: "../../../assets/images/icons/sub_menu.svg",
        link: "/projects/list",
      },
      {
        id: 2,
        name: "Activités et Domaines",
        src: "../../../assets/images/icons/sub_menu.svg",
        link: "/activities",
      },
      {
        id: 3,
        name: "Clients",
        src: "../../../assets/images/icons/sub_menu.svg",
        link: "/clients",
      },
    ],
  },
];
