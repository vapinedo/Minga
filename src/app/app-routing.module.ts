import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LogginComponent } from './loggin/loggin.component';
import { RegistroComponent } from './registro/registro.component';
import { SocionaturalComponent } from './registro/rsocio/socionatural/socionatural.component';
import { VendedorbysComponent } from './registro/rvendedor/vendedorbys/vendedorbys.component';
import { SociojuridicoComponent } from './registro/rsocio/sociojuridico/sociojuridico.component';
import { PrestadorservComponent } from './registro/rvendedor/prestadorserv/prestadorserv.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vinculate', component: RegistroComponent },
  { path: 'vinculate/socionatural', component: SocionaturalComponent },
  { path: 'vinculate/sociojuridico', component: SociojuridicoComponent },
  { path: 'vinculate/vendedorbys', component: VendedorbysComponent },
  { path: 'vinculate/prestadorserv', component: PrestadorservComponent },
  { path: 'loggin', component: LogginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports:[RouterModule]
})
export class AppRoutingModule { }

//Exportamos todos los componentes que tenemos en el routing
export const routingComponents = [HomeComponent, RegistroComponent, SociojuridicoComponent, SocionaturalComponent,
  PrestadorservComponent, VendedorbysComponent, RegistroComponent, LogginComponent
]

