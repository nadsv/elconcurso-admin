import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContestsComponent } from './contests/contests.component';

import { ContestsApiService } from './contests-api.service';

import { routing } from './app.routes';

import { ContestsNameFilter } from './contests.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContestsComponent,
    ContestsNameFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [ContestsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { };
