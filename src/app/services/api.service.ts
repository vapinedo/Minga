import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';
import { Ciudad } from '../interfaces/ciudad.interface';
import { TipoPersona } from '../interfaces/tipoPersona.interfase';
import { Genero } from '../interfaces/genero.interfase';
import { TipoDocumento } from '../interfaces/tipoDocumento.interfase';


@Injectable ({
  providedIn: 'root'
})

export class ApiService {

  //Variables url
  private urlPaises: string = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/countries';
  private urlCiudades: string = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/cities?CountryId=';
  private urlPersona:  string = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/personTypes';
  private urlGenero: string = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/additionalTypes?PersonTypeId=2';
  private urlTipoDocumento: String = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/documentTypes?CountryId=';
  private urlTipoDocumentoParametro: String = '&PersonTypeId=2';

  constructor(private http: HttpClient) {}

  //Obtener paises
  getPaises():Observable<Pais[]>{
    const headers = new HttpHeaders().append("Version" , "0.0.1")
    return this.http.get<Pais[]>(this.urlPaises,{headers});

  }

  //Obtener ciudades
  getCiudades(CountryId: number):Observable<Ciudad[]>{
    const headers = new HttpHeaders().append("Version" , "0.0.1")
    return this.http.get<Ciudad[]>(`${this.urlCiudades}${CountryId}`, { headers });
  }


  //Obtener tipo de persona
  getPersona():Observable<TipoPersona[]>{
    const headers = new HttpHeaders().append("Version" , "0.0.1")
    return this.http.get<TipoPersona[]>(this.urlPersona,{headers});

  }

  //Obtener date tipe - genero
  getGenero():Observable<Genero[]>{
    const headers = new HttpHeaders().append("Version" , "0.0.1")
    return this.http.get<Genero[]>(this.urlGenero,{headers});

  }

  //Obtener tipo de documento
  getDocumento(CountryId: number):Observable<TipoDocumento[]>{
    const headers = new HttpHeaders().append("Version" , "0.0.1")
    return this.http.get<TipoDocumento[]>(`${this.urlTipoDocumento}${CountryId}${this.urlTipoDocumentoParametro}`, { headers });
  }


  }

