import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RestApi } from 'src/services/rest';

@NgModule({
  declarations: [
    AppComponent
    ,HomeComponent
    ,SkillsComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,HttpClientModule
  ],
  providers: [RestApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
