import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StackComponent } from './stack/stack.component';
import { SliderComponent } from './slider/slider.component';
import { IntroComponent } from './intro/intro.component';
import { FilenameToImageAltPipe } from './filename-to-image-alt.pipe';
import { ContentScrollComponent } from './content-scroll/content-scroll.component';
import { ContentFixedComponent } from './content-fixed/content-fixed.component';
import { ContentScrollLeftComponent } from './content-scroll-left/content-scroll-left.component';
import { HttpClientModule } from '@angular/common/http';
import { CommitsComponent } from './commits/commits.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StackComponent,
    SliderComponent,
    IntroComponent,
    FilenameToImageAltPipe,
    ContentScrollComponent,
    ContentFixedComponent,
    ContentScrollLeftComponent,
    CommitsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
