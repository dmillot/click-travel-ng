import { Destination } from './../interfaces/IDestination';
import { Ticket } from './../interfaces/ITicket';
import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from '../services/click-travel.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  title = 'Choose your ticket...';
  tickets: Ticket[];
  code: string;
  selectedTicket: Ticket;

  constructor(private travelService: ClickTravelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get("code");
    this.getTickets();

  }

  getTickets(): void {
    this.travelService.getDestinationTickets(this.code).subscribe((tickets: Ticket[]) => this.tickets = tickets)
  }

  openTicket(ticket: Ticket): void {
    this.selectedTicket = ticket;
  }
}
