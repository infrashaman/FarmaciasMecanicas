import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  title = 'envioCorreos';

  datos:FormGroup;

  constructor(private httpclien:HttpClient) { 
    this.datos= new FormGroup ({
      nomempresa: new FormControl('', Validators.required ),
      correo: new FormControl('', [Validators.required, Validators.email]),
      numero: new FormControl('', Validators.required ),
      mensaje: new FormControl('', Validators.required)
    })
   }
   enviocorreo(){
    let params = {
      nomempresa:this.datos.value.nomempresa,
      email:this.datos.value.correo,
      numero:this.datos.value.numero,
      mensaje:this.datos.value.mensaje
    }

    console.log(params)
    this.httpclien.post('http://localhost:4200/inicio.component.html',params).subscribe(resp=>{
      console.log(resp)
    })
   }
}