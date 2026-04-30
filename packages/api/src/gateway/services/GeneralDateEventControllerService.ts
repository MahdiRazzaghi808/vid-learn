/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateEventResultDto } from '../models/DateEventResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralDateEventControllerService {
    /**
     * رویدادهای روز جاری
     * @returns DateEventResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralDateEventToday(): CancelablePromise<Array<DateEventResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/DateEvent/Today',
        });
    }
    /**
     * رویدادهای یک تاریخ مشخص (تاریخ شمسی، مثال: 1403/01/01)
     * @param solarDate
     * @returns DateEventResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralDateEventByDate(
        solarDate?: string,
    ): CancelablePromise<Array<DateEventResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/DateEvent/ByDate',
            query: {
                'SolarDate': solarDate,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
