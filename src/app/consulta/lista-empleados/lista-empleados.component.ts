import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  listaEmpleados: Empleados[]= [
    {id: 1, name: "Juan", edad: 25, empresa:"Coca"},
    {id: 2, name: "Carlos", edad: 35, empresa:"BMW"},
    {id: 3, name: "Pedro", edad: 50, empresa:"Bimbo"},
  ];

  seleccionaEmpleado: Empleados = new Empleados();

  ageragarEditar(){
    if(this.seleccionaEmpleado.id === 0){
      this.seleccionaEmpleado.id = this.listaEmpleados.length +1;
      this.listaEmpleados.push(this.seleccionaEmpleado);
    }
  
    this.seleccionaEmpleado = new Empleados();
  }

  editar(empleado: Empleados){
    this.seleccionaEmpleado = empleado;

  }

  eliminar(){
    if(confirm("Estas apunto de eliminar un empleado estas seguro?")){
      this.listaEmpleados = this.listaEmpleados.filter(i => i != this.seleccionaEmpleado);
      this.seleccionaEmpleado = new Empleados();
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
