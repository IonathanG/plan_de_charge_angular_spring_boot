import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { HeaderLogoComponent } from "./header-logo/header-logo.component";
import { HeaderHamburgerComponent } from "./header-hamburger/header-hamburger.component";
import { ButtonMainComponent } from "../../shared/buttons/button-main/button-main.component";
import { HeaderNotificationComponent } from "./header-notification/header-notification.component";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { HeaderSettingsComponent } from './header-settings/header-settings.component';
import { HeaderLogoutComponent } from './header-logout/header-logout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderHamburgerComponent,
    ButtonMainComponent,
    HeaderNotificationComponent,
    HeaderSettingsComponent,
    HeaderLogoutComponent,
  ],
  imports: [CommonModule, MatBadgeModule, MatIconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
