/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceTimeResultDto } from '../models/ServiceTimeResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralServiceTimeControllerService {
    /**
     * لیست ساعات ارائه خدمات شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns ServiceTimeResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceTimeByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<Array<ServiceTimeResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceTime/ByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * وضعیت کاری امروز به صورت متن (تعطیل، ۲۴ ساعته، باز/بسته و زمان)
     * @param obfuscatedId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceTimeTodayWorkingStatus(
        obfuscatedId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceTime/TodayWorkingStatus/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
