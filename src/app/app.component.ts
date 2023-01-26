import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spaceframe.io';

  // public data = 'testdata';

  public sliders = [
    [
      {title: "stack", stack: ['angular', 'typescript', 'docker']},
      {title: "image", image: 'myurl'},
      {title: "info", info: 'hier steht die beschreibung zu dem projekt'},
      {title: "ccc", section: 'C', phoneNumber: '789', studentID: 103},
      {title: "dd", section: 'C', phoneNumber: '789', studentID: 103},
      {title: "eee", section: 'C', phoneNumber: '789', studentID: 103},

    ],
    [
      {title: "abc2", section: 'A', phoneNumber: '123', studentID: 101},
      {title: "xyz2", section: 'B', phoneNumber: '456', studentID: 102},
      {title: "mno2", section: 'C', phoneNumber: '789', studentID: 103},
    ],

  ];


}
