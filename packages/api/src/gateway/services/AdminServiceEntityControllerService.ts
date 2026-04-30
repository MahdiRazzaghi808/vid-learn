/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateServiceEntityDto } from '../models/CreateServiceEntityDto';
import type { UpdateServiceEntityDto } from '../models/UpdateServiceEntityDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminServiceEntityControllerService {
    /**
     * ایجاد خدمت جدید
     * @param requestBody ورودی ایجاد
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminServiceEntity(
        requestBody?: CreateServiceEntityDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/ServiceEntity',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش خدمت
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminServiceEntity(
        requestBody?: UpdateServiceEntityDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/ServiceEntity',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * حذف خدمت
     * @param id شناسه خدمت
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminServiceEntity(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/ServiceEntity/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
