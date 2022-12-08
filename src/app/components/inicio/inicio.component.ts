import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) { 
  }

  navegar(){
    this.router.navigate(['/contacto'])
  }
  navegar2(){
    this.router.navigate(['/nosotros'])
  }
}
