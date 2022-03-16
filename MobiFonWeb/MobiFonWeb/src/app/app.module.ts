import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelefoniComponent } from './Components/telefoni/telefoni.component';
import {HttpClientModule} from "@angular/common/http";
import { EditTelefonComponent } from './Components/edit-telefon/edit-telefon.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { TelefonDetaljiComponent } from './Components/telefon-detalji/telefon-detalji.component';
import { BannersComponent } from './Components/banners/banners.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TelefoniComponent,
    EditTelefonComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    TelefonDetaljiComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
