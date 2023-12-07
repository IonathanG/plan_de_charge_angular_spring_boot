import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuService } from "../menu.service";
import { MenuType } from "../../../core/models/Menu";
import { Router } from "@angular/router";
import { RouteService } from "../../../core/services/route-service.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-navbar-navigation-menu",
  templateUrl: "./navbar-navigation-menu.component.html",
  styleUrls: ["./navbar-navigation-menu.component.scss"],
})
export class NavbarNavigationMenuComponent implements OnInit, OnDestroy {
  menuNav: MenuType[] = [];
  selectedMenuItem: number[] = [0]; // Default selected Menu Item is the Dashboard
  currentRoute: string = ""; // Variable to store the current route
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private menuService: MenuService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    // Get the menu info to display
    this.menuNav = this.menuService.getMenuData();
    // Update the route
    this.getCurrentRoute();
    console.log("oninit");
  }

  private getCurrentRoute() {
    // Get the current route URL
    // Subscribe to changes in current route

    this.routeService
      .getCurrentRoute()
      .pipe(takeUntil(this.destroy$))
      .subscribe((route) => {
        this.currentRoute = route;

        switch (this.currentRoute) {
          case "/dashboard":
            this.selectMenuItem(0);
            break;
          case "/graphs":
            this.selectMenuItem(1);
            break;
          default:
            this.selectMenuItem(0);
            break;
        }
      });

    console.log(this.currentRoute);
  }

  private selectMenuItem(item: number) {
    // If item is 2 and is not in the array, add it. Otherwise remove it
    if (item === 2) {
      if (!this.selectedMenuItem.includes(item)) {
        this.selectedMenuItem.push(item);
      } else {
        const newArray = this.selectedMenuItem.filter(
          (number) => number !== item
        );
        this.selectedMenuItem = newArray;
      }
    }
    // If item is not 2 just replace the array by the item
    else {
      this.selectedMenuItem = [item];
    }
  }

  navigateToMenuItem(id: number, link: string) {
    // If selected menu item is the dropdown do not navigate
    if (id !== 2) {
      this.router.navigate([link]);
    }
    this.selectMenuItem(id);
  }

  navigateToSubMenuItem(link: string) {
    this.router.navigate([link]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
