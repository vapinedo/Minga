import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Ciudad } from '../../../interfaces/ciudad.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { TipoPersona } from 'src/app/interfaces/tipoPersona.interfase';
import { compileNgModule } from '@angular/compiler';
import { Genero } from 'src/app/interfaces/genero.interfase';
import { TipoDocumento } from 'src/app/interfaces/tipoDocumento.interfase';


@Component({
  selector: 'app-socionatural',
  templateUrl: './socionatural.component.html',
  styleUrls: ['./socionatural.component.css'],
  providers: [ApiService],
  encapsulation: ViewEncapsulation.None
})

export class SocionaturalComponent implements OnInit  {


  usuario: Usuario;
  paises: Pais[] = [];
  ciudades: Ciudad[] = [];
  tipoPersona: TipoPersona[] = [];
  genero: Genero[] = [];
  documento: TipoDocumento[] = [];


  form = this.formBuilder.group({
    paisID: [null, [Validators.required]], //number
    ciudadID: [null, [Validators.required]],
    nombres: ["", [Validators.required]],  //string
    apellidos: ["", [Validators.required]],
    PersonTypeId:  [2],
    tipo_documento: [null, [Validators.required]],
    numero_documento: [null, [Validators.required]],
    fecha_nacimiento: [null, [Validators.required]],
    genero: [null, [Validators.required]],
    celular: [null, [Validators.required]],
    email: [null, [Validators.required]],
    confirmar_email: [null, [Validators.required]],
    usuario_invita: [null],
    usuario: [null],
    password: [null],

  });


  constructor(
    private apiService:ApiService,
    private formBuilder: FormBuilder,

  ){

  }


  ngOnInit(): void {
    this.getDataPaises();
    this.getDataPersona();
    this.getDataGenero();
  }

  onPaisChange(event: any) {
    const ciudadID = event.value;
    this.getDataCiudades(ciudadID);
    const tipo_document = event.value;
    this.getDataDocumento(tipo_document);
  }

  //METODOS APIREST
  //Metodo obtener paises
  getDataPaises(): void{
    this.apiService.getPaises()
    .subscribe(response => this.paises = response);
  }


  //Metodo obtener ciudad
  getDataCiudades(ciudadId: number): void{
    this.apiService.getCiudades(ciudadId)
    .subscribe(response => this.ciudades = response);
  }


  //Metodo obtener tipo persona
  getDataPersona(){
    this.apiService.getPersona().subscribe(response =>
      {
        console.log(response);
        this.tipoPersona = response });
  }


  //Metodo obtener genero
  getDataGenero(){
    this.apiService.getGenero().subscribe(response =>
      {
        console.log(response);
        this.genero = response });
  }


  //Obtener tipo de documento
  getDataDocumento(ciudadId: number): void{
    this.apiService.getDocumento(ciudadId)
    .subscribe(response =>

      this.documento = response);

  }



  //Enviar formulario
  onSubmit() {
    console.log("Formulario", this.form.value);
  }

  }









