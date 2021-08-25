import { CarService } from './car.service';
import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: Car[] = [];
  error = '';
  success = '';

  constructor(private carService: CarService){}

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getAll().subscribe(
      (data: Car[]) => {
        this.cars = data;
        this.success = 'successful retrieval of the list';
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
}
