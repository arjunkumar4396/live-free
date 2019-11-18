
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contacts/contact-us.component';
import { FaqComponent } from './contacts/faq/faq.component';
import { ImpactComponent } from './impact/impact.component';
import { OurModelsComponent } from './our-models/our-models.component';
import { OurImpactComponent } from './impact/our-impact/our-impact.component';
import { MenstruationChallengesComponent } from './our-models/menstruation-challenges/menstruation-challenges.component';
import { OurInitiativesComponent } from './our-models/our-initiatives/our-initiatives.component';
import { SanitaryPadsComponent } from './our-models/sanitary-pads/sanitary-pads.component';


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
  },
  {
    path:'our-models/mensturation-challenges',component:MenstruationChallengesComponent
  },
  {
    path:'our-models/our-initiatives',component:OurInitiativesComponent
  },
  {
    path:'our-models/sanitary-pads',component:SanitaryPadsComponent
  },
  {
    path:'impact/our-impact',component:OurImpactComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
