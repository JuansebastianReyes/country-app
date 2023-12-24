
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesServices :CountriesService
  ){}

  ngOnInit(): void {
      this.activatedRoute.params
        .subscribe(
          ({ id }) => {
            this.searchCountry(id);
          }
        );
  }

  searchCountry(code:string){
    this.countriesServices.searchCountryByAlphaCode(code).subscribe(
      country => {
        console.log({country});
      }
    )
  }

}