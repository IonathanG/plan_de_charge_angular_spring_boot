import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GraphsComponent } from "./graphs/graphs.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "graphs",
    component: GraphsComponent,
  },
  {
    path: "projects",
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent, GraphsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [DashboardComponent],
})
export class FeatureModule {}
