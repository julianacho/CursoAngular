import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  nombre:String='Logan';
  nota:number=10;

  constructor() { }

  ngOnInit() {
  }

  cambiarNombre(){
    this.nombre='Wolwerine';
  }

}
