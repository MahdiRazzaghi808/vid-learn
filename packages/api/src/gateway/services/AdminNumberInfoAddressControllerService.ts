/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNumberInfoAddressDto } from '../models/CreateNumberInfoAddressDto';
import type { NumberInfoAddressResultDto } from '../models/NumberInfoAddressResultDto';
import type { NumberInfoAddressResultDtoPaginationResultDto } from '../models/NumberInfoAddressResultDtoPaginationResultDto';
import type { UpdateNumberInfoAddressDto } from '../models/UpdateNumberInfoAddressDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminNumberInfoAddressControllerService {
    /**
     * دریافت لیست همه آدرس‌های اطلاعات شماره
     * @returns NumberInfoAddressResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoAddress(): CancelablePromise<Array<NumberInfoAddressResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoAddress',
        });
    }
    /**
     * ایجاد آدرس جدید
     * @param requestBody ورودی ایجاد
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminNumberInfoAddress(
        requestBody?: CreateNumberInfoAddressDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/NumberInfoAddress',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش آدرس
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminNumberInfoAddress(
        requestBody?: UpdateNumberInfoAddressDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/NumberInfoAddress',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست آدرس‌ها با صفحه‌بندی
     * @param numberInfoId
     * @param cityId
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns NumberInfoAddressResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoAddressPagination(
        numberInfoId?: string,
        cityId?: number,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<NumberInfoAddressResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoAddress/Pagination',
            query: {
                'NumberInfoId': numberInfoId,
                'CityId': cityId,
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
     * دریافت یک آدرس با شناسه
     * @param id شناسه
     * @returns NumberInfoAddressResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoAddress1(
        id: number,
    ): CancelablePromise<NumberInfoAddressResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoAddress/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف آدرس
     * @param id شناسه
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminNumberInfoAddress(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/NumberInfoAddress/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
