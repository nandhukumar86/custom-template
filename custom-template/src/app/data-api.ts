import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApi {

  constructor(private http: HttpClient) {}

    // Example with public API
  getSampleData(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getChartData(): Observable<{ name: string; value: number }[]> {
    // Example with mock data
    return of([
      { name: 'Apples', value: 10 },
      { name: 'Bananas', value: 15 },
      { name: 'Oranges', value: 7 },
      { name: 'Mangoes', value: 12 },
    ]);
  }
}
