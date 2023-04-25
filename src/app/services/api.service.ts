import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';
import { genObj } from '../interfaces/generosI';
import { Ciudad } from '../interfaces/ciudad.interface';
import { Usuario } from '../interfaces/usuario.interface';


@Injectable ({
  providedIn: 'root'
})

export class ApiService {

  //Variables url
  private urlPaises: string = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/countries';
  private urlGenero: string =  'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/genders';
  private urlCiudades: string = 'https://pelagic-cocoa-382420.rj.r.appspot.com/resources/cities?CountryId=';
  private usuario: string = 'https://pelagic-cocoa-382420.rj.r.appspot.com/auth/users';

  constructor(private http: HttpClient) {}

  //Obtener paises
  getPaises():Observable<Pais[]>{
    const headers = new HttpHeaders().append("Version" , "0.0.1")
    return this.http.get<Pais[]>(this.urlPaises,{headers});

  }

  //Obtner genero
  getGenero():Observable<genObj[]>{
    const headers = new HttpHeaders().append("Version" , "0.0.1")
    return this.http.get<genObj[]>(this.urlGenero,{headers});

  }

  getCiudades(CountryId: number):Observable<Ciudad[]>{
    const headers = new HttpHeaders().append("Version" , "0.0.1")
    return this.http.get<Ciudad[]>(`${this.urlCiudades}${CountryId}`, { headers });
  }

    // crearUsuario(usuario: Usuario) {
    //   const headers = new HttpHeaders().append("Version" , "0.0.1")
    //   return this.http.get<Ciudad[]>(`${this.usuario}$`, { usuario: usuario}, { headers });        
    // }



  }

