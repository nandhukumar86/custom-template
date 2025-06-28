import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfGenerator } from './pdf-generator';
import { CommonModule } from '@angular/common';
import { TextBox } from './text-box/text-box';
import { TableBox } from './table-box/table-box';
import { Graph1 } from './graph1/graph1';
import { FrontCover } from './front-cover/front-cover';


@Component({
  selector: 'app-root',
  imports: [CommonModule, TextBox, TableBox, Graph1,FrontCover],
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
          type: 'front-cover',
          x: 0,
          y: 0,
          width: 210,
          height: 297,
        }
      ],
    },
    {
      pageNumber: 1,
      items: [
        {
          type: 'text',
          x: 20,
          y: 30,
          width: 80,
          height: 20,
        },
        {
          type: 'text',
          x: 100,
          y: 200,
          width: 70,
          height: 30,
        },
         {
          type: 'graph1',
          x: 50,
          y: 75,
          width: 100,
          height: 80,
        },
      ],
    },
    {
      pageNumber: 2,
      items: [
        {
          type: 'text',
          x: 20,
          y: 30,
          width: 100,
          height: 20,
        },
        {
          type: 'table',
          x: 50,
          y: 100,
          width: 150,
          height: 100,
        },
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
