import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{

  public countries : Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public isLoading: boolean = false;
  public selectedRegion?: Region;

  constructor(private countriesServices :CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesServices.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region):void{
    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesServices.searchRegion(region).subscribe(
      coutries => {
        this.countries = coutries;
        this.isLoading = false;
      }
    );
  }
}
