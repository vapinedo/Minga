import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interface';
import { genObj } from 'src/app/interfaces/generosI';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Ciudad } from '../../../interfaces/ciudad.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';


@Component({
  selector: 'app-socionatural',
  templateUrl: './socionatural.component.html',
  styleUrls: ['./socionatural.component.css'],
  providers: [ApiService]
})

export class SocionaturalComponent implements OnInit  {

  usuario: Usuario;
  paises: Pais[] = []; 
  ciudades: Ciudad[] = []; 
  tipos_documento = ["Cedula Ciudadanía", "Tarjeta de Identidad"];

  form = this.formBuilder.group({
    paisID: [null, [Validators.required]],
    ciudadID: [null, [Validators.required]],
    nombres: ["", [Validators.required]],
    apellidos: ["", [Validators.required]],
    tipo_documento: [null, [Validators.required]],
    numero_documento: [1, [Validators.required]],
    fecha_nacimiento: [null, [Validators.required]],
    genero: [null, [Validators.required]],
    celular: [null, [Validators.required]],
    email: [null, [Validators.required]],
    confirmar_email: [null, [Validators.required]],
    usuario_invita: [null],
    usuario: [null],
    password: [null],
  });   


  //Variables de pais
  keyword = 'name';

  //Variables genero
  genero: genObj[];

  constructor(
    private apiService:ApiService,
    private formBuilder: FormBuilder,
  ){}


  ngOnInit(): void {
    this.getDataPaises();
    this.getDataGenero();
  }

  onPaisChange(event: any) {
    const ciudadID = event.value;
    this.getDataCiudades(ciudadID);
  }

  //METODOS APIREST
  //Metodo obtener paises
  getDataPaises(): void{
    this.apiService.getPaises()
    .subscribe(response => this.paises = response);
  }

  //Metodo obtener genero
  getDataGenero(): void{
    this.apiService.getGenero().subscribe(
      res => this.genero = res);
  }

  //Metodo obtener ciudad
  getDataCiudades(ciudadId: number): void{
    this.apiService.getCiudades(ciudadId)
    .subscribe(response => this.ciudades = response);
  }

  onSubmit() {
    console.log("Formulario", this.form.value);
  }

}


