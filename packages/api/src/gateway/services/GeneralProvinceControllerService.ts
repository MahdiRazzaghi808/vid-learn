/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProvinceResultDto } from '../models/ProvinceResultDto';
import type { ProvinceWithCitiesResultDto } from '../models/ProvinceWithCitiesResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralProvinceControllerService {
    /**
     * دریافت لیست همه استان‌ها
     * @returns ProvinceResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralProvince(): CancelablePromise<Array<ProvinceResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Province',
        });
    }
    /**
     * دریافت لیست استان‌ها همراه با شهرها
     * @returns ProvinceWithCitiesResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralProvinceWithCities(): CancelablePromise<Array<ProvinceWithCitiesResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Province/WithCities',
        });
    }
}
