import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfGenerator {

  constructor() { }

  // async downloadA4(elementId: string, fileName: string = 'document.pdf') {
  //   const element = document.getElementById(elementId);
  //   if (!element) {
  //     console.error('Element not found:', elementId);
  //     return;
  //   }

  //   const canvas = await html2canvas(element, {
  //     scale: 2,
  //     useCORS: true,
  //   });

  //   const imgData = canvas.toDataURL('image/png');

  //   const pdf = new jsPDF({
  //     orientation: 'portrait',
  //     unit: 'mm',
  //     format: 'a4',
  //   });

  //   const pdfWidth = 210;
  //   const pdfHeight = 297;

  //   const imgProps = pdf.getImageProperties(imgData);
  //   const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);
  //   pdf.save(fileName);
  // }

  // async downloadA4WithLinks(
  //   elementId: string,
  //   fileName: string = 'document.pdf',
  //   links: { text: string; x: number; y: number; url: string }[] = []
  // ) {
  //   const element = document.getElementById(elementId);
  //   if (!element) {
  //     console.error('Element not found:', elementId);
  //     return;
  //   }

  //   const canvas = await html2canvas(element, {
  //     scale: 2,
  //     useCORS: true,
  //   });

  //   const imgData = canvas.toDataURL('image/png');

  //   const pdf = new jsPDF({
  //     orientation: 'portrait',
  //     unit: 'mm',
  //     format: 'a4',
  //   });

  //   const pdfWidth = 210;
  //   const pdfHeight = 297;

  //   const imgProps = pdf.getImageProperties(imgData);
  //   const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);

  //   // 🔗 Add clickable links
  //   links.forEach((link) => {
  //     pdf.setTextColor(0, 0, 255);
  //     pdf.textWithLink(link.text, link.x, link.y, { url: link.url });
  //     pdf.setTextColor(0, 0, 0);
  //   });

  //   pdf.save(fileName);
  // }

  extractLinksFromElement(elementId: string) {
    const container = document.getElementById(elementId);
    if (!container) return [];

    const links = Array.from(container.querySelectorAll('a')).map((a) => {
      const rect = a.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Convert pixels to mm (A4 width is 210mm; container width in px matches to 210mm)
      const pxToMm = 210 / containerRect.width;

      return {
        text: a.innerText,
        url: a.href,
        x: (rect.left - containerRect.left) * pxToMm,
        y: (rect.top - containerRect.top) * pxToMm + 4, // Adjust baseline
      };
    });

    return links;
  }

  async downloadA4WithAutoLinks(elementId: string, fileName = 'document.pdf') {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error('Element not found:', elementId);
      return;
    }

    // Capture the page as image
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = 210;
    const containerRect = element.getBoundingClientRect();
    const pxToMm = 210 / containerRect.width;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);

    // 🔗 Add transparent clickable links without drawing text
    const anchors = Array.from(element.querySelectorAll('a'));

    anchors.forEach((a) => {
      const rect = a.getBoundingClientRect();

      const x = (rect.left - containerRect.left) * pxToMm;
      const y = (rect.top - containerRect.top) * pxToMm;

      const width = rect.width * pxToMm;
      const height = rect.height * pxToMm;

      pdf.link(x, y, width, height, { url: a.href });
    });

    pdf.save(fileName);
  }


}
