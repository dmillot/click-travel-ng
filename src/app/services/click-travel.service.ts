import { Destination } from './../interfaces/IDestination';
import { Ticket } from './../interfaces/ITicket';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${environment.apiBaseUrl}/destinations`);
  }

  getDestinationTickets(destinationCode: string): Observable<Ticket[]> {
    let params: any = new HttpParams();
    const opts = { params: new HttpParams({ fromString: "_page=1&_limit=10" }) };
    params = params.append('filter', JSON.stringify({ "where": { "to": destinationCode } }));

    return this.http.get<Ticket[]>(`${environment.apiBaseUrl}/tickets`, { params });
  }
}
