/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NumberInfoAddressResultDto } from '../models/NumberInfoAddressResultDto';
import type { UpdateNumberInfoAddressRequestDto } from '../models/UpdateNumberInfoAddressRequestDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PanelNumberInfoAddressControllerService {
    /**
     * اولین آدرس شماره
     * @returns NumberInfoAddressResultDto OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfoAddress(): CancelablePromise<NumberInfoAddressResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfoAddress',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * ویرایش یا ایجاد آدرس شماره
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1PanelNumberInfoAddress(
        requestBody?: UpdateNumberInfoAddressRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Panel/NumberInfoAddress',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
}
