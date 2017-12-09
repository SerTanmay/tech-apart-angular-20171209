import { Component } from '@angular/core';
import { Trip } from './models/trip';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'app';
  trip: Trip = {
    name: 'Super Flights to Mars';
    price: 18200;
    duration: '2 Earth Years';
    description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.';
  };
  
}
