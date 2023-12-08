import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GraphsComponent } from "./graphs/graphs.component";
import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { ProjectAddComponent } from "./project-add/project-add.component";
import { FrameworksComponent } from "./frameworks/frameworks.component";
import { ClientsComponent } from "./clients/clients.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { LoginComponent } from "./login/login.component";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { NavigationComponent } from "../shared/navigation/navigation.component";
import { MatIconModule } from "@angular/material/icon";

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
    path: "projects/list",
    component: ProjectsListComponent,
  },
  {
    path: "project/add",
    component: ProjectAddComponent,
  },
  {
    path: "frameworks",
    component: FrameworksComponent,
  },
  {
    path: "activities",
    component: ActivitiesComponent,
  },
  {
    path: "clients",
    component: ClientsComponent,
  },
  {
    path: "user/profile",
    component: UserProfileComponent,
  },
  {
    path: "admin/users",
    component: AdminUsersComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    GraphsComponent,
    ProjectsListComponent,
    ProjectAddComponent,
    FrameworksComponent,
    ClientsComponent,
    ActivitiesComponent,
    AdminUsersComponent,
    UserProfileComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ],
  exports: [DashboardComponent],
})
export class FeatureModule {}
