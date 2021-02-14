export interface GeocodeResponse {
  plus_code: Pluscode;
  results: Ubigeo[];
  status: string;
}

export interface Ubigeo {
  address_components: Addresscomponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: string[];
  plus_code?: Pluscode;
}

export interface Geometry {
  bounds?: Bounds;
  location: Northeast;
  location_type: string;
  viewport: Bounds;
}

export interface Bounds {
  northeast: Northeast;
  southwest: Northeast;
}

export interface Northeast {
  lat: number;
  lng: number;
}

export interface Addresscomponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface Pluscode {
  compound_code: string;
  global_code: string;
}