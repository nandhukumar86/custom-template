import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A4PageComponent } from './a4-page/a4-page';
import { PdfGenerator } from './pdf-generator';

@Component({
  selector: 'app-root',
  imports: [A4PageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'custom-template';

  constructor(private pdfService: PdfGenerator) { }

  downloadPDF() {
    //this.pdfService.downloadA4('a4-content', 'a4-document.pdf');


    // this.pdfService.downloadA4WithLinks('a4-content', 'file.pdf', [
    //   {
    //     text: 'OpenAI',
    //     x: 20, // mm from left
    //     y: 50, // mm from top
    //     url: 'https://openai.com',
    //   },
    //   {
    //     text: 'Google',
    //     x: 50,
    //     y: 100,
    //     url: 'https://google.com',
    //   },
    // ]);


    this.pdfService.downloadA4WithAutoLinks('a4-content', 'document.pdf');
  }
}
