import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="section-page">
      <app-header></app-header>
      <div class="section-main">
        <app-navbar></app-navbar>
        <div class="section-content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../styles.scss"],
})
export class AppComponent {}
