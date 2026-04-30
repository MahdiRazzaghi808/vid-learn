/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTicketDto } from '../models/CreateTicketDto';
import type { TicketResultDto } from '../models/TicketResultDto';
import type { TicketResultDtoPaginationResultDto } from '../models/TicketResultDtoPaginationResultDto';
import type { UpdateTicketDto } from '../models/UpdateTicketDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminTicketControllerService {
    /**
     * دریافت لیست همه تیکت‌ها
     * @returns TicketResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminTicket(): CancelablePromise<Array<TicketResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Ticket',
        });
    }
    /**
     * ایجاد تیکت جدید
     * @param requestBody ورودی ایجاد
     * @returns string OK
     * @throws ApiError
     */
    public static postApiV1AdminTicket(
        requestBody?: CreateTicketDto,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/Ticket',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش تیکت
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminTicket(
        requestBody?: UpdateTicketDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/Ticket',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست تیکت‌ها با صفحه‌بندی
     * @param numberInfoId
     * @param supporterId
     * @param status
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns TicketResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminTicketPagination(
        numberInfoId?: string,
        supporterId?: string,
        status?: number,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<TicketResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Ticket/Pagination',
            query: {
                'NumberInfoId': numberInfoId,
                'SupporterId': supporterId,
                'Status': status,
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
     * دریافت یک تیکت با شناسه
     * @param id شناسه
     * @returns TicketResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminTicket1(
        id: string,
    ): CancelablePromise<TicketResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Ticket/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف تیکت
     * @param id شناسه
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminTicket(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/Ticket/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
