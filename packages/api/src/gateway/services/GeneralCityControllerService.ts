/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CityResultDto } from '../models/CityResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralCityControllerService {
    /**
     * لیست شهرهای یک استان
     * @param provinceId
     * @returns CityResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralCityByProvince(
        provinceId: number,
    ): CancelablePromise<Array<CityResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/City/ByProvince/{provinceId}',
            path: {
                'provinceId': provinceId,
            },
        });
    }
}
