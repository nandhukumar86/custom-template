import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A4PageComponent} from './a4-page/a4-page';

@Component({
  selector: 'app-root',
  imports: [A4PageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'custom-template';
}
