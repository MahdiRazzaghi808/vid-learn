/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProvinceDto } from '../models/CreateProvinceDto';
import type { ProvinceResultDto } from '../models/ProvinceResultDto';
import type { ProvinceResultDtoPaginationResultDto } from '../models/ProvinceResultDtoPaginationResultDto';
import type { UpdateProvinceDto } from '../models/UpdateProvinceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminProvinceControllerService {
    /**
     * دریافت لیست استان‌ها با صفحه‌بندی
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns ProvinceResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminProvincePagination(
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<ProvinceResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Province/Pagination',
            query: {
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
     * دریافت یک استان با شناسه
     * @param id شناسه استان
     * @returns ProvinceResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminProvince(
        id: number,
    ): CancelablePromise<ProvinceResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Province/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف استان
     * @param id شناسه استان
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminProvince(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/Province/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * ایجاد استان جدید
     * @param requestBody ورودی ایجاد
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminProvince(
        requestBody?: CreateProvinceDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/Province',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش استان
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminProvince(
        requestBody?: UpdateProvinceDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/Province',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * حذف اجباری استان با تمام وابستگی‌ها (شهرها و آدرس‌ها)
     * @param id شناسه استان
     * @returns boolean OK
     * @throws ApiError
     */
    public static deleteApiV1AdminProvinceForce(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/Province/{id}/Force',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
