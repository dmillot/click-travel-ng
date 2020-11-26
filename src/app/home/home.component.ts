import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Destination } from '../interfaces/IDestination';
import { ClickTravelService } from '../services/click-travel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Choose your dream destination...';
  dreamDestinations: Destination[];

  constructor(private travelService: ClickTravelService) { }

  ngOnInit() {
    this.getDreamDestinations();
  }

  getDreamDestinations() {
    this.travelService.getDestinations().pipe(
      map(destinations => destinations.filter((destination: { isDreamDestination: boolean; }) => destination.isDreamDestination === true))
    )
      .subscribe(
        (destinations: Destination[]) => this.dreamDestinations = destinations
      )
  }

}
