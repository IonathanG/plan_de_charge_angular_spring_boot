import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FeatureModule } from "./features/features.module";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { HeaderComponent } from "./layout/header/header.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { HeaderModule } from "./layout/header/header-logo/header-logo/header.module";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HeaderModule,
    FeatureModule, // All Sub Routes for Pages
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
