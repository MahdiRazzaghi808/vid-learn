/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNumberInfoServiceLinkDto } from '../models/CreateNumberInfoServiceLinkDto';
import type { NumberInfoServiceLinkResultDto } from '../models/NumberInfoServiceLinkResultDto';
import type { NumberInfoServiceLinkResultDtoPaginationResultDto } from '../models/NumberInfoServiceLinkResultDtoPaginationResultDto';
import type { UpdateNumberInfoServiceLinkDto } from '../models/UpdateNumberInfoServiceLinkDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminNumberInfoServiceLinkControllerService {
    /**
     * دریافت لیست همه ارتباط‌ها
     * @returns NumberInfoServiceLinkResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoServiceLink(): CancelablePromise<Array<NumberInfoServiceLinkResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoServiceLink',
        });
    }
    /**
     * ایجاد ارتباط جدید
     * @param requestBody ورودی ایجاد
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminNumberInfoServiceLink(
        requestBody?: CreateNumberInfoServiceLinkDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/NumberInfoServiceLink',
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
    public static putApiV1AdminNumberInfoServiceLink(
        requestBody?: UpdateNumberInfoServiceLinkDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/NumberInfoServiceLink',
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
     * @param serviceId
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns NumberInfoServiceLinkResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoServiceLinkPagination(
        numberInfoId?: string,
        serviceId?: number,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<NumberInfoServiceLinkResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoServiceLink/Pagination',
            query: {
                'NumberInfoId': numberInfoId,
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
     * دریافت یک ارتباط با شناسه
     * @param id شناسه
     * @returns NumberInfoServiceLinkResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoServiceLink1(
        id: number,
    ): CancelablePromise<NumberInfoServiceLinkResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoServiceLink/{id}',
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
    public static deleteApiV1AdminNumberInfoServiceLink(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/NumberInfoServiceLink/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
