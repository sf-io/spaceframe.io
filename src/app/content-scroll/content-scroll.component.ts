import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { distinctUntilChanged, fromEvent } from 'rxjs';
import {
  BOTH_SIDES_MATCH,
  NEXT_SLIDE,
  PREV_SLIDE,
  PROJECT_IN_VIEW,
} from '../events';
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

  private readonly matchThreshold = 200;

  constructor(private $cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    PROJECT_IN_VIEW.subscribe((id) => (this.currentId = id));

    BOTH_SIDES_MATCH.pipe(distinctUntilChanged()).subscribe((state) =>
      console.log('both match?', state)
    );
  }

  ngAfterViewInit(): void {
    const projects = Array.from(document.querySelectorAll('.project') || []);

    projects.forEach((element) =>
      console.log('height', element.getBoundingClientRect().height)
    );

    fromEvent(window, 'scroll').subscribe(() => {
      const inViewport = !!projects.filter(
        (project) =>
          project.getBoundingClientRect().top < window.innerHeight &&
          project.getBoundingClientRect().top > 200
      ).length;

      BOTH_SIDES_MATCH.next(inViewport);

      for (let projectId = 0; projectId < projects.length; projectId++) {
        let yPosition = projects[projectId].getBoundingClientRect().top;

        if (yPosition > 0 && yPosition < window.innerHeight) {
          PROJECT_IN_VIEW.next(projectId);
        }
      }
    });
  }
}
