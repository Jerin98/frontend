import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebReqInterceptor } from './web-req.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { TimetableViewComponent } from './pages/timetable-view/timetable-view.component';
import { NewTimetableComponent } from './pages/new-timetable/new-timetable.component';
import { EditTimetableComponent } from './pages/edit-timetable/edit-timetable.component';
import { NewTtaskComponent } from './pages/new-ttask/new-ttask.component';
import { EditTtaskComponent } from './pages/edit-ttask/edit-ttask.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    LoginPageComponent,
    SignupPageComponent,
    EditListComponent,
    EditTaskComponent,
    TimetableViewComponent,
    NewTimetableComponent,
    EditTimetableComponent,
    NewTtaskComponent,
    EditTtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

