import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-10',
  templateUrl: './course-10.component.html',
  styleUrls: ['./course-10.component.css']
})
export class Course10Component implements OnInit {

  constructor() { }
  onNavigate () {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfIZh1MWvDOYxQOrKSXyxH1SljAeLnW8-BvCneL-B67La_hbQ/viewform", "_blank")
  }

  ngOnInit() {
  }

}
