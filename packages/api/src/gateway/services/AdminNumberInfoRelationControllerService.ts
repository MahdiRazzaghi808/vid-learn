/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNumberInfoRelationDto } from '../models/CreateNumberInfoRelationDto';
import type { NumberInfoRelationResultDto } from '../models/NumberInfoRelationResultDto';
import type { NumberInfoRelationResultDtoPaginationResultDto } from '../models/NumberInfoRelationResultDtoPaginationResultDto';
import type { UpdateNumberInfoRelationDto } from '../models/UpdateNumberInfoRelationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminNumberInfoRelationControllerService {
    /**
     * دریافت لیست همه ارتباط‌ها
     * @returns NumberInfoRelationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoRelation(): CancelablePromise<Array<NumberInfoRelationResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoRelation',
        });
    }
    /**
     * ایجاد ارتباط جدید
     * @param requestBody ورودی ایجاد
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminNumberInfoRelation(
        requestBody?: CreateNumberInfoRelationDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/NumberInfoRelation',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش ارتباط
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminNumberInfoRelation(
        requestBody?: UpdateNumberInfoRelationDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/NumberInfoRelation',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست ارتباط‌ها با صفحه‌بندی
     * @param numberInfoId
     * @param relationNumberInfoId
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns NumberInfoRelationResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoRelationPagination(
        numberInfoId?: string,
        relationNumberInfoId?: string,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<NumberInfoRelationResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoRelation/Pagination',
            query: {
                'NumberInfoId': numberInfoId,
                'RelationNumberInfoId': relationNumberInfoId,
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
     * دریافت یک ارتباط با شناسه
     * @param id شناسه
     * @returns NumberInfoRelationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoRelation1(
        id: number,
    ): CancelablePromise<NumberInfoRelationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoRelation/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف ارتباط
     * @param id شناسه
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminNumberInfoRelation(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/NumberInfoRelation/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
