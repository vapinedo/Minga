import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interface';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Ciudad } from '../../../interfaces/ciudad.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { TipoPersona } from 'src/app/interfaces/tipoPersona.interfase';
import { Genero } from 'src/app/interfaces/genero.interfase';
import { TipoDocumento } from 'src/app/interfaces/tipoDocumento.interfase';
import { ApiService2 } from 'src/app/services/api.service2';

@Component({
  selector: 'app-prestadorserv',
  templateUrl: './prestadorserv.component.html',
  styleUrls: ['./prestadorserv.component.css'],
  providers: [ApiService, ApiService2],
  encapsulation: ViewEncapsulation.None
})

export class PrestadorservComponent
implements OnInit  {

  //Validar correo valido o invalido


   //Para arreglar el calendario
   form_date: FormGroup;

   //Variables protocolo http
   usuario: Usuario;
   paises: Pais[] = [];
   ciudades: Ciudad[] = [];
   tipoPersona: TipoPersona[] = [];
   genero: Genero[] = [];
   documento: TipoDocumento[] = [];
   f_nacimiento = "";



   form = this.formBuilder.group({


     nombres: ["", [Validators.required]],
     apellidos: ["", [Validators.required]],
     documentNumber: [null, [Validators.required]],
     email: [null, [Validators.required]],
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

     passwordConf: [null, [Validators.required]],


   });


   constructor(
     private apiService:ApiService,
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
   getDataDocumento(tipo_document: number): void{
     this.apiService.getDocumento(tipo_document)
     .subscribe(response =>

       this.documento = response);

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


