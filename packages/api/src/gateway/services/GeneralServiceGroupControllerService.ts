/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceGroupResultDto } from '../models/ServiceGroupResultDto';
import type { ServiceGroupWithServicesResultDto } from '../models/ServiceGroupWithServicesResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralServiceGroupControllerService {
    /**
     * گروه سرویس‌های شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns ServiceGroupResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceGroupByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<Array<ServiceGroupResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceGroup/ByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * گروه سرویس‌های شماره همراه با سرویس‌های زیرمجموعه بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns ServiceGroupWithServicesResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceGroupByNumberInfoWithServices(
        obfuscatedId: string,
    ): CancelablePromise<Array<ServiceGroupWithServicesResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceGroup/ByNumberInfoWithServices/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
