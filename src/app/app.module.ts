import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VoletsComponent } from './volets/volets.component';
import { VoletDetailComponent } from './volet-detail/volet-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './carrousel/carrousel.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    VoletsComponent,
    VoletDetailComponent,
    DashboardComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
