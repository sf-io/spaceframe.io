import { Injectable } from '@angular/core';
import { delay, fromEvent } from 'rxjs';
import { NEXT_SLIDE, PREV_SLIDE } from './events';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {
    fromEvent(document, 'keydown').subscribe((event: any) => {
      console.log('KEY', event);

      if (event.keyCode === 40 || event.key === 'ArrowDown') {
        this.goToView();
      }
      if (event.keyCode === 38 || event.key === 'ArrowUp') {
        this.goToView(-1);
      }

      if (event.keyCode === 37 || event.key === 'ArrowLeft') {
        PREV_SLIDE.next(true);

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
    console.log('yPos', window.scrollY);
    const yScrollTarget =
      Math.round(window.scrollY / window.innerHeight) * window.innerHeight;
    console.log('yPos target', yScrollTarget);

    window.scrollTo({
      top: yScrollTarget,
      left: 0,
      behavior: 'smooth',
    });
  }
}
