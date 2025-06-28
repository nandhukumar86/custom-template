import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DataApi } from '../data-api';

@Component({
  selector: 'app-table-box',
  imports: [CommonModule],
  templateUrl: './table-box.html',
  styleUrl: './table-box.css'
})
export class TableBox implements OnInit {
  data: any[] = [];
  loading = true;

  constructor(private api: DataApi) { }

  ngOnInit(): void {
    this.api.getSampleData().subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }
}
