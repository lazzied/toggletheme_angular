import { NgModule } from '@angular/core';
import {
    NbLayoutModule,NbCardModule,NbInputModule,NbButtonModule,
  } from '@nebular/theme';
import { HeaderComponent } from './header.component';

  @NgModule({
    imports: [  
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        NbLayoutModule,
    ]
  })
export class headerModule {

}