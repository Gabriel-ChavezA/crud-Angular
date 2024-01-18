import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resgistro de Empleados';
  swInicio = true;
  swAlta=false;
  swConsulta=false;

  Inicio(){
    this.swAlta=false;
    this.swConsulta=false;
    this.swInicio=true;
  }
  
  Consultar()
  {
    this.swAlta=false;
    this.swConsulta=true;
    this.swInicio=false;
  }
  Alta()
  {
    this.swAlta=true;
    this.swConsulta=false;
    this.swInicio=false;
  }
}
