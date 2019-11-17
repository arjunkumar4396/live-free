
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contacts/contact-us.component';
import { FaqComponent } from './contacts/faq/faq.component';
import { ImpactComponent } from './impact/impact.component';
import { OurModelsComponent } from './our-models/our-models.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about-us',component:AboutUsComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  {
    path:'faq',component:FaqComponent
  },
  {
    path:'impact', component:ImpactComponent
  },
  {
    path:'our-models',component:OurModelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
