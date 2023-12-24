import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string ='https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(code: string):  Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${ code }`)
    .pipe(
      catchError( error =>{
        alert("No se encontraron paises");
        return of([]);
      })
    );
  }

  searchCapital(term:string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(
        catchError( error =>{
          alert("No se encontraron paises");
          return of([]);
        })
      );
  }

  searchCountry(term:string){
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
      .pipe(
        catchError( error =>{
          alert("No se encontraron paises");
          return of([]);
        })
      );
  }

  searchRegion(region:string){
    return this.http.get<Country[]>(`${ this.apiUrl }/region/${ region }`)
      .pipe(
        catchError( error =>{
          alert("No se encontraron paises");
          return of([]);
        })
      );
  }
}
