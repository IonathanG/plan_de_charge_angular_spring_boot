import { Component } from "@angular/core";

@Component({
  selector: "app-navbar-menu-modal",
  templateUrl: "./navbar-menu-modal.component.html",
  styleUrls: ["navbar-menu-modal.component.scss"],
})
export class NavbarMenuModalComponent {
  showNavigation: boolean = true;

  toggleView(showNavigation: boolean) {
    this.showNavigation = showNavigation;
  }
}
