import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  public sliders = [
    [
      {title: "technology", stack: ['angular', 'typescript', 'docker']},
      {title: "image", image: 'assets/so/so.jpg'},
      {title: "info", info: 'hier steht die beschreibung zu dem projekt'},
      {title: "ccc", section: 'C', phoneNumber: '789', studentID: 103},
      {title: "dd", section: 'C', phoneNumber: '789', studentID: 103},
      {title: "eee", section: 'C', phoneNumber: '789', studentID: 103},

    ],
    [
      {title: "abc2", section: 'A', phoneNumber: '123', studentID: 101},
      {title: "xyz2", section: 'B', phoneNumber: '456', studentID: 102},
      {title: "mno2", section: 'C', phoneNumber: '789', studentID: 103},
      {title: "abc2", section: 'A', phoneNumber: '123', studentID: 101},
      {title: "xyz2", section: 'B', phoneNumber: '456', studentID: 102},
      {title: "mno2", section: 'C', phoneNumber: '789', studentID: 103},
    ],

  ];
}
