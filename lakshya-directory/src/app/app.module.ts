import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { Routes, RouterModule} from '@angular/router';
import { Course8Component } from './course-8/course-8.component';
import {APP_ROUTES_PROVIDER} from './app.routes';
import { Course9Component } from './course-9/course-9.component';
import { Course10Component } from './course-10/course-10.component';
import { Course11Component } from './course-11/course-11.component';
import { CourseNtseComponent } from './course-ntse/course-ntse.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnlineCoursesComponent,
    Course8Component,
    Course9Component,
    Course10Component,
    Course11Component,
    CourseNtseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
