import { Component, OnInit } from '@angular/core';
import { AppModule } from './app.module';
import {RouterModule, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private router: Router) {}
  redirect(){
    console.log('workingg');
    this.router.navigate(['/']);
  }
  ngOnInit () {}


}
