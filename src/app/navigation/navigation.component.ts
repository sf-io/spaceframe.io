import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  stack = ['Angular × Universal', 'Vue × Nuxt', 'TypeScript', 'JavaScript', '(S)CSS', 'Figma', 'Adobe Cloud', 'Cinema4D'];

  expertise = ['Frontend Engineering', 'Page Performance', 'User Interfaces', 'User Experience', '3d Rendering'];

  commits: any = [];

  readonly logoTitle = 'spaceframe';
  logoEffect = '';

  counter = 0;
  intervalID: any;
  charArr: string[] = [];
//ABCDEFGHIJKLMNOPQRSTUVWXYZ
  digits = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

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
    this.typeEffect();
  }

  typeEffect(): void {
    this.counter = 0;
    this.intervalID = setInterval(() => this._typeEffect(), 100);
  }

  private _typeEffect(): void {
    this.charArr = this.logoTitle.split("");

    for (let i = this.counter; i < this.charArr.length; i++) {
      const pos = Math.floor(Math.random() * this.digits.length - 1);
      this.charArr[i] = this.digits[pos];
    }

    this.logoEffect = this.charArr.join('');

    if (this.counter >= this.charArr.length) {
      clearInterval(this.intervalID);
    }
    this.counter++;
  }
}
