import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { SharedLayoutComponent } from 'shared-layout';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-start';
  public routes = routes;
}
