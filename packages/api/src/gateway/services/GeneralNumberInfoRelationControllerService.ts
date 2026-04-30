/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NumberInfoRelationResultDto } from '../models/NumberInfoRelationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralNumberInfoRelationControllerService {
    /**
     * وابستگی‌های شماره (این به آن‌ها اساین شده و آن‌ها به این اساین شده‌اند) بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns NumberInfoRelationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoRelationByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<Array<NumberInfoRelationResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfoRelation/ByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
