/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NumberInfoResultDto } from '../models/NumberInfoResultDto';
import type { NumberInfoResultDtoPaginationResultDto } from '../models/NumberInfoResultDtoPaginationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminNumberInfoControllerService {
    /**
     * دریافت لیست همه اطلاعات شماره
     * @returns NumberInfoResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfo(): CancelablePromise<Array<NumberInfoResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfo',
        });
    }
    /**
     * ایجاد اطلاعات شماره جدید
     * @param formData
     * @returns string OK
     * @throws ApiError
     */
    public static postApiV1AdminNumberInfo(
        formData?: {
            PrefixCodeId?: string;
            NumberBodyId?: string;
            Title?: string;
            Description?: string;
            FullName?: string;
            WebSite?: string;
            HasCompleted?: boolean;
            IsDeleted?: boolean;
            IsOnline?: boolean;
            InPlace?: boolean;
            IsFixedStore?: boolean;
            JobId?: number;
            Confirmed?: boolean;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/NumberInfo',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش اطلاعات شماره
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminNumberInfo(
        formData?: {
            NumberInfoId?: string;
            PrefixCodeId?: string;
            NumberBodyId?: string;
            Title?: string;
            Description?: string;
            FullName?: string;
            WebSite?: string;
            HasCompleted?: boolean;
            IsDeleted?: boolean;
            IsOnline?: boolean;
            InPlace?: boolean;
            IsFixedStore?: boolean;
            JobId?: number;
            Confirmed?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/NumberInfo',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست اطلاعات شماره با صفحه‌بندی
     * @param prefixCodeId
     * @param jobId
     * @param confirmed
     * @param hasCompleted
     * @param isDeleted
     * @param isOnline
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns NumberInfoResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoPagination(
        prefixCodeId?: string,
        jobId?: number,
        confirmed?: boolean,
        hasCompleted?: boolean,
        isDeleted?: boolean,
        isOnline?: boolean,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<NumberInfoResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfo/Pagination',
            query: {
                'PrefixCodeId': prefixCodeId,
                'JobId': jobId,
                'Confirmed': confirmed,
                'HasCompleted': hasCompleted,
                'IsDeleted': isDeleted,
                'IsOnline': isOnline,
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
     * دریافت یک اطلاعات شماره با شناسه
     * @param id شناسه
     * @returns NumberInfoResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfo1(
        id: string,
    ): CancelablePromise<NumberInfoResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfo/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف اطلاعات شماره
     * @param id شناسه
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminNumberInfo(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/NumberInfo/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف اجباری اطلاعات شماره با تمام وابستگی‌ها
     * @param id شناسه
     * @returns boolean OK
     * @throws ApiError
     */
    public static deleteApiV1AdminNumberInfoForce(
        id: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/NumberInfo/{id}/Force',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف تصویر از شماره (بدون بررسی مالکیت)
     * @param id شناسه NumberInfoFileReference
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminNumberInfoRemoveFileReference(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/NumberInfo/RemoveFileReference/{id}',
            path: {
                'id': id,
            },
        });
    }
}
