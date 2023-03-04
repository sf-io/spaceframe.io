import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { distinctUntilChanged, fromEvent } from 'rxjs';
import {
  BOTH_SIDES_MATCH,
  NEXT_SLIDE,
  PREV_SLIDE,
  PROJECT_IN_VIEW,
} from '../events';
import { data } from '../data';
import { ViewportScroller } from '@angular/common';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-content-fixed',
  templateUrl: './content-fixed.component.html',
  styleUrls: ['./content-fixed.component.scss'],
})
export class ContentFixedComponent implements OnInit {
  public project: any;
  public currentId = 0;
  public title = '';
  public isMatch = false;
  public scrollY = 0;
  public prev = false;

  public data = data;
  constructor(
    private $cdr: ChangeDetectorRef,
    public $helperService: HelperService
  ) {}

  ngOnInit(): void {
    PREV_SLIDE.subscribe(() => {
      this.prev = true;
      console.log('clicked prev');
    });

    NEXT_SLIDE.subscribe(() => {
      console.log('clicked next');
    });

    BOTH_SIDES_MATCH.pipe(distinctUntilChanged()).subscribe((state) => {
      this.isMatch = state;
    });

    PROJECT_IN_VIEW.pipe(distinctUntilChanged()).subscribe((id) => {
      console.log('currentID', id);
      this.project = data[id];
      this.currentId = id;
      // this.title = this.project.title;
      this.$cdr.detectChanges();
    });

    fromEvent(window, 'scroll').subscribe(() => {
      this.scrollY = Math.floor(window.scrollY);
    });
  }

  prevSlide() {
    PREV_SLIDE.next(true);
  }

  nextSlide() {
    NEXT_SLIDE.next(true);
  }

  /*
  public adjustProjectView(): void {
    console.log('yPos', window.scrollY);
    const yScrollTarget =
      Math.round(window.scrollY / window.innerHeight) * window.innerHeight;
    console.log('yPos target', yScrollTarget);

    window.scrollTo({
      top: yScrollTarget,
      left: 0,
      behavior: 'smooth',
    });
  }*/
}
