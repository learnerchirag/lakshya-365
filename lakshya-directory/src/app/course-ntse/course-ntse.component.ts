import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-ntse',
  templateUrl: './course-ntse.component.html',
  styleUrls: ['./course-ntse.component.css']
})
export class CourseNtseComponent implements OnInit {

  constructor() { }
  onNavigate () {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfIZh1MWvDOYxQOrKSXyxH1SljAeLnW8-BvCneL-B67La_hbQ/viewform", "_blank")
  }

  ngOnInit() {
  }

}
