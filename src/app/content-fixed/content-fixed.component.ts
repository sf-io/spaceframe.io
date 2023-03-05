import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { distinctUntilChanged, fromEvent } from 'rxjs';
import {
  BOTH_SIDES_MATCH,
  DOWN_PROJECT,
  IS_NAVIGATION_OPEN,
  NEXT_SLIDE,
  PREV_SLIDE,
  PROJECT_IN_VIEW,
  UP_PROJECT,
} from '../events';
import { data } from '../data';
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
  public next = false;
  public down = false;
  public up = false;
  public isOpen = false;

  public data = data;
  constructor(
    public $cdr: ChangeDetectorRef,
    public $helperService: HelperService
  ) {}

  ngOnInit(): void {
    PREV_SLIDE.subscribe(() => {
      this.prev = true;
      this.resetButton();
    });

    NEXT_SLIDE.subscribe(() => {
      this.next = true;
      this.resetButton();
    });

    UP_PROJECT.subscribe(() => {
      this.up = true;
      this.resetButton();
    });

    DOWN_PROJECT.subscribe(() => {
      this.down = true;
      this.resetButton();
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

  resetButton() {
    setTimeout(this.remove, 300);
  }

  remove = () => {
    this.prev = false;
    this.next = false;
    this.up = false;
    this.down = false;
  };

  toggleNavigation(): void {
    this.isOpen = !this.isOpen;
    IS_NAVIGATION_OPEN.next(this.isOpen);
  }
}
