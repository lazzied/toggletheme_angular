import { Component } from '@angular/core';
import { loginModule } from './login.module';


@Component({
  selector: 'app-login',
  imports: [ loginModule],
  template: `
    <nb-layout center>
      <nb-layout-header>Awesome Company</nb-layout-header>

      <nb-layout-column>
        Hello World!
      </nb-layout-column>

      <nb-layout-footer>Contact us</nb-layout-footer>
    </nb-layout>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
