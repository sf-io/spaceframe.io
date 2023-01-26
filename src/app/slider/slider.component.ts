import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import SwiperCore, {Keyboard, Pagination, Navigation, Virtual, SwiperOptions} from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SliderComponent implements OnInit {
  @Input() slider: any;

  currentSlide = 0;
  title = 'default';

  config: SwiperOptions = {
    slidesPerView: 4.5,
    initialSlide: 0,
    spaceBetween: 1,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    keyboard: { enabled: true },
    virtual: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  };
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange(swiper: any) {
    const activeIndex = swiper[0].activeIndex;
    console.log('slide change', activeIndex);
    this.currentSlide = swiper[0].activeIndex;
    this.title = this.slider[activeIndex].title;
  }

  slides$ = new BehaviorSubject<string[]>(['']);

  constructor() {}

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 20 }).map((el, index) => `Slide ${index + 1}`)
    );
  }

  ngAfterViewInit(): void {
    console.log('data', this.slider)
}

}
