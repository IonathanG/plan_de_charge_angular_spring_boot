import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FeatureModule } from "./features/features.module";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { HeaderModule } from "./layout/header/header.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HeaderModule, // Header Module
    FeatureModule, // All Sub Routes for Pages
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
