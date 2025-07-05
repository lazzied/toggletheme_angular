import { NgModule } from '@angular/core';
import {
  NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule, NbThemeModule
} from '@nebular/theme';

@NgModule({
  imports: [
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule,
    NbThemeModule,
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  exports: [
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule,
    NbThemeModule
  ]
})
export class loginModule {

}