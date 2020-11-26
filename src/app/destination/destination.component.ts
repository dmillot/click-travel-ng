import { Ticket } from './../interfaces/ITicket';
import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from '../services/click-travel.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  title = 'Choose your ticket...';
  tickets: Ticket[];
  code: string;

  constructor(private travelService: ClickTravelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get("code");
    this.getTickets();
  }

  getTickets() {
    this.travelService.getDestinationTickets(this.code).subscribe((tickets: Ticket[]) => this.tickets = tickets)
  }

}
