import { Component, OnInit } from '@angular/core';
import { ciudadObj } from 'src/app/interfaces/ciudadI';
import { genObj } from 'src/app/interfaces/generosI';
import { PaisObj } from 'src/app/interfaces/paisI';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-socionatural',
  templateUrl: './socionatural.component.html',
  styleUrls: ['./socionatural.component.css'],
  providers: [ApiService]
})

export class SocionaturalComponent implements OnInit  {


  //Variables de pais
  keyword = 'name';
  data: PaisObj[];


  //Variables genero
  genero: genObj[];

  //Variables ciudad
  ciudades: ciudadObj[];



  constructor(private apiService:ApiService){}


  ngOnInit(): void {

    this.getDataPaises();
    this.getDataGenero();
  }



  //METODOS APIREST
  //Metodo obtener paises
  getDataPaises(): void{
    this.apiService.getPaises().subscribe(
      res => this.data = res);
  }

  prueba(){
    console.log("paises ha cambiado");
  }


  //Metodo obtener genero
  getDataGenero(): void{
    this.apiService.getGenero().subscribe(
      res => this.genero = res);
  }



  //Metodo obtener ciudad
  getDataCiudades(): void{
    this.apiService.getCiudades(1).subscribe(
      res => this.ciudades = res);
  }

//tengo q hacer una variable que guarde el id

  }


