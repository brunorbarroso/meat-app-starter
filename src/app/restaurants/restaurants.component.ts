import { RestaurantService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private RestaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurants = this.RestaurantService.restaurants()
  }

}
