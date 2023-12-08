import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatSort, Sort, MatSortModule } from "@angular/material/sort";
import { IProject } from "../../core/models/Project";

@Component({
  selector: "app-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["projects-list.component.scss"],
})
export class ProjectsListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "name",
    "client",
    "activity",
    "startDate",
    "probability",
    "totalCharge",
    "totalDuration",
    "assignedToUserIds",
    "status",
    "actions",
  ];
  dataSource = new MatTableDataSource<any>(RANDOM_PROJECTS);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const RANDOM_PROJECTS: IProject[] = [
  {
    id: 0,
    name: "Project 1",
    client: "Client A",
    status: "In Progress",
    probability: 75,
    activity: "Activity X",
    startDate: "01/01/2022",
    totalCharge: 120,
    totalDuration: 6,
    assignedToUserIds: "bob, alice",
    actions: "edit / delete",
  },
  {
    id: 1,
    name: "Project 2",
    client: "Client A",
    status: "In Progress",
    probability: 75,
    activity: "Activity X",
    startDate: "01/01/2022",
    totalCharge: 120,
    totalDuration: 6,
    assignedToUserIds: "bob, alice",
    actions: "edit / delete",
  },
  {
    id: 2,
    name: "Project 3",
    client: "Client A",
    status: "In Progress",
    probability: 75,
    activity: "Activity X",
    startDate: "01/01/2022",
    totalCharge: 120,
    totalDuration: 6,
    assignedToUserIds: "bob, alice",
    actions: "edit / delete",
  },
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
