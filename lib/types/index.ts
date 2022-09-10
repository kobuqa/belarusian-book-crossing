export type Book = {
  additional: string;
  author: string;
  city: string;
  contacts: string;
  country: string;
  id: number;
  isbn: string;
  latitude: number;
  longitude: number;
  title: string;
  year: number;
};


export type BookDto =  {
  additional?: string;
  author: string;
  city?: string;
  contacts?: string;
  country?: string;
  isbn?: string;
  latitude: number;
  longitude: number;
  title: string;
  year?: number;
}