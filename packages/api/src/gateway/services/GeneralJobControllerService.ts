/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobResultDto } from '../models/JobResultDto';
import type { JobResultDtoPaginationResultDto } from '../models/JobResultDtoPaginationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralJobControllerService {
    /**
     * دریافت لیست همه شغل‌ها
     * @returns JobResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralJob(): CancelablePromise<Array<JobResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Job',
        });
    }
    /**
     * دریافت لیست شغل‌ها با صفحه‌بندی
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns JobResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralJobPagination(
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<JobResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Job/Pagination',
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
     * دریافت یک شغل با شناسه
     * @param id شناسه شغل
     * @returns JobResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralJob1(
        id: number,
    ): CancelablePromise<JobResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Job/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * شغل شماره بر اساس obfuscatedId
     * @param obfuscatedId
     * @returns JobResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralJobByNumberInfo(
        obfuscatedId: string,
    ): CancelablePromise<JobResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Job/ByNumberInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
