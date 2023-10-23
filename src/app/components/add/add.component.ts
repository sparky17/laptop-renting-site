import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  Manufacturer: string = '';
  ModelName: string = '';
  Category: string = '';
  ScreenSize: string = '';
  Screen: string = '';
  CPU: string = '';
  RAM: string = '';
  Storage: string = '';
  GPU: string = '';
  OperatingSystem: string = '';
  OperatingSystemVersion: string = '';
  Weight: string = '';
  PriceEuros: number = 0;
  image: string = '';

  constructor(private addService:AddService) {}

  add(): void {
    const bodyData = {
      Manufacturer: this.Manufacturer,
      ModelName: this.ModelName,
      Category: this.Category,
      ScreenSize: this.ScreenSize,
      Screen: this.Screen,
      CPU: this.CPU,
      RAM: this.RAM,
      Storage: this.Storage,
      GPU: this.GPU,
      OperatingSystem: this.OperatingSystem,
      OperatingSystemVersion: this.OperatingSystemVersion,
      Weight: this.Weight,
      PriceEuros: this.PriceEuros,
      image: this.image
    };

    // Log the data before making the POST request
    console.log('Data to be sent:', bodyData);

    // Send a POST request to your server
    this.addService.addLaptop(bodyData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert('added')
        // Handle the response here
      },
      error: (err: any) => {
        console.error(err, 'error');
        // Handle errors here
      },
      complete: () => {
        // This is called when the observable completes (optional)
      },
    });
  }
  

  // Helper method to clear the form
  clearForm(): void {
    this.Manufacturer = '';
    this.ModelName = '';
    this.Category = '';
    this.ScreenSize = '';
    this.Screen = '';
    this.CPU = '';
    this.RAM = '';
    this.Storage = '';
    this.GPU = '';
    this.OperatingSystem = '';
    this.Weight = '';
    this.PriceEuros = 0;
    this.image = '';
  }
}
