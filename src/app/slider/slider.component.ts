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
import { config, config_mobile } from '../swiper';

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
  public config = config;
  public config_mobile = config_mobile;

  swiperControl: any;

  @Input() slider: any;

  @Input() sliderIndex = 0;

  @Input() position: string | undefined;

  @Input() slidesCount = false;

  @ViewChild('swiper') swiper: Swiper | undefined;

  currentSlide = 0;

  activeSlide = 1;

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

  constructor(public $helperService: HelperService) {}

  ngOnInit(): void {
    PROJECT_IN_VIEW.pipe(distinctUntilChanged()).subscribe((currentId) => {
      this.currentId = currentId;
      

      // enable only active slider
      if (this.currentId === this.sliderIndex) {
        this.swiperControl.enable();
        this.isSwiperActive = true;
      } else {
        this.swiperControl.disable();
        this.isSwiperActive = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.swiperControl = this.swiper;
    this.swiperControl = this.swiperControl.elementRef.nativeElement.swiper;

    NEXT_SLIDE.subscribe(() => this.swiperControl.slideNext());
    PREV_SLIDE.subscribe(() => this.swiperControl.slidePrev());
  }
}
