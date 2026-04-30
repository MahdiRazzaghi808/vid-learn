/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NumberInfoTagResultDto } from '../models/NumberInfoTagResultDto';
import type { TagResultDto } from '../models/TagResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralNumberInfoTagControllerService {
    /**
     * تگ‌های یک شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns NumberInfoTagResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoTagByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<Array<NumberInfoTagResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfoTag/ByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * لیست تگ‌ها (TagResultDto) برای یک شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns TagResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoTagTagsByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<Array<TagResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfoTag/TagsByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * دریافت لیست شناسه شماره‌ها برای یک تگ
     * @param tagId شناسه تگ
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoTagNumberInfoIdsByTag(
        tagId: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfoTag/NumberInfoIdsByTag/{tagId}',
            path: {
                'tagId': tagId,
            },
        });
    }
}
