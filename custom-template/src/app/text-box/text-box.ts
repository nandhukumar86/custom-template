import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  imports: [CommonModule],
  templateUrl: './text-box.html',
  styleUrl: './text-box.css'
})
export class TextBox {
  @Input() text = '';
}
