import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries : Country[] = [];

  constructor(private countriesServices :CountriesService){}

  searchByCapital(term:string){
    this.countriesServices.searchCapital(term).subscribe(
      coutries => {
        this.countries = coutries;
      }
    );
  }

}
