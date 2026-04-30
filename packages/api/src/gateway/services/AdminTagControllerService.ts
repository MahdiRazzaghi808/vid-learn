/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTagDto } from '../models/CreateTagDto';
import type { TagResultDto } from '../models/TagResultDto';
import type { TagResultDtoPaginationResultDto } from '../models/TagResultDtoPaginationResultDto';
import type { UpdateTagDto } from '../models/UpdateTagDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminTagControllerService {
    /**
     * دریافت لیست همه برچسب‌ها
     * @returns TagResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminTag(): CancelablePromise<Array<TagResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Tag',
        });
    }
    /**
     * ایجاد برچسب جدید
     * @param requestBody
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminTag(
        requestBody?: CreateTagDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/Tag',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش برچسب
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminTag(
        requestBody?: UpdateTagDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/Tag',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست برچسب‌ها با صفحه‌بندی
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns TagResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminTagPagination(
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<TagResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Tag/Pagination',
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
     * دریافت یک برچسب با شناسه
     * @param id
     * @returns TagResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminTag1(
        id: number,
    ): CancelablePromise<TagResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Tag/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف برچسب
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminTag(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/Tag/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
