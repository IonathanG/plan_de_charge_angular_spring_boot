import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header-logo",
  templateUrl: "./header-logo.component.html",
  styleUrls: ["./header-logo.component.scss"],
})
export class HeaderLogoComponent {
  constructor(private router: Router) {}

  navigateToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
}
