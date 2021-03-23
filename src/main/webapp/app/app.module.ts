import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipster7SharedModule } from 'app/shared/shared.module';
import { Jhipster7CoreModule } from 'app/core/core.module';
import { Jhipster7AppRoutingModule } from './app-routing.module';
import { Jhipster7HomeModule } from './home/home.module';
import { Jhipster7EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipster7SharedModule,
    Jhipster7CoreModule,
    Jhipster7HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipster7EntityModule,
    Jhipster7AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Jhipster7AppModule {}
