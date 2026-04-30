/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CityResultDto } from './CityResultDto';
export type ProvinceWithCitiesResultDto = {
    name?: string | null;
    slug?: string | null;
    latitude?: number;
    longitude?: number;
    provinceId?: number;
    citiesCount?: number;
    cities?: Array<CityResultDto> | null;
};

