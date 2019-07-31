import {OnlineCoursesComponent} from './online-courses/online-courses.component';
import {HomeComponent} from './home/home.component';
import {Course8Component} from './course-8/course-8.component';
import {Course9Component} from './course-9/course-9.component';
import {Course10Component} from './course-10/course-10.component';
import {Course11Component} from './course-11/course-11.component';
import {CourseNtseComponent} from './course-ntse/course-ntse.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  { path:'online-courses', component: OnlineCoursesComponent},
  { path:'courses-8', component: Course8Component},
  { path:'courses-9', component: Course9Component},
  { path:'courses-10', component: Course10Component},
  { path:'courses-11', component: Course11Component},
  { path:'courses-ntse', component: CourseNtseComponent},
  { path:'', component: HomeComponent}
];
export const APP_ROUTES_PROVIDER = [
   RouterModule.forRoot(routes)
];
