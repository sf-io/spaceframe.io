import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
import Swiper from 'swiper';
import { NEXT_SLIDE, PREV_SLIDE, PROJECT_IN_VIEW } from '../events';
import { HelperService } from '../helper.service';
import { SwiperOptions } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {
  activeIndex = 0;
  public currentId = 1;
  public isSwiperActive = false;

  swiperControl: any;

  @Input() slider: any;

  @Input() sliderIndex = 0;

  @Input() position: string | undefined;

  @Input() slidesCount = false;

  @ViewChild('swiper') myswiper: Swiper | undefined;

  currentSlide = 0;

  activeSlide = 1;

  config: SwiperOptions = {
    loop: true,
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 0,
    scrollbar: { draggable: true },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    preventClicksPropagation: false,
    virtual: true,
    observer: true,
    observeParents: true,
  };

  onSwiper(swiper: any) {
    // reminder
  }

  onSlideChange(swiper: any) {
    this.$helperService.adjustProjectView();

    this.activeSlide = swiper[0]?.realIndex + 1;
  }

  slideNext(): void {
    this.swiperControl.slideNext();
  }

  constructor(private $helperService: HelperService) {}

  ngOnInit(): void {
    PROJECT_IN_VIEW.pipe(distinctUntilChanged()).subscribe((currentId) => {
      this.currentId = currentId;

      // enable only active slider
      if (this.currentId === this.sliderIndex) {
        console.log('enable', this.currentId, this.sliderIndex);

        this.swiperControl.enable();
        this.isSwiperActive = true;
      } else {
        console.log('disable', this.currentId, this.sliderIndex);

        this.swiperControl.disable();
        this.isSwiperActive = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.swiperControl = this.myswiper;
    this.swiperControl = this.swiperControl.elementRef.nativeElement.swiper;

    console.log('control', this.swiperControl);

    NEXT_SLIDE.subscribe(() => this.swiperControl.slideNext());
    PREV_SLIDE.subscribe(() => this.swiperControl.slidePrev());
  }
}
