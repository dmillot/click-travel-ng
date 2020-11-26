import { Destination } from './interfaces/IDestination';
import { ClickTravelService } from './services/click-travel.service';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
