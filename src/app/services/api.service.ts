import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { PaisObj } from '../interfaces/paisI';
import { genObj } from '../interfaces/generosI';
import { ciudadObj } from '../interfaces/ciudadI';


@Injectable ({
  providedIn: 'root'
})

export class ApiService {

//Variables url
private urlPaises: string = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/countries';
private urlGenero: string =  'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/genders';
private urlCiudades: string = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/cities?Country'



constructor(private http: HttpClient) {}


//Obtener paises
getPaises():Observable<PaisObj[]>{
  const headers = new HttpHeaders().append("Version" , "0.0.1")
  return this.http.get<PaisObj[]>(this.urlPaises,{headers});

}

//Obtner genero
getGenero():Observable<genObj[]>{
  const headers = new HttpHeaders().append("Version" , "0.0.1")
  return this.http.get<genObj[]>(this.urlGenero,{headers});

}

getCiudades(CountryId: number):Observable<ciudadObj[]>{
  const headers = new HttpHeaders().append("Version" , "0.0.1")
  return this.http.get<ciudadObj[]>(this.urlCiudades + CountryId ,{headers});

}



  }

