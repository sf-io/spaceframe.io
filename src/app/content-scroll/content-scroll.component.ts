import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PROJECT_IN_VIEW } from '../events';
import { data } from '../data';

@Component({
  selector: 'app-content-scroll',
  templateUrl: './content-scroll.component.html',
  styleUrls: ['./content-scroll.component.scss'],
})
export class ContentScrollComponent implements OnInit, AfterViewInit {
  public data = data;
  public currentId = 0;

  public isMatch = false;

  constructor() {}

  ngOnInit(): void {
    PROJECT_IN_VIEW.subscribe((id) => (this.currentId = id));
  }

  ngAfterViewInit(): void {
    const projects = Array.from(document.querySelectorAll('.project') || []);

    fromEvent(window, 'scroll').subscribe(() => {
      for (let projectId = 0; projectId < projects.length; projectId++) {
        let yPosition = projects[projectId].getBoundingClientRect().top;

        if (yPosition > 0 && yPosition < window.innerHeight) {
          PROJECT_IN_VIEW.next(projectId);
        }
      }
    });
  }
}
