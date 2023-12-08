// export interface IProject {
//     id: number;
//     name: string;
//     client: IClient;
//     status: Status;
//     probability: number;
//     framework: IFramework | null;
//     activity: IActivity | null;
//     tasks: ITask[];
//     assignedToUserIds: number[];
//   }

export interface IProject {
  id: number;
  name: string;
  client: string;
  status: string;
  probability: number;
  framework?: string | null;
  activity: string | null;
  startDate: string;
  totalCharge: number;
  totalDuration: number;
  assignedToUserIds: string;
  actions: string;
}
