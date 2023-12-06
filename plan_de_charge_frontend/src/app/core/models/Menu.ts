export type MenuItem =
  | "/"
  | "/graphs"
  | "/projects-container"
  | "/projects"
  | "/clients"
  | "/users"
  | "/frameworks"
  | "/activities";

export type MenuType = {
  id: number;
  name: string;
  src: string;
  link: MenuItem;
  sub_menu?: MenuType[];
};
