import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Keyboard, Pagination, Navigation, Virtual, SwiperOptions} from 'swiper';
import Swiper from "swiper";

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SliderComponent implements OnInit {

  swiperControl: any;

  firstSlide: any;

  @Input() slider: any[] = [];

  @Input() index = 0;

  @ViewChild('myswiper') myswiper: Swiper | undefined;


  currentSlide = 0;
  title = 'default';

  swiperInstance: string | undefined;

  config: SwiperOptions = {
    slidesPerView: 1.5,
    //slidesPerView: 'auto',
    spaceBetween: 1,
    scrollbar: {draggable: true},
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    virtual: true,
  };


  onSlideChange(swiper: any) {
    const activeIndex = swiper[0]?.activeIndex || 0;
    this.currentSlide = activeIndex;
    this.title = this.slider[activeIndex].title;
  }

  slideNext(): void {
    this.swiperControl.slideNext();
  }

  slidePrev(): void {
    this.swiperControl.slidePrev();
  }

  slideTo(key: string): void {
    for (let index = 0; index < this.slider.length; index++) {
      if (Object.keys(this.slider[index]).some(name => name === key)) {
        this.swiperControl.slideTo(index);
      }
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    this.swiperInstance = 'swiper' + this.index;
  }

  ngAfterViewInit(): void {
    console.log('data', this.slider)

    this.swiperControl = this.myswiper || undefined;
    this.swiperControl = this.swiperControl.elementRef.nativeElement.swiper;

    console.log('VIRTUAL', this.swiperControl);
    this.title = this.slider[0].title;
  }

  ngAfterViewChecked(): void {
    //console.log('this.swiperInstance', this.swiperInstance)
    // @ts-ignore
    //this.swiperControl = document.getElementById('swiper0').swiper;
    // console.log('swiperId', swipe);
  }

  ngOnChanges() {
// remove first slide from array
    // this.firstSlide = this.slider.shift();
  }

}
