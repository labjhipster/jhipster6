import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster7SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhipster7SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Jhipster7HomeModule {}
