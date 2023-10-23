import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditService } from 'src/app/services/edit.service';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editData = new FormGroup({
    Manufacturer: new FormControl(''),
    ModelName: new FormControl(''),
    Category: new FormControl(''),
    ScreenSize: new FormControl(''),
    Screen: new FormControl(''),
    CPU: new FormControl(''),
    RAM: new FormControl(''),
    Storage: new FormControl(''),
    GPU: new FormControl(''),
    OperatingSystem: new FormControl(''),
    OperatingSystemVersion: new FormControl(''),
    Weight: new FormControl(''),
    PriceEuros: new FormControl(''),
    image: new FormControl(''),
  });

  id: string = '';

  constructor(
    private editService: EditService,
    private router: ActivatedRoute,
    private route: Router,
    private addService:AddService
  ) {
    this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.id) {
      this.getEditData(this.id);
    }
  }

  getEditData(id: any) {
    this.editService.getCurrentData(id).subscribe((result: any) => {
      console.log(result);
      this.editData.setValue({
        Manufacturer: result.Manufacturer,
        ModelName: result.ModelName,
        Category: result.Category,
        ScreenSize: result.ScreenSize,
        Screen: result.Screen,
        CPU: result.CPU,
        RAM: result.RAM,
        Storage: result.Storage,
        GPU: result.GPU,
        OperatingSystem: result.OperatingSystem,
        OperatingSystemVersion: result.OperatingSystemVersion,
        Weight: result.Weight,
        PriceEuros: result.PriceEuros,
        image: result.image,
      });
    });
  }

  onFormSubmit() {
    if (this.editData.valid) {
      if (this.id) {
        this.editService.updateData(this.id, this.editData.value).subscribe({
          next: (val: any) => {
            // Handle successful update
            this.route.navigate(['/products']);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this.addService.addLaptop(this.editData.value).subscribe({
          next: (val: any) => {
            // Handle successful add
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
