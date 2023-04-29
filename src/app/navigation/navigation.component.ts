import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  projects = ['Project1', 'Project2', 'Project3'];

  stack = ['Angular', 'Vue', 'Typescript', 'CSS'];

  areas = ['Frontend', 'User Interface', 'User Experience', '3d', 'Rendering'];

  commits: any = [];

  constructor(private $apiService: ApiService) {
    this.$apiService.getData().subscribe(response => {
      if (response.length > 0) {
        response.forEach((item: any) => {
          let commit: any = {};
          commit.message = item.commit.message;
          commit.url = item.html_url;
          this.commits.push(commit);
        });
      }
    })
  }

  ngOnInit(): void {
  }

}
