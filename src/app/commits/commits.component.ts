import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss'],
})
export class CommitsComponent implements OnInit {
  public data: any[] = [];

  constructor(private $apiService: ApiService) {}

  ngOnInit(): void {
    this.$apiService.getData().subscribe((res) => {
      if (res) {
        this.data = res;
      }
      console.log('github', res);
    });
  }
}
