import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TasksService } from './tasks/tasks.service';
//import { TasksService } from './tasks/tasks.service';

//export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token')

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    // {
    //   provide: TasksServiceToken,
    //   useClass: TasksService
    // }
    // TasksService  // always included, op tree shaking optimzation
  ]
};
