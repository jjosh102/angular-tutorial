import { NgModule } from "@angular/core";
import { App } from "./app";
import { User } from "./user/user";
import { Header } from "./header/header";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [App, Header, User],
  imports: [BrowserModule, SharedModule, TasksModule],
  providers: [],
  bootstrap: [App]
})
export class AppModule {


}
