import { NgModule } from '@angular/core';
import {
    NbLayoutModule,NbCardModule,NbInputModule,NbButtonModule,
  } from '@nebular/theme';

  @NgModule({
    imports: [
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        NbLayoutModule,
    ]
  })
export class AppModule {

}