import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "our-services",
    component: OurServicesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
