/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserResultDto } from '../models/UserResultDto';
import type { UserResultDtoPaginationResultDto } from '../models/UserResultDtoPaginationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminUserControllerService {
    /**
     * دریافت لیست همه کاربران
     * @returns UserResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminUser(): CancelablePromise<Array<UserResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/User',
        });
    }
    /**
     * ایجاد کاربر جدید
     * @param formData
     * @returns string OK
     * @throws ApiError
     */
    public static postApiV1AdminUser(
        formData?: {
            Password?: string;
            PhotoFile?: Blob;
            UserName?: string;
            FirstName?: string;
            LastName?: string;
            Mobile?: string;
            NationalCode?: string;
            BirthDay?: string;
            GenderId?: number;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/User',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش کاربر
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminUser(
        formData?: {
            UserId?: string;
            PhotoFile?: Blob;
            UserName?: string;
            FirstName?: string;
            LastName?: string;
            Mobile?: string;
            NationalCode?: string;
            BirthDay?: string;
            GenderId?: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/User',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست کاربران با صفحه‌بندی
     * @param isActive
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns UserResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminUserPagination(
        isActive?: boolean,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<UserResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/User/Pagination',
            query: {
                'IsActive': isActive,
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
     * دریافت یک کاربر با شناسه
     * @param id شناسه کاربر
     * @returns UserResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminUser1(
        id: string,
    ): CancelablePromise<UserResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/User/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف کاربر
     * @param id شناسه کاربر
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminUser(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/User/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف اجباری کاربر با تمام وابستگی‌ها
     * @param id شناسه کاربر
     * @returns boolean OK
     * @throws ApiError
     */
    public static deleteApiV1AdminUserForce(
        id: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/User/{id}/Force',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
