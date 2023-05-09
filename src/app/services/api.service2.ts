import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';
import { Ciudad } from '../interfaces/ciudad.interface';
import { TipoPersona } from '../interfaces/tipoPersona.interfase';
import { Genero } from '../interfaces/genero.interfase';
import { TipoDocumento } from '../interfaces/tipoDocumento.interfase';
import { Usuario } from '../interfaces/usuario.interface';



@Injectable ({
  providedIn: 'root'
})

export class ApiService2 {

  //Variables url get - socio natural
  private urlTipoDocumento: String = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/documentTypes?CountryId=';
  private urlTipoDocumentoParametro: String = '&PersonTypeId=1';


  private urlGenero: string = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/additionalTypes?PersonTypeId=1';



  constructor(private http: HttpClient) {}




  //Obtener tipo de documento natural
  getDocumento(CountryId: number):Observable<TipoDocumento[]>{
    const headers = new HttpHeaders().append("Version" , "0.0.1")
    return this.http.get<TipoDocumento[]>(`${this.urlTipoDocumento}${CountryId}${this.urlTipoDocumentoParametro}`, { headers });
  }


  //Obtener date tipe - genero representacion
  getGenero():Observable<Genero[]>{
    const headers = new HttpHeaders().append("Version" , "0.0.1")
    return this.http.get<Genero[]>(this.urlGenero,{headers});

  }














  }



