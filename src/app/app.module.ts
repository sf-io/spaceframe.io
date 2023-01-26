import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StackComponent } from './stack/stack.component';
import { LogoComponent } from './logo/logo.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StackComponent,
    LogoComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
