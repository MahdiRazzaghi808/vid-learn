/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TicketMessageResultDto } from '../models/TicketMessageResultDto';
import type { TicketMessageResultDtoPaginationResultDto } from '../models/TicketMessageResultDtoPaginationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminTicketMessageControllerService {
    /**
     * دریافت لیست همه پیام‌های تیکت
     * @returns TicketMessageResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminTicketMessage(): CancelablePromise<Array<TicketMessageResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/TicketMessage',
        });
    }
    /**
     * ایجاد پیام جدید
     * @param formData
     * @returns string OK
     * @throws ApiError
     */
    public static postApiV1AdminTicketMessage(
        formData?: {
            FileFiles?: Array<Blob>;
            Message?: string;
            TicketId?: string;
            SenderId?: string;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/TicketMessage',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست پیام‌ها با صفحه‌بندی
     * @param ticketId
     * @param senderId
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns TicketMessageResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminTicketMessagePagination(
        ticketId?: string,
        senderId?: string,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<TicketMessageResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/TicketMessage/Pagination',
            query: {
                'TicketId': ticketId,
                'SenderId': senderId,
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
     * دریافت پیام‌های یک تیکت
     * @param ticketId شناسه تیکت
     * @returns TicketMessageResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminTicketMessageByTicket(
        ticketId: string,
    ): CancelablePromise<Array<TicketMessageResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/TicketMessage/ByTicket/{ticketId}',
            path: {
                'ticketId': ticketId,
            },
        });
    }
    /**
     * دریافت یک پیام با شناسه
     * @param id شناسه
     * @returns TicketMessageResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminTicketMessage1(
        id: string,
    ): CancelablePromise<TicketMessageResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/TicketMessage/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف پیام
     * @param id شناسه
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminTicketMessage(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/TicketMessage/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
