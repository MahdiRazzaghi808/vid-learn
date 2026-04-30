/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateServiceTimeDto } from '../models/CreateServiceTimeDto';
import type { ServiceTimeResultDto } from '../models/ServiceTimeResultDto';
import type { ServiceTimeResultDtoPaginationResultDto } from '../models/ServiceTimeResultDtoPaginationResultDto';
import type { UpdateServiceTimeDto } from '../models/UpdateServiceTimeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminServiceTimeControllerService {
    /**
     * دریافت لیست همه زمان‌های خدمت‌رسانی
     * @returns ServiceTimeResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminServiceTime(): CancelablePromise<Array<ServiceTimeResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/ServiceTime',
        });
    }
    /**
     * ایجاد زمان خدمت‌رسانی جدید
     * @param requestBody
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminServiceTime(
        requestBody?: CreateServiceTimeDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/ServiceTime',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش زمان خدمت‌رسانی
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminServiceTime(
        requestBody?: UpdateServiceTimeDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/ServiceTime',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست زمان‌های خدمت‌رسانی با صفحه‌بندی
     * @param numberInfoId
     * @param dayTypeId
     * @param isAroundClock
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns ServiceTimeResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminServiceTimePagination(
        numberInfoId?: string,
        dayTypeId?: number,
        isAroundClock?: boolean,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<ServiceTimeResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/ServiceTime/Pagination',
            query: {
                'NumberInfoId': numberInfoId,
                'DayTypeId': dayTypeId,
                'IsAroundClock': isAroundClock,
                'Q': q,
                'CurrentPage': currentPage,
                'PageSize': pageSize,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت یک زمان خدمت‌رسانی با شناسه
     * @param id
     * @returns ServiceTimeResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminServiceTime1(
        id: number,
    ): CancelablePromise<ServiceTimeResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/ServiceTime/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف زمان خدمت‌رسانی
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminServiceTime(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/ServiceTime/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
