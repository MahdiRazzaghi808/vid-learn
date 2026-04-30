/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceEntityResultDto } from '../models/ServiceEntityResultDto';
import type { ServiceEntityResultDtoPaginationResultDto } from '../models/ServiceEntityResultDtoPaginationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralServiceEntityControllerService {
    /**
     * دریافت لیست همه خدمات
     * @returns ServiceEntityResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceEntity(): CancelablePromise<Array<ServiceEntityResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceEntity',
        });
    }
    /**
     * دریافت لیست خدمات با صفحه‌بندی
     * @param jobId
     * @param status
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns ServiceEntityResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceEntityPagination(
        jobId?: number,
        status?: boolean,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<ServiceEntityResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceEntity/Pagination',
            query: {
                'JobId': jobId,
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
     * دریافت یک خدمت با شناسه
     * @param id شناسه خدمت
     * @returns ServiceEntityResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceEntity1(
        id: number,
    ): CancelablePromise<ServiceEntityResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceEntity/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * لیست خدمات شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns ServiceEntityResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceEntityByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<Array<ServiceEntityResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceEntity/ByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * سه خدمت پرکاربرد یک شغل بر اساس تعداد شماره‌هایی که آن خدمت را دارند
     * @param jobId شناسه شغل
     * @returns ServiceEntityResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralServiceEntityTopUsedByJob(
        jobId: number,
    ): CancelablePromise<Array<ServiceEntityResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/ServiceEntity/TopUsedByJob/{jobId}',
            path: {
                'jobId': jobId,
            },
        });
    }
}
