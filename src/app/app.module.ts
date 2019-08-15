import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';
import { GoogleGalleryComponent } from './google-gallery/google-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    VideoGalleryComponent,
    GoogleGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
