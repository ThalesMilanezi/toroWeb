import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../../app/mocks/mock-user-data'
import { stocks } from '../../app/mocks/mock-stocks-data';
import { trends } from '../../app/mocks/mock-trends-data';

/**
 * @title List with selection
 */

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

// @Injectable({
//   providedIn: 'root',
// })

@Component({
  selector: 'app-investiment-list',
  templateUrl: './investiment-list.component.html',
  styleUrl: './investiment-list.component.scss',
})
export class InvestimentListComponent {
  Stocks: string[] = ['PETR4', 'MGLU3', 'VVAR3', 'SANB11', 'TORO4', "ITUB3", "BBDC3", "TAEE11", "ITSA3", "CPLE6"];

  // integration

//   private apiUrl = 'http://localhost:3000/api';
//   constructor(private http: HttpClient) {}

//   getInvestiments(): Observable<typeof stocks[] | any> {
//     const url = `${this.apiUrl}/stocks`;
//     return this.http.get(url);
//   }

//   getTrends(): Observable<typeof trends[] | any> {
//     const url = `${this.apiUrl}/trends`;
//     return this.http.get(url);
//   }

//   makeOrder(investiment: typeof stocks, user: typeof users, amount: number): Observable<typeof stocks[] | any> {
//     const url = `${this.apiUrl}/order`;
//     const stock = investiment.map((el) => el)[0]
//     const order = {
//       email:user[0].email,
//       symbol:stock.symbol,
//       amount: amount
//   }
//     return this.http.post<typeof stocks>(url, order, httpOptions);
// }

}
