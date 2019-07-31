import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import {RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-online-courses',
  templateUrl: './online-courses.component.html',
  styleUrls: ['./online-courses.component.css']
})
export class OnlineCoursesComponent implements OnInit {

  constructor( private router: Router ) { }
  redirect_8(){
    console.log('workingg');
    this.router.navigate(['/courses-8']);
  }
  redirect_9(){
    console.log('workingg');
    this.router.navigate(['/courses-9']);
  }
  redirect_10(){
    console.log('workingg');
    this.router.navigate(['/courses-10']);
  }
  redirect_11(){
    console.log('workingg');
    this.router.navigate(['/courses-11']);
  }
  redirect_ntse(){
    console.log('workingg');
    this.router.navigate(['/courses-ntse']);
  }

  ngOnInit() {
  }

}
