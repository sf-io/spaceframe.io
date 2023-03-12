import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly host = 'https://api.spaceframe.io';
  private readonly url = '/github_api/commit/polychrom/spaceframe.io';
  constructor(private $http: HttpClient) {
    // this.afterFetch();
  }

  getData(): Observable<any> {
    return this.$http.get(this.host + this.url);
  }

  afterFetch(): void {
    console.log('called');
    this.getData().subscribe((res) => {
      console.log('mydata', res);

      res.forEach((el: any) => {
        console.log('MSG: ', el.commit.message);
      });
    });
  }
}
