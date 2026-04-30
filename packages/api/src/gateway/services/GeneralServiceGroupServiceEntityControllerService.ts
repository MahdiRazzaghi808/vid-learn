/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceGroupServiceResultDto } from '../models/ServiceGroupServiceResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralServiceGroupServiceEntityControllerService {
    /**
     * لیست سرویس‌های یک گروه خدماتی
     * @param serviceGroupId
     * @returns ServiceGroupServiceResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceGroupServiceEntityByServiceGroup(
        serviceGroupId: number,
    ): CancelablePromise<Array<ServiceGroupServiceResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceGroupServiceEntity/ByServiceGroup/{serviceGroupId}',
            path: {
                'serviceGroupId': serviceGroupId,
            },
        });
    }
    /**
     * لیست سرویس‌های گروه‌های خدماتی شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns ServiceGroupServiceResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceGroupServiceEntityByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<Array<ServiceGroupServiceResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceGroupServiceEntity/ByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
