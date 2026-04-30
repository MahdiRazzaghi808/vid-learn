/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceGroupServiceResultDto } from '../models/ServiceGroupServiceResultDto';
import type { ServiceGroupServiceResultDtoPaginationResultDto } from '../models/ServiceGroupServiceResultDtoPaginationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminServiceGroupServiceEntityControllerService {
    /**
     * دریافت لیست همه خدمات گروه
     * @returns ServiceGroupServiceResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminServiceGroupServiceEntity(): CancelablePromise<Array<ServiceGroupServiceResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/ServiceGroupServiceEntity',
        });
    }
    /**
     * ایجاد خدمت گروه جدید
     * @param formData
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminServiceGroupServiceEntity(
        formData?: {
            PhotoFiles?: Array<Blob>;
            Description?: string;
            ServiceGroupId?: number;
            ServiceId?: number;
        },
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/ServiceGroupServiceEntity',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش خدمت گروه
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminServiceGroupServiceEntity(
        formData?: {
            Id?: number;
            PhotoFiles?: Array<Blob>;
            Description?: string;
            ServiceGroupId?: number;
            ServiceId?: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/ServiceGroupServiceEntity',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست خدمات گروه با صفحه‌بندی
     * @param serviceGroupId
     * @param serviceId
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns ServiceGroupServiceResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminServiceGroupServiceEntityPagination(
        serviceGroupId?: number,
        serviceId?: number,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<ServiceGroupServiceResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/ServiceGroupServiceEntity/Pagination',
            query: {
                'ServiceGroupId': serviceGroupId,
                'ServiceId': serviceId,
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
     * دریافت یک خدمت گروه با شناسه
     * @param id
     * @returns ServiceGroupServiceResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminServiceGroupServiceEntity1(
        id: number,
    ): CancelablePromise<ServiceGroupServiceResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/ServiceGroupServiceEntity/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف خدمت گروه
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminServiceGroupServiceEntity(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/ServiceGroupServiceEntity/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
