import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { IS_NAVIGATION_OPEN, PROJECT_IN_VIEW } from '../events';
import { data } from '../data';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-content-scroll',
  templateUrl: './content-scroll.component.html',
  styleUrls: ['./content-scroll.component.scss'],
})
export class ContentScrollComponent implements OnInit, AfterViewInit {
  public data = data;
  public currentId = 0;

  public mergedData: any;

  public isMatch = false;

  public isOpen = false;

  constructor(public $helperService: HelperService) {}

  ngOnInit(): void {
    console.log('data', this.data);

    PROJECT_IN_VIEW.subscribe((id) => (this.currentId = id));

    IS_NAVIGATION_OPEN.subscribe((state) => (this.isOpen = state));

    this.mergeSlider();
  }

  ngAfterViewInit(): void {
    const projects = Array.from(document.querySelectorAll('.project') || []);

    fromEvent(window, 'scroll').subscribe(() => {
      for (let projectId = 0; projectId < projects.length; projectId++) {
        let yPosition = projects[projectId].getBoundingClientRect().top;

        // console.log('xview c:', projectId, yPosition, window.innerHeight);

        if (yPosition >= 0 && yPosition < window.innerHeight) {
          PROJECT_IN_VIEW.next(projectId);
        }
      }
    });
  }

  mergeSlider(): void {
    data.forEach((item) => {
      for (let i = 0; i < item.slider.length; i++) {
     //   item.slider.splice(i, 0, item.slider_left[i]);
      }
    });
   // console.log('merged data', data);
  }
}
