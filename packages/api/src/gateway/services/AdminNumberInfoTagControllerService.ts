/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNumberInfoTagDto } from '../models/CreateNumberInfoTagDto';
import type { NumberInfoTagResultDto } from '../models/NumberInfoTagResultDto';
import type { NumberInfoTagResultDtoPaginationResultDto } from '../models/NumberInfoTagResultDtoPaginationResultDto';
import type { UpdateNumberInfoTagDto } from '../models/UpdateNumberInfoTagDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminNumberInfoTagControllerService {
    /**
     * دریافت لیست همه تگ‌های اطلاعات شماره
     * @returns NumberInfoTagResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoTag(): CancelablePromise<Array<NumberInfoTagResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoTag',
        });
    }
    /**
     * تنظیم تگ‌های شماره (جایگزینی تگ‌های قبلی با لیست جدید)
     * @param requestBody ورودی شامل شناسه شماره و لیست عنوان تگ‌ها
     * @returns any OK
     * @throws ApiError
     */
    public static postApiV1AdminNumberInfoTag(
        requestBody?: CreateNumberInfoTagDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/NumberInfoTag',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * به‌روزرسانی تگ‌های شماره (جایگزینی تگ‌های قبلی با لیست جدید)
     * @param requestBody ورودی شامل شناسه شماره و لیست عنوان تگ‌ها
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminNumberInfoTag(
        requestBody?: UpdateNumberInfoTagDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/NumberInfoTag',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست تگ‌ها با صفحه‌بندی
     * @param numberInfoId
     * @param tagId
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns NumberInfoTagResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoTagPagination(
        numberInfoId?: string,
        tagId?: number,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<NumberInfoTagResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoTag/Pagination',
            query: {
                'NumberInfoId': numberInfoId,
                'TagId': tagId,
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
     * دریافت یک تگ با شناسه
     * @param id شناسه رکورد NumberInfoTag
     * @returns NumberInfoTagResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoTag1(
        id: number,
    ): CancelablePromise<NumberInfoTagResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoTag/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف یک تگ از شماره
     * @param id شناسه رکورد NumberInfoTag
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminNumberInfoTag(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/NumberInfoTag/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
