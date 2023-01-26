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
    console.log('slide change', swiper[0].activeIndex);
    this.currentSlide = swiper[0].activeIndex;
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
