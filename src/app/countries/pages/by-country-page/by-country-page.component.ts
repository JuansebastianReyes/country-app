import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor(private countriesServices :CountriesService){}

  searchByCountry(term:string){
    this.countriesServices.searchCountry(term).subscribe(
      coutries => {
        this.countries = coutries;
      }
    );
  }

}
