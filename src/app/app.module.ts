import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SwiperModule} from 'swiper/angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PreviewComponent} from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
