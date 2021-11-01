export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Self {
  href: string;
}

export interface Links {
  self: Self;
}

export interface IPerson {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday?: any;
  deathday?: any;
  gender: string;
  image: Image;
  updated: number;
  _links: Links;
}

export interface RootObject {
  score: number;
  person: IPerson;
}


