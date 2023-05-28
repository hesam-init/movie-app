export interface Search {
  channels?: null[] | null;
  posters?: PostersEntity[];
}
export interface PostersEntity {
  id: number;
  title: string;
  type: string;
  description: string;
  year: number;
  imdb: number;
  rating: number;
  comment: boolean;
  duration?: string | null;
  downloadas?: string | null;
  playas?: string | null;
  classification?: string | null;
  image: string;
  cover: string;
  genres?: GenresEntityOrCountryEntity[] | null;
  sources?: (SourcesEntity | null)[] | null;
  country?: CountryEntity[] | null;
}
export interface GenresEntityOrCountryEntity {
  id: number;
  title: string;
}
export interface SourcesEntity {
  id: number;
  quality: string;
  type: string;
  url: string;
}
export interface CountryEntity {
  id: number;
  title: string;
  image?: string | null;
}
export interface CountryEntityOrCountriesEntity {
  id: number;
  title: string;
  image: string;
}
