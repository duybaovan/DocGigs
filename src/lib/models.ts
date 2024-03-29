export type Address = {
  country_code: string;
  country_name: string;
  address_purpose: string;
  address_type: string;
  address_1: string;
  city: string;
  state: string;
  postal_code: string;
  telephone_number: string;
};

export type BasicInfo = {
  first_name: string;
  last_name: string;
  credential: string;
  sole_proprietor: string;
  gender: string;
  enumeration_date: string;
  last_updated: string;
  status: string;
  name_prefix?: string;
  name_suffix?: string;
};

export type Taxonomy = {
  code: string;
  taxonomy_group?: string;
  desc: string;
  state?: string;
  license?: string;
  primary: boolean;
};

export type Result = {
  created_epoch: string;
  enumeration_type: string;
  last_updated_epoch: string;
  number: string;
  addresses: Address[];
  practiceLocations: string[];
  basic: BasicInfo;
  taxonomies: Taxonomy[];
  identifiers: string[];
  endpoints: string[];
  other_names: string[];
};

export type NPIDataResponse = {
  result_count: number;
  results: Result[];
};
