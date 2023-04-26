import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SwiperModule} from 'swiper/angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StackComponent} from './stack/stack.component';
import {FilenameToImageAltPipe} from './filename-to-image-alt.pipe';
import {HttpClientModule} from '@angular/common/http';
import {CommitsComponent} from './commits/commits.component';

@NgModule({
  declarations: [
    AppComponent,
    StackComponent,
    FilenameToImageAltPipe,
    CommitsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
