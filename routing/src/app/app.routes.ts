import { CanMatchFn, RedirectCommand, Route, Router, Routes, UrlSegment } from "@angular/router";
import { UserComponent } from "./users/user/user.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { canLeaveEditPage, NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const router = inject(Router);
  const random = Math.random();

  if(random < 0.5)
  {
    return true;
  }
  return new RedirectCommand(router.parseUrl('notfound'));
}

export const routes: Routes = [
  {
    path: 'notfound',
    component: NotFoundComponent,
    title: 'No tasks selected'
  },
  {
    path: '',
    component: NoTaskComponent,
    title: 'No tasks selected'
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'prefix'
      },
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage]
      }
    ],
    // canMatch: [dummyCanMatch],
    data: {
      message: 'Hello'
    },
    resolve: {
      userName: resolveUserName
    },
    title: resolveTitle
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];
