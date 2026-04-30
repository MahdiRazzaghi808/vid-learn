/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceTimeResultDto } from '../models/ServiceTimeResultDto';
import type { UpdateServiceTimesRequestDto } from '../models/UpdateServiceTimesRequestDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PanelServiceTimeControllerService {
    /**
     * لیست ساعات کاری شماره
     * @returns ServiceTimeResultDto OK
     * @throws ApiError
     */
    public static getApiV1PanelServiceTime(): CancelablePromise<Array<ServiceTimeResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/ServiceTime',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * ویرایش ساعات کاری شماره
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1PanelServiceTime(
        requestBody?: UpdateServiceTimesRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Panel/ServiceTime',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
}
