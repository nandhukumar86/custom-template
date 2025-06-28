import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfGenerator {

  constructor() { }

  async downloadMultiPageA4WithAutoLinksByViewList(
    pages: any[],
    fileName: string = 'document.pdf'
  ) {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = 210;
    const pdfHeight = 297;

    for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
      const element = document.getElementById(`a4-content-${pageIndex}`);
      if (!element) continue;

      const anchors = Array.from(element.querySelectorAll('a'));

      const scale = 3;
      const canvas = await html2canvas(element, {
        scale: scale,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');

      const containerRect = element.getBoundingClientRect();
      const pxToMm = pdfWidth / containerRect.width;

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (pageIndex !== 0) pdf.addPage();

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      // Add clickable links
      anchors.forEach((a) => {
        const rect = a.getBoundingClientRect();

        const x = (rect.left - containerRect.left) * pxToMm;
        const y = (rect.top - containerRect.top) * pxToMm;
        const width = rect.width * pxToMm;
        const height = rect.height * pxToMm;

        pdf.link(x, y, width, height, { url: a.href });
      });
    }

    pdf.save(fileName);
  }
}
