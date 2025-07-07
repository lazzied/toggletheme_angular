import { NgModule } from '@angular/core';
import {
    NbLayoutModule,NbCardModule,NbInputModule,NbButtonModule,
    NbThemeModule,
  } from '@nebular/theme';

  @NgModule({
    imports: [
        NbThemeModule.forRoot({ name: 'default' }),
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        NbLayoutModule,
    ]
  })
export class AppModule {

}