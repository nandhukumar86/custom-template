import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  imports: [],
  templateUrl: './text-box.html',
  styleUrl: './text-box.css'
})
export class TextBox {
@Input() text = '';
}
