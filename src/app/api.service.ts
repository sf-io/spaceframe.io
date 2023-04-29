import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly host = 'https://api.spaceframe.io';
  private readonly endpoint = '/github_api/commit/polychrom/spaceframe.io';

  constructor(private $http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.$http.get(this.host + this.endpoint);
  }
}
