import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  showModal$ = new BehaviorSubject(false);

  constructor() {
    this.showModal$.subscribe(res => {
      console.log('showmodal', res);
    })

  }

}
