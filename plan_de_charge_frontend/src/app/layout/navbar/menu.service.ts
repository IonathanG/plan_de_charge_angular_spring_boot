import { Injectable } from "@angular/core";
import { MenuMainSection } from "../../../assets/data/MenuNavbar/MainSection";

@Injectable()
export class MenuService {
  constructor() {}

  getMenuData() {
    return MenuMainSection;
  }
}
