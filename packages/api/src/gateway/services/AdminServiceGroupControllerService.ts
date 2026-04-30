/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceGroupResultDto } from '../models/ServiceGroupResultDto';
import type { ServiceGroupResultDtoPaginationResultDto } from '../models/ServiceGroupResultDtoPaginationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminServiceGroupControllerService {
    /**
     * دریافت لیست همه گروه‌های خدماتی
     * @returns ServiceGroupResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminServiceGroup(): CancelablePromise<Array<ServiceGroupResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/ServiceGroup',
        });
    }
    /**
     * ایجاد گروه خدماتی جدید
     * @param formData
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminServiceGroup(
        formData?: {
            Title?: string;
            NumberInfoId?: string;
            PhotoFile?: Blob;
        },
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/ServiceGroup',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش گروه خدماتی
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminServiceGroup(
        formData?: {
            ServiceGroupId?: number;
            Title?: string;
            NumberInfoId?: string;
            PhotoFile?: Blob;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/ServiceGroup',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست گروه‌های خدماتی با صفحه‌بندی
     * @param numberInfoId
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns ServiceGroupResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminServiceGroupPagination(
        numberInfoId?: string,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<ServiceGroupResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/ServiceGroup/Pagination',
            query: {
                'NumberInfoId': numberInfoId,
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
     * دریافت یک گروه خدماتی با شناسه
     * @param id شناسه گروه
     * @returns ServiceGroupResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminServiceGroup1(
        id: number,
    ): CancelablePromise<ServiceGroupResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/ServiceGroup/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف گروه خدماتی
     * @param id شناسه گروه
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminServiceGroup(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/ServiceGroup/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
