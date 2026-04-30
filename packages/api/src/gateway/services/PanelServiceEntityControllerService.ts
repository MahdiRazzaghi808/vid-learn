/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceEntityResultDto } from '../models/ServiceEntityResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PanelServiceEntityControllerService {
    /**
     * سه خدمت پرکاربرد برای شغل شماره جاری
     * @returns ServiceEntityResultDto OK
     * @throws ApiError
     */
    public static getApiV1PanelServiceEntityTopUsedByCurrentJob(): CancelablePromise<Array<ServiceEntityResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/ServiceEntity/TopUsedByCurrentJob',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
