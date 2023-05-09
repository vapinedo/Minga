import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { MaterialModule } from './modules/custom/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

// Services
import { ApiService } from './services/api.service';
import { ApiService2 } from './services/api.service2';
import { DatePickerFormatDirective } from "./date-picker-format.directive";



//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent} from './home/navbar/navbar.component';
import { LogginComponent } from './loggin/loggin.component';
import { ComprarComponent } from './home/comprar/comprar.component';
import { RegistroComponent } from './registro/registro.component';
import { OfertasComponent } from './home/ofertas/ofertas.component';
import { RsocioComponent } from './registro/rsocio/rsocio.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { RvendedorComponent } from './registro/rvendedor/rvendedor.component';
import { SocionaturalComponent } from './registro/rsocio/socionatural/socionatural.component';
import { VendedorbysComponent } from './registro/rvendedor/vendedorbys/vendedorbys.component';
import { SociojuridicoComponent } from './registro/rsocio/sociojuridico/sociojuridico.component';
import { ServprofesionalesComponent } from './home/servprofesionales/servprofesionales.component';
import { PrestadorservComponent } from './registro/rvendedor/prestadorserv/prestadorserv.component';

const components = [
  AppComponent,
  ServprofesionalesComponent,
  NavbarComponent,
  ComprarComponent,
  OfertasComponent,
  ContactoComponent,
  RegistroComponent,
  HomeComponent,
  RvendedorComponent,
  RsocioComponent,
  SocionaturalComponent,
  SociojuridicoComponent,
  VendedorbysComponent,
  PrestadorservComponent,
  LogginComponent
];

const modules = [
  FormsModule,
  BrowserModule,
  MaterialModule,
  HttpClientModule,
  AppRoutingModule,
  ReactiveFormsModule,
  AutocompleteLibModule,
  MatDatepickerModule,
  MatMomentDateModule,
];

@NgModule({
  declarations: [components, DatePickerFormatDirective],
  imports: [modules, BrowserAnimationsModule],
  providers: [ApiService, ApiService2,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
