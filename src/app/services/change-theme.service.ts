import { Injectable } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ChangeThemeService {
  currentTheme: string = 'default'; // default value

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'default' ? 'dark' : 'default';
    this.themeService.changeTheme(newTheme);
    this.currentTheme = newTheme;
    console.log('Theme changed to:', newTheme);
  }
}
