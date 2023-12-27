import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit{

  public countries : Country[] = [];
  public isLoading: boolean = false;
  public initalValue: string = '';

  constructor(private countriesServices :CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountries.countries;
    this.initalValue = this.countriesServices.cacheStore.byCountries.term;
  }

  searchByCountry(term:string){
    this.isLoading = true;
    this.countriesServices.searchCountry(term).subscribe(
      coutries => {
        this.countries = coutries;
        this.isLoading = false;
      }
    );
  }

}
