import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar-header",
  templateUrl: "./navbar-header.component.html",
  styleUrls: ["./navbar-header.component.scss"],
})
export class NavbarHeaderComponent {
  constructor(private router: Router) {}

  navigateToUserProfile(): void {
    this.router.navigate(["/user/profile"]);
  }
}
