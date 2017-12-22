import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdDirective } from './directives/ad.directive';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './components/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { AdService }            from './services/ad.service';


@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
