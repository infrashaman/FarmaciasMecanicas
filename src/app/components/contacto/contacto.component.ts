import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { PlacesService } from 'src/app/places.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit{
  datos: FormGroup;
  constructor(private placesService: PlacesService) { 
    this.datos = new FormGroup({
      nomempresa: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    })
   }

   ngOnInit(): void {
     
   }

   async onSubmit(){
    console.log(this.datos.value)
    const response = await this.placesService.addPlace(this.datos.value);
    console.log(response);
   }
}