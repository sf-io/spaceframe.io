import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import {
  CURRENT_BREAKPOINT,
  DOWN_PROJECT,
  IS_NAVIGATION_OPEN,
  NEXT_SLIDE,
  ON_NAVIGATION_END,
  PREV_SLIDE,
  UP_PROJECT,
} from './events';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private currentBreakpoint = '';

  constructor(private $router: Router) {
    this.$router.events.subscribe((value) => {
      console.log('router', this.$router.url);

      console.log('Value', value);
      if (value instanceof NavigationEnd) {
        ON_NAVIGATION_END.next(value);
      }
      // console.log(this.router.url.toString());
    });

    fromEvent(window, 'resize').subscribe(() => {
      this.checkBreakpoint();
    });
    fromEvent(document, 'keydown').subscribe((event: any) => {
      if (this.showAtBreakpoint(['sm'])) {
        return;
      }

      if (event.keyCode === 9 || event.key === 'Tab') {
        IS_NAVIGATION_OPEN.next(true);
        event.preventDefault();
      }

      if (event.keyCode === 27 || event.key === 'Escape') {
        IS_NAVIGATION_OPEN.next(false);
        event.preventDefault();
      }

      if (event.keyCode === 40 || event.key === 'ArrowDown') {
        this.goToView();
        DOWN_PROJECT.next(true);
        event.preventDefault();
      }

      if (event.keyCode === 38 || event.key === 'ArrowUp') {
        this.goToView(-1);
        UP_PROJECT.next(true);
        event.preventDefault();
      }

      if (event.keyCode === 37 || event.key === 'ArrowLeft') {
        PREV_SLIDE.next(true);
        event.preventDefault();
      }

      if (event.keyCode === 39 || event.key === 'ArrowRight') {
        NEXT_SLIDE.next(true);
        event.preventDefault();
      }
    });
  }

  public checkBreakpoint(): void {
    const w = Math.min(window.innerWidth, document.documentElement.clientWidth);
    switch (true) {
      case w < 768:
        this.currentBreakpoint = 'sm';
        break;
      /*
      case w < 600:
        this.currentBreakpoint = 'md';
        break;
      case w < 768:
        this.currentBreakpoint = 'lg';
        break;
        */
      case w >= 768:
        this.currentBreakpoint = 'xl';
        break;
    }
    CURRENT_BREAKPOINT.next(this.currentBreakpoint);
  }

  public showAtBreakpoint(breakpoints: string[]) {
    // console.log('DEBUG', breakpoints, breakpoints.includes(this.currentBreakpoint));
    return breakpoints.includes(this.currentBreakpoint);
  }

  public goToView(step = 1): void {
    const yScrollTarget =
      (Math.floor(window.scrollY / window.innerHeight) + 1 * step) *
      window.innerHeight;

    window.scrollTo({
      top: yScrollTarget,
      left: 0,
      behavior: 'smooth',
    });
  }

  public adjustProjectView(): void {
    const yScrollTarget =
      Math.round(window.scrollY / window.innerHeight) * window.innerHeight;

    window.scrollTo({
      top: yScrollTarget,
      left: 0,
      behavior: 'smooth',
    });
  }

  isHome(): boolean {
    return this.$router.url === '/';
  }
}
