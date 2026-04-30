/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagResultDto } from '../models/TagResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralTagControllerService {
    /**
     * تگ‌های یک شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns TagResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralTagByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<Array<TagResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Tag/ByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
