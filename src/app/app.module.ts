import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from "angular-ng-autocomplete";





import { AppComponent } from './app.component';
import { NavbarComponent} from './home/navbar/navbar.component';
import { ServprofesionalesComponent } from './home/servprofesionales/servprofesionales.component';
import { ComprarComponent } from './home/comprar/comprar.component';
import { OfertasComponent } from './home/ofertas/ofertas.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { RvendedorComponent } from './registro/rvendedor/rvendedor.component';
import { RsocioComponent } from './registro/rsocio/rsocio.component';
import { SocionaturalComponent } from './registro/rsocio/socionatural/socionatural.component';
import { SociojuridicoComponent } from './registro/rsocio/sociojuridico/sociojuridico.component';
import { VendedorbysComponent } from './registro/rvendedor/vendedorbys/vendedorbys.component';
import { PrestadorservComponent } from './registro/rvendedor/prestadorserv/prestadorserv.component';
import { LogginComponent } from './loggin/loggin.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule,

  ],
  providers: [ApiService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
