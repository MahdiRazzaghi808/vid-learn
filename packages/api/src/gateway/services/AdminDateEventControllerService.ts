/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDateEventDto } from '../models/CreateDateEventDto';
import type { DateEventResultDto } from '../models/DateEventResultDto';
import type { DateEventResultDtoPaginationResultDto } from '../models/DateEventResultDtoPaginationResultDto';
import type { UpdateDateEventDto } from '../models/UpdateDateEventDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminDateEventControllerService {
    /**
     * دریافت لیست همه رویدادهای تقویمی
     * @returns DateEventResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminDateEvent(): CancelablePromise<Array<DateEventResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/DateEvent',
        });
    }
    /**
     * ایجاد رویداد تقویمی جدید
     * @param requestBody ورودی ایجاد
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminDateEvent(
        requestBody?: CreateDateEventDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/DateEvent',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش رویداد تقویمی
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminDateEvent(
        requestBody?: UpdateDateEventDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/DateEvent',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست رویدادهای تقویمی با صفحه‌بندی
     * @param isHoliday
     * @param isReligious
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns DateEventResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminDateEventPagination(
        isHoliday?: boolean,
        isReligious?: boolean,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<DateEventResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/DateEvent/Pagination',
            query: {
                'IsHoliday': isHoliday,
                'IsReligious': isReligious,
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
     * دریافت یک رویداد تقویمی با شناسه
     * @param id شناسه رویداد
     * @returns DateEventResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminDateEvent1(
        id: number,
    ): CancelablePromise<DateEventResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/DateEvent/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف رویداد تقویمی
     * @param id شناسه رویداد
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminDateEvent(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/DateEvent/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
