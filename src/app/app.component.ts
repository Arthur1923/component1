import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MeuPrimeiroComponent} from './primeiro-projeto/primeiro-projeto.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MeuPrimeiroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mundo';
}
