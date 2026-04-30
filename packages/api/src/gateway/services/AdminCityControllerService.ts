/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CityResultDto } from '../models/CityResultDto';
import type { CityResultDtoPaginationResultDto } from '../models/CityResultDtoPaginationResultDto';
import type { CreateCityDto } from '../models/CreateCityDto';
import type { UpdateCityDto } from '../models/UpdateCityDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminCityControllerService {
    /**
     * دریافت لیست همه شهرها
     * @returns CityResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminCity(): CancelablePromise<Array<CityResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/City',
        });
    }
    /**
     * ایجاد شهر جدید
     * @param requestBody ورودی ایجاد
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminCity(
        requestBody?: CreateCityDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/City',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش شهر
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminCity(
        requestBody?: UpdateCityDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/City',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست شهرها با صفحه‌بندی
     * @param provinceId
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns CityResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminCityPagination(
        provinceId?: number,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<CityResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/City/Pagination',
            query: {
                'ProvinceId': provinceId,
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
     * دریافت یک شهر با شناسه
     * @param id شناسه شهر
     * @returns CityResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminCity1(
        id: number,
    ): CancelablePromise<CityResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/City/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف شهر
     * @param id شناسه شهر
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminCity(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/City/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف اجباری شهر با تمام وابستگی‌ها
     * @param id شناسه شهر
     * @returns boolean OK
     * @throws ApiError
     */
    public static deleteApiV1AdminCityForce(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/City/{id}/Force',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
