import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurModelsComponent } from './our-models/our-models.component';
import { ImpactComponent } from './impact/impact.component';
import { ContactUsComponent } from './contacts/contact-us.component';
import { MenstruationChallengesComponent } from './our-models/menstruation-challenges/menstruation-challenges.component';
import { SanitaryPadsComponent } from './our-models/sanitary-pads/sanitary-pads.component';
import { OurInitiativesComponent } from './our-models/our-initiatives/our-initiatives.component';
import { OurImpactComponent } from './impact/our-impact/our-impact.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { FaqComponent } from './contacts/faq/faq.component';

@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutUsComponent,
        OurModelsComponent,
        ImpactComponent,
        ContactUsComponent,
        MenstruationChallengesComponent,
        SanitaryPadsComponent,
        OurInitiativesComponent,
        OurImpactComponent,
        FaqComponent
    ],
    imports: [
        DashboardRoutingModule
    ],
    providers: []
})

export class DashboardModule {

}