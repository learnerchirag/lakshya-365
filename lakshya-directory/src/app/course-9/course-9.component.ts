import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-9',
  templateUrl: './course-9.component.html',
  styleUrls: ['./course-9.component.css']
})
export class Course9Component implements OnInit {

  constructor() { }
  onNavigate () {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfIZh1MWvDOYxQOrKSXyxH1SljAeLnW8-BvCneL-B67La_hbQ/viewform", "_blank")
  }

  ngOnInit() {
  }

}
