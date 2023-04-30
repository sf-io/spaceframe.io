import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SwiperModule} from 'swiper/angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StackComponent} from './stack/stack.component';
import {FilenameToImageAltPipe} from './filename-to-image-alt.pipe';
import {HttpClientModule} from '@angular/common/http';
import {CommitsComponent} from './commits/commits.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectComponent } from './project/project.component';
import { TruncatePipe } from './truncate.pipe';
import { TeaserComponent } from './teaser/teaser.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    StackComponent,
    FilenameToImageAltPipe,
    CommitsComponent,
    NavigationComponent,
    ProjectComponent,
    TruncatePipe,
    TeaserComponent,
    ClockComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
