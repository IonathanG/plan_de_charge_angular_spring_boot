import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { NavbarHeaderComponent } from "./navbar-header/navbar-header.component";
import { NavbarMenuModalComponent } from "./navbar-menu-modal/navbar-menu-modal.component";
import { TagInfoComponent } from "../../shared/tag-info/tag-info.component";
import { MatIconModule } from "@angular/material/icon";
import { NavbarNavigationMenuComponent } from "./navbar-navigation-menu/navbar-navigation-menu.component";
import { MenuService } from "./menu.service";

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarHeaderComponent,
    NavbarMenuModalComponent,
    TagInfoComponent,
    NavbarNavigationMenuComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [NavbarComponent],
  providers: [MenuService],
})
export class NavbarModule {}
