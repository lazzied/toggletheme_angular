import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbThemeService } from '@nebular/theme';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AppModule } from './app.module';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LoginComponent, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}


