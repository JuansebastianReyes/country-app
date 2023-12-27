import { Country } from "./country"
import { Region } from "./region.type";

export interface CacheStore {
  byCapital: TermContries;
  byCountries : TermContries;
  byRegion: RegionCountries
}

export interface TermContries{
  term: string;
  countries: Country[];
}

export interface RegionCountries{
  region: Region;
  countries: Country[];
}
