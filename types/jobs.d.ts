export interface ICompanys {
  id: number;
  slug: string;
  name: string;
  name_internal: string;
  website: string;
  industry: string;
  descr: string;
  logo: string;
  cover: string;
}

export type ICompany = Omit<ICompanys, 'id'>;

export interface IContact {
  name?: string;
  email?: string;
  phone?: string;
  photo?: string;
}

export interface ILocation {
  location: {
    area_2_short?: string;
    city?: string;
    area_1_short?: string;
    area_2?: string;
    area_1?: string;
    place_id?: string;
    url?: string;
    country?: string;
    city_short?: string;
    text?: string;
  };
}

export interface IUrl {
  ad?: string;
  apply?: string;
}

export interface IVideo {
  content?: null;
  url?: string;
}

export interface IOwner {
  id: number;
  name?: string;
  email?: string;
}

type T = /*unresolved*/ any;

export interface IResponse {
  id: number;
  benefits: Array<T>;
  catogories: Array<T>;
  company: ICompany;
  contact: IContact;
  departaments: Array<T>;
  descr: string;
  employment_type: string;
  experience: string;
  from_date: string;
  function: string;
  language: string;
  linkedInCompanyId: number;
  locations: ILocation[];
  slug: string;
  title: string;
  to_date: null;
  urls: IUrl;
  video: IVideo;
  internal_reference: null;
  owner: IOwner;
  skills: string;
  application_date_is_hidden: true;
}

export type IJob = Omit<IResponse, 'id'>;
