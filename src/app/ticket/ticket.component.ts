import { Destination } from './../interfaces/IDestination';
import { Ticket } from './../interfaces/ITicket';
import { Component, Input, OnInit } from '@angular/core';
import { ClickTravelService } from '../services/click-travel.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket;
  destination: Destination;
  departure: Destination;

  constructor(private travelService: ClickTravelService) { }

  ngOnInit(): void {
    this.getDestination();
    this.getDeparture();
  }

  getDestination() {
    this.travelService.getDestinationByCode(this.ticket.to).subscribe((destination: Destination) => this.destination = destination);
  }

  getDeparture() {
    this.travelService.getDestinationByCode(this.ticket.from).subscribe((departure: Destination) => this.departure = departure);
  }

}
