import { Component, OnInit } from '@angular/core';
import { GoogleDriveProvider } from './googleDriveProvider';
import { GoogleImageObject } from './GoogleImageObject';

@Component({
  selector: 'app-google-gallery',
  templateUrl: './google-gallery.component.html',
  styleUrls: ['./google-gallery.component.css'],
  providers: [GoogleDriveProvider]
})
export class GoogleGalleryComponent implements OnInit {

  imageObjectArray: GoogleImageObject[] = [];
  resultsArray: any[] = [];
  dataId: string;
  colourArray = ['t1', 't2', 't3', 't4']; 

  constructor(gDrive: GoogleDriveProvider) {
    this.dataId = '17h17vhP_4TZ9hESPumcPqakmpjRyGK-jAkdATyjaFI0';
    this.getData(this.dataId, gDrive);
    this.populateImageObjectArray();
  }

  ngOnInit() {
  }

  /* Retrives data from the GoogleDriveProvider api */ 
  private getData(dataId: string, gDrive: GoogleDriveProvider){ 
    gDrive.load( this.dataId )
    .then( ( data ) => {
      console.log( data );
      this.resultsArray = data;
      this.populateImageObjectArray();
    }, ( error ) => {
      console.log( error );
    });
  }

  /* Uses creates image objects from the provided data */
  private createObjects( passedObject:any ): GoogleImageObject{
    const imageObject = new GoogleImageObject; 
    imageObject.description = passedObject.description;
    imageObject.id = passedObject.id; 
    imageObject.lastmodification = passedObject.lastmodification; 
    imageObject.owner = passedObject.owner; 
    imageObject.search = passedObject.search; 
    imageObject.size = passedObject.size ;
    imageObject.title = passedObject.title;
    imageObject.url = "https://drive.google.com/a/domain.com/thumbnail?id=" + this.stripIdFromImageUrl(passedObject.url);
    return imageObject
  }

  private stripIdFromImageUrl( url: string ): string  {
    url = url.replace( "https://drive.google.com/file/d/", "") ;
    url = url.replace( "/view?usp=drivesdk", "" );
    return url; 
  }

  private populateImageObjectArray(){ 
    const loopValue = this.resultsArray.length;
    for( let i = 1; i < loopValue; i++ ) { // loop DOES NOT start from zero due to spreadsheet 
      this.imageObjectArray.push(this.createObjects( this.resultsArray[i]) );
    }
  }

  returnColour(index: number): string {
    const indexvalue = index % 4;
    return this.colourArray[indexvalue]; 
  }
}
