import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DOWN_PROJECT, NEXT_SLIDE, PREV_SLIDE, UP_PROJECT } from './events';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {
    fromEvent(document, 'keydown').subscribe((event: any) => {
      if (event.keyCode === 40 || event.key === 'ArrowDown') {
        this.goToView();
        DOWN_PROJECT.next(true);
      }

      if (event.keyCode === 38 || event.key === 'ArrowUp') {
        this.goToView(-1);
        UP_PROJECT.next(true);
      }

      if (event.keyCode === 37 || event.key === 'ArrowLeft') {
        PREV_SLIDE.next(true);
      }

      if (event.keyCode === 39 || event.key === 'ArrowRight') {
        NEXT_SLIDE.next(true);
      }

      event.preventDefault();
    });
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
}
