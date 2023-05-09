import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interface';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ApiService2 } from 'src/app/services/api.service2';
import { Ciudad } from '../../../interfaces/ciudad.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { TipoPersona } from 'src/app/interfaces/tipoPersona.interfase';
import { Genero } from 'src/app/interfaces/genero.interfase';
import { TipoDocumento } from 'src/app/interfaces/tipoDocumento.interfase';


@Component({
  selector: 'app-vendedorbys',
  templateUrl: './vendedorbys.component.html',
  styleUrls: ['./vendedorbys.component.css'],
  providers: [ApiService, ApiService2],
  encapsulation: ViewEncapsulation.None
})


export class VendedorbysComponent implements OnInit  {



  //Para arreglar el calendario
  form_date: FormGroup;

  //Variables protocolo http
  usuario: Usuario;
  paises: Pais[] = [];
  ciudades: Ciudad[] = [];
  tipoPersona: TipoPersona[] = [];
  genero: Genero[] = [];
  documento: TipoDocumento[] = [];
  documentoJ: TipoDocumento[] = [];
  f_nacimiento = "";




  form = this.formBuilder.group({


    nombres: ["", [Validators.required]],
    documentNumber: [null, [Validators.required]],
    email: ["", [Validators.required]],
    phone: [null, [Validators.required]],
    password: [null, [Validators.required]],
    birthDate : ["", [Validators.required]],
    DocumentTypeId: [null, [Validators.required]],
    RoleId: [3],
    PersonTypeId: [2],
    CityId: [null, [Validators.required]],//
    CountryId: [null, [Validators.required]], //number
    AdditionalTypeId: [null, [Validators.required]],
    username:  [null, [Validators.required]],
    discount: [0],
    Partner: [null],



    sActividad: [null],
    DocumentTypeIEmp: [null, [Validators.required]],
    documentNumberEmp: [null, [Validators.required]],
    emailEmp: ["", [Validators.required]],



  });


  constructor(
    private apiService: ApiService,
    private apiService2: ApiService2,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,

  ){
    this.form_date = this.fb.group({
      format1: new FormControl(new Date()),
      format2: new FormControl(new Date())
    });

  }


  ngOnInit(): void {
    this.getDataPaises();
    this.getDataPersona();
    this.getDataGenero();
    console.log(this.form_date.value);
  }

  onPaisChange(event: any) {
    const ciudadID = event.value;
    this.getDataCiudades(ciudadID);
    const documentoID = event.value;
    this.getDataDocumento(documentoID);
    const documentoJurID = event.value;
    this.getDataDocumentoJ(documentoJurID);

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


  //Metodo obtener genero tipo de organizacion
  getDataGenero(){
    this.apiService2.getGenero().subscribe(response =>
      {
        console.log(response);
        this.genero = response });
  }


  //Obtener tipo de documento
  getDataDocumento(documentoID: number): void{
    this.apiService.getDocumento(documentoID)
    .subscribe(response =>

      this.documento = response);

  }


  //Obtener documento juridica
  getDataDocumentoJ(documentoJurID: number): void{
   this.apiService2.getDocumento(documentoJurID)
   .subscribe(response =>

     this.documentoJ = response);

 }




  //Enviar formulario
  onSubmit() {
    if( this.form.value.birthDate ){
      const date = this.form.value.birthDate;
    this.f_nacimiento = new Date (date).toISOString().replace('-', '/').split('T')[0].replace('-', '/');
    }
    this.form.value.birthDate = this.f_nacimiento;
    //llamar enpoint post crear usuario


    console.log("Formulario", this.form.value); //value que
    console.log(this.f_nacimiento);
  }

  }











