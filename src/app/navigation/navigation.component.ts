import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  projects = ['Project1', 'Project2', 'Project3'];

  stack = ['Angular', 'Vue', 'Typescript', 'CSS'];

  areas = ['Frontend', 'User Interface', 'User Experience', '3d', 'Rendering'];


  constructor() {
  }

  ngOnInit(): void {
  }

}
