import { Component } from '@angular/core';
import { TextBox } from '../text-box/text-box';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-a4-page',
  imports: [TextBox, CommonModule],
  templateUrl: './a4-page.html',
  styleUrl: './a4-page.css'
})
export class A4PageComponent {
items = [
    {
      type: 'text',
      x: 20,
      y: 30,
      width: 80,
      height: 20,
      data: { text: 'Visit First Box <a href="https://openai.com" target="_blank">OpenAI</a>' },
    },
    {
      type: 'text',
      x: 100,
      y: 200,
      width: 70,
      height: 30,
      data: { text: 'Visit Second Box <a href="https://openai.com" target="_blank">OpenAI</a>' },
    },
    {
      type: 'text',
      x: 50,
      y: 100,
      width: 60,
      height: 25,
      data: { text: 'Visit another Box <a href="https://openai.com" target="_blank">OpenAI</a>' },
    }
  ];
}
