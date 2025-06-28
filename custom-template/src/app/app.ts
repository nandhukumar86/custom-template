import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfGenerator } from './pdf-generator';
import { CommonModule } from '@angular/common';
import { TextBox } from './text-box/text-box';


@Component({
  selector: 'app-root',
  imports: [CommonModule, TextBox],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'custom-template';

  pages = [
    {
      pageNumber: 0,
      items: [
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
      ],
    },
    {
      pageNumber: 1,
      items: [
        {
          type: 'text',
          x: 50,
          y: 100,
          width: 60,
          height: 25,
          data: { text: 'Visit another Box <a href="https://openai.com" target="_blank">OpenAI</a>' },
        }
      ],
    },
  ];

  constructor(private pdfService: PdfGenerator) { }

  downloadPdf() {
  const totalPages = this.pages.length;

  this.pdfService.downloadMultiPageA4WithAutoLinksByViewList(
    this.pages,
    'document.pdf'
  );
}

}
