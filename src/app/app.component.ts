import { Component } from '@angular/core';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spaceframe.io';

  constructor(private $helperService: HelperService) {
    this.$helperService.checkBreakpoint();
  }
}
