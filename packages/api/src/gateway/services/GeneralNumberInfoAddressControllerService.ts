/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NumberInfoAddressResultDto } from '../models/NumberInfoAddressResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralNumberInfoAddressControllerService {
    /**
     * آدرس‌های شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns NumberInfoAddressResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoAddressByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<Array<NumberInfoAddressResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfoAddress/ByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
