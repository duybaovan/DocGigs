import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

interface Address {
  country_code: string;
  country_name: string;
  address_purpose: string;
  address_type: string;
  address_1: string;
  city: string;
  state: string;
  postal_code: string;
  telephone_number: string;
}

interface BasicInformation {
  first_name: string;
  middle_name: string;
  last_name: string;
  credential?: string;
  sole_proprietor: string;
  gender: string;
  enumeration_date: string;
  last_updated: string;
  status: string;
  name_prefix?: string;
  name_suffix?: string;
}

interface Taxonomy {
  code: string;
  desc: string;
  primary: boolean;
  state?: string;
  license?: string;
}

export interface NPIInformation {
  created_epoch: string;
  enumeration_type: string;
  last_updated_epoch: string;
  number: string;
  addresses: Address[];
  practiceLocations: string[];
  basic: BasicInformation;
  taxonomies: Taxonomy[];
  identifiers: string[];
  endpoints: string[];
  other_names: string[];
}

export interface NPIResponse {
  result_count: number;
  results: NPIInformation[];
}

export const publicApiRouter = createTRPCRouter({
  getNPIInformation: publicProcedure
    .input(z.object({ npiNumber: z.number() }))
    .query(async ({ input }) => {
      const { npiNumber } = input;
      const url = `https://npiregistry.cms.hhs.gov/api/?number=${npiNumber}&version=2.1`;

      try {
        const response = await fetch(url);
        const data = (await response.json()) as NPIResponse;
        return data;
      } catch (error) {
        throw new Error("Failed to fetch NPI information");
      }
    }),
});
