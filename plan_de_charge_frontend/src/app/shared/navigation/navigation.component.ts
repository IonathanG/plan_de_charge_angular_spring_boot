import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["navigation.component.scss"],
})
export class NavigationComponent {
  @Input() label: string = "Test";

  constructor(private router: Router, private location: Location) {}

  navigateToHome(): void {
    this.router.navigate(["/dashboard"]);
  }

  navigateToPreviousPage(): void {
    this.location.back();
  }
}
