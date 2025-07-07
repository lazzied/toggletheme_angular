import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { loginModule } from './login.module';
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-login',
  imports: [loginModule, AppModule],
  template: `
    <nb-layout center>
      <nb-layout-header>Awesome Company</nb-layout-header>

      <nb-layout-column class="text-center">
        <button nbButton (click)="toggleTheme()" [status]="currentTheme === 'default' ? 'primary' : 'info'">
          Switch to {{ currentTheme === 'default' ? 'Dark' : 'Light' }} Theme
        </button>

        <div class="mt-4">Hello World!</div>
      </nb-layout-column>

      <nb-layout-footer>Contact us</nb-layout-footer>
    </nb-layout>
  `,
  styleUrls: ['./login.component.scss'],
  standalone: true,
})
export class LoginComponent {
  currentTheme = 'default';

  constructor(private themeService: NbThemeService) {}

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'default' ? 'dark' : 'default';
    this.themeService.changeTheme(this.currentTheme);
  }
}