import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { distinctUntilChanged, fromEvent } from 'rxjs';
import {
  BOTH_SIDES_MATCH,
  IS_NAVIGATION_OPEN,
  PROJECT_IN_VIEW,
} from '../events';
import { data, data_reversed } from '../data';

@Component({
  selector: 'app-content-scroll-left',
  templateUrl: './content-scroll-left.component.html',
  styleUrls: ['./content-scroll-left.component.scss'],
})
export class ContentScrollLeftComponent implements OnInit {
  public project: any;
  public currentId = 0;
  public title = '';
  public scrollY = Math.floor(window.scrollY);
  public innerHeight = window.innerHeight;
  public isMatch = false;
  public isNavigationOpen = false;
  public data_reversed = data_reversed;

  constructor(private $cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('this.data', this.data_reversed);
    BOTH_SIDES_MATCH.pipe(distinctUntilChanged()).subscribe((state) => {
      console.log('change', state);
      this.isMatch = state;
    });

    IS_NAVIGATION_OPEN.pipe(distinctUntilChanged()).subscribe(
      (state) => (this.isNavigationOpen = state)
    );

    PROJECT_IN_VIEW.pipe(distinctUntilChanged()).subscribe((id) => {
      this.project = data[id];
      this.currentId = id;
      // this.title = this.project.title;
      this.$cdr.detectChanges();
    });

    fromEvent(window, 'scroll').subscribe(() => {
      console.log('scroll', Math.floor(window.scrollY));
      this.scrollY = Math.floor(window.scrollY);
    });
  }
}
