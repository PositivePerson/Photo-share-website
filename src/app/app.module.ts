import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TilesComponent } from './tiles/tiles.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { DescriptionAndCommentsComponent } from './description-and-comments/description-and-comments.component';
import { CommentsComponent } from './comments/comments.component';
import { FooterComponent } from './footer/footer.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { UserImagesComponent } from './user-images/user-images.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    TilesComponent,
    DetailViewComponent,
    DescriptionAndCommentsComponent,
    CommentsComponent,
    FooterComponent,
    MainProfileComponent,
    UserImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
