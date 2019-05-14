import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NavComponent } from "./nav/nav.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { WorkShowcaseComponent } from "./work-showcase/work-showcase.component";
import { LightboxModule } from "primeng/lightbox";
import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LightboxModule,
    NgxGalleryModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    AboutUsComponent,
    OurServicesComponent,
    ContactUsComponent,
    FooterComponent,
    WorkShowcaseComponent
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
