import { Component, OnInit } from '@angular/core';
import { Trip } from './models/trip';

import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
//import { } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Flights of a Lifetime';
  addTripFormMode = false;
  tripForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.tripForm = this.fb.group({
      name: new FormControl('', Validators.required),
      price: new FormControl('0', Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image_url: new FormControl('', Validators.required)
    })
  }

  
  trips: Trip[] = [
  {
    name: 'Super Flights to Mars',
    price: 18200,
    duration: '2 Earth Years',
    description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
    image_url: 'https://mars.nasa.gov/system/downloadable_items/37983_mars-globe-valles-marineris-enhanced.jpg', 
  },
  {
    name: 'Super Flights to Jupiter',
    price: 18200,
    duration: '3 Earth Years',
    description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
    image_url: 'https://mars.nasa.gov/system/downloadable_items/37983_mars-globe-valles-marineris-enhanced.jpg', 
  }];
  
  toggleDisplayMode() {
    this.addTripFormMode = !this.addTripFormMode;
  }

  formSubmitted() {
    const newTrip: Trip={
      name: this.tripForm.controls.name.value,
      price: this.tripForm.controls.price.value,
      duration: this.tripForm.controls.duration.value,
      description: this.tripForm.controls.description.value,
      image_url: this.tripForm.controls.image_url.value,
    };

    this.trips.push(newTrip);
    this.toggleDisplayMode();
    console.log('dfc',this.trips);
  }

}

