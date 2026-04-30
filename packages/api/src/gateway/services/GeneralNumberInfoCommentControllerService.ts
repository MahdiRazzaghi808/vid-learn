/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NumberInfoCommentResultDto } from '../models/NumberInfoCommentResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralNumberInfoCommentControllerService {
    /**
     * نظرات یک خدمت (شناسه NumberInfoService)
     * @param numberInfoServiceId
     * @returns NumberInfoCommentResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoCommentByService(
        numberInfoServiceId: number,
    ): CancelablePromise<Array<NumberInfoCommentResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfoComment/ByService/{numberInfoServiceId}',
            path: {
                'numberInfoServiceId': numberInfoServiceId,
            },
        });
    }
    /**
     * همه نظرات شماره و خدمات شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns NumberInfoCommentResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoCommentByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<Array<NumberInfoCommentResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfoComment/ByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * میانگین امتیاز شماره و خدمات شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns number OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoCommentAverageScore(
        obfuscatedId: string,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfoComment/AverageScore/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
