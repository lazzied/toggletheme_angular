import { Component } from '@angular/core';
import { headerModule } from './header.module';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'app-header',
  imports: [ headerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private themeService: NbThemeService) {
    this.themeService.changeTheme('default');
  }

  toggleTheme() {
    // Toggle between 'default' and 'dark' themes
    const newTheme = this.themeService.currentTheme === 'default' ? 'dark' : 'default';
    this.themeService.changeTheme(newTheme);
  }

}
