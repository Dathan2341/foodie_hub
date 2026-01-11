import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Cards } from './components/cards/cards';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  standalone: true,   
  imports: [RouterOutlet, Navbar, Footer,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('new');
}
