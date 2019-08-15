import { Component, OnInit } from '@angular/core';
import { ImageObject } from './imageObject';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  slideIndex: number = 1;
  defaultImageArray: ImageObject[] = []; 
  imageArray: ImageObject[] = []; 
  colourArray = ['t1', 't2', 't3', 't4']; 
  imageTypeArray: string[] = ['a','b','c','d']; 
  selectedButton: string = '';

  constructor() { 
    this.selectedButton = '';
    for(let i = 0; i < 10; i++){
      this.defaultImageArray.push(this.createImageObject());
      this.filterOnSelection('');
    }
  }

  ngOnInit() {
  }

  returnColour(index: number): string {
    const indexvalue = index % 4;
    return this.colourArray[indexvalue]; 
  }

  createImageObject(): ImageObject{ 
    const image = new ImageObject;
    image.imageTilte = ''; 
    image.imageDescription = '';
    image.imageUrl = ''; 
    image.imageType = this.imageTypeArray[Math.floor(Math.random() * this.imageTypeArray.length)]; 
    return image;
  }

  filterOnSelection(filterValue: string){
      this.selectedButton = filterValue;
      this.imageArray = []; 
      this.defaultImageArray.forEach(image => {
        if(image.imageType === filterValue){
          this.imageArray.push(image);
        } else if (filterValue === ''){ // If no filter has been applied
          this.imageArray.push(image);
        } 
      });
  }
}
