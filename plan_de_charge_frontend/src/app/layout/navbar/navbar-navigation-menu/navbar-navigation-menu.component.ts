import { Component, OnInit } from "@angular/core";
import { MenuService } from "../menu.service";
import { MenuType } from "../../../core/models/Menu";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar-navigation-menu",
  templateUrl: "./navbar-navigation-menu.component.html",
  styleUrls: ["./navbar-navigation-menu.component.scss"],
})
export class NavbarNavigationMenuComponent implements OnInit {
  menuNav: MenuType[] = [];
  selectedMenuItem: number = 0; // Default selected Menu Item is the Dashboard
  currentRoute: string = ""; // Variable to store the current route

  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuNav = this.menuService.getMenuData();
    // Get the current route URL
    this.currentRoute = this.router.url;
    console.log("currentRoute: ", this.currentRoute);

    switch (this.currentRoute) {
      case "/":
        this.selectMenuItem(0);
        break;
      case "/":
        this.selectMenuItem(1);
        break;
      case "/":
        this.selectMenuItem(2);
        break;
      default:
        this.selectMenuItem(0);
        break;
    }
  }

  private selectMenuItem(item: number) {
    this.selectedMenuItem = item;
  }

  navigateToMenuItem(id: number, link: string) {
    this.router.navigate([link]);
    this.selectMenuItem(id);
  }
}
