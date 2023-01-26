import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spaceframe.io';

  // public data = 'testdata';

  public sliders = [[
    {name: "abc", section: 'A', phoneNumber: '123', studentID: 101},
    {name: "xyz", section: 'B', phoneNumber: '456', studentID: 102},
    {name: "mno", section: 'C', phoneNumber: '789', studentID: 103},
  ],[
    {name: "abc", section: 'A', phoneNumber: '123', studentID: 101},
    {name: "xyz", section: 'B', phoneNumber: '456', studentID: 102},
    {name: "mno", section: 'C', phoneNumber: '789', studentID: 103},
  ],

  ];


}
