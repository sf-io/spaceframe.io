import { SwiperOptions } from 'swiper';

export const config: SwiperOptions = {
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 0,
  scrollbar: { draggable: true },
  keyboard: {
    enabled: false,
    onlyInViewport: true,
  },
  preventClicksPropagation: false,
  virtual: true,
  observer: true,
  observeParents: true,
};

export const config_mobile: SwiperOptions = {
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 0,
  scrollbar: { draggable: true },
  keyboard: {
    enabled: false,
    onlyInViewport: true,
  },
  preventClicksPropagation: false,
  virtual: true,
  observer: true,
  observeParents: true,
};
