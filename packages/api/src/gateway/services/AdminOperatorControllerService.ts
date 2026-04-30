/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOperatorDto } from '../models/CreateOperatorDto';
import type { OperatorResultDto } from '../models/OperatorResultDto';
import type { OperatorResultDtoPaginationResultDto } from '../models/OperatorResultDtoPaginationResultDto';
import type { UpdateOperatorDto } from '../models/UpdateOperatorDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminOperatorControllerService {
    /**
     * دریافت لیست همه اپراتورها
     * @returns OperatorResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminOperator(): CancelablePromise<Array<OperatorResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Operator',
        });
    }
    /**
     * ایجاد اپراتور جدید
     * @param requestBody ورودی ایجاد
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminOperator(
        requestBody?: CreateOperatorDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/Operator',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش اپراتور
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminOperator(
        requestBody?: UpdateOperatorDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/Operator',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست اپراتورها با صفحه‌بندی
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns OperatorResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminOperatorPagination(
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<OperatorResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Operator/Pagination',
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
     * دریافت یک اپراتور با شناسه
     * @param id شناسه اپراتور
     * @returns OperatorResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminOperator1(
        id: number,
    ): CancelablePromise<OperatorResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Operator/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف اپراتور
     * @param id شناسه اپراتور
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminOperator(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/Operator/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
