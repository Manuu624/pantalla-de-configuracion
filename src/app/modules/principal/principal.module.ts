import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';

import { PrincipalRoutingModule } from './principal-routing.module';
import { ConfiguracionUsuarioComponent } from './pages/configuracion-usuario/configuracion-usuario.component';


@NgModule({
  declarations: [
    InicioComponent,
    ConfiguracionUsuarioComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ],
  exports:[
    InicioComponent
  ]
})
export class PrincipalModule { }
