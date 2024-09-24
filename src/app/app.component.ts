import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BackgroundComponent } from './shared/background/background.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HomeComponent,BackgroundComponent,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_portfolio';  

}
