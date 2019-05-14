import { Component, OnInit } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery";

@Component({
  selector: "app-work-showcase",
  templateUrl: "./work-showcase.component.html",
  styleUrls: ["./work-showcase.component.scss"]
})
export class WorkShowcaseComponent implements OnInit {
  images: any[];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  // constructor() {
  //   this.images = [];
  //   this.images.push({source:'assets/images/gallery/1.jpg', thumbnail: 'assets/images/gallery/i1.jpg', title:'Sopranos 1'});
  //   this.images.push({source:'assets/images/gallery/2.jpg', thumbnail: 'assets/images/gallery/i1.jpg', title:'Sopranos 2'});
  //   this.images.push({source:'assets/images/gallery/3.jpg', thumbnail: 'assets/images/gallery/i1.jpg', title:'Sopranos 3'});
  //   this.images.push({source:'assets/images/gallery/4.jpg', thumbnail: 'assets/images/gallery/i1.jpg', title:'Sopranos 4'});
  //  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: "1000px",
        height: "800px",
        thumbnailsColumns: 8,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "600px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: "assets/images/gallery/1.jpg",
        medium: "assets/images/gallery/1.jpg",
        big: "assets/images/gallery/1.jpg"
      },
      {
        small: "assets/images/gallery/2.jpg",
        medium: "assets/images/gallery/2.jpg",
        big: "assets/images/gallery/2.jpg"
      },
      {
        small: "assets/images/gallery/3.jpg",
        medium: "assets/images/gallery/3.jpg",
        big: "assets/images/gallery/3.jpg"
      },
      {
        small: "assets/images/gallery/4.jpg",
        medium: "assets/images/gallery/4.jpg",
        big: "assets/images/gallery/4.jpg"
      },
      {
        small: "assets/images/gallery/5.jpg",
        medium: "assets/images/gallery/5.jpg",
        big: "assets/images/gallery/5.jpg"
      },
      {
        small: "assets/images/gallery/6.jpg",
        medium: "assets/images/gallery/6.jpg",
        big: "assets/images/gallery/6.jpg"
      },
      {
        small: "assets/images/gallery/7.jpg",
        medium: "assets/images/gallery/7.jpg",
        big: "assets/images/gallery/7.jpg"
      }
    ];
  }
}
