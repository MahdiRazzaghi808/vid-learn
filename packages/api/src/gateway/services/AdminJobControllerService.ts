/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateJobDto } from '../models/CreateJobDto';
import type { UpdateJobDto } from '../models/UpdateJobDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminJobControllerService {
    /**
     * ایجاد شغل جدید
     * @param requestBody ورودی ایجاد
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminJob(
        requestBody?: CreateJobDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/Job',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش شغل
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminJob(
        requestBody?: UpdateJobDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/Job',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * حذف شغل
     * @param id شناسه شغل
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminJob(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/Job/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
