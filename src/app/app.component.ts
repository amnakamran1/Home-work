import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { AboutComponent } from './about/about.component';
// import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
