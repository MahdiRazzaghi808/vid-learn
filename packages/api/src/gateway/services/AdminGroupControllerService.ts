/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGroupDto } from '../models/CreateGroupDto';
import type { GroupResultDto } from '../models/GroupResultDto';
import type { GroupResultDtoPaginationResultDto } from '../models/GroupResultDtoPaginationResultDto';
import type { UpdateGroupDto } from '../models/UpdateGroupDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminGroupControllerService {
    /**
     * دریافت لیست همه گروه‌ها
     * @returns GroupResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminGroup(): CancelablePromise<Array<GroupResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Group',
        });
    }
    /**
     * ایجاد گروه جدید
     * @param requestBody ورودی ایجاد
     * @returns string OK
     * @throws ApiError
     */
    public static postApiV1AdminGroup(
        requestBody?: CreateGroupDto,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/Group',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش گروه
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminGroup(
        requestBody?: UpdateGroupDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/Group',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست گروه‌ها با صفحه‌بندی
     * @param creatorUserId
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns GroupResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminGroupPagination(
        creatorUserId?: string,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<GroupResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Group/Pagination',
            query: {
                'CreatorUserId': creatorUserId,
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
     * دریافت یک گروه با شناسه
     * @param id شناسه گروه
     * @returns GroupResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminGroup1(
        id: string,
    ): CancelablePromise<GroupResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/Group/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف گروه
     * @param id شناسه گروه
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminGroup(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/Group/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف اجباری گروه با تمام وابستگی‌ها (سیاست‌های دسترسی و تخصیص کاربران)
     * @param id شناسه گروه
     * @returns boolean OK
     * @throws ApiError
     */
    public static deleteApiV1AdminGroupForce(
        id: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/Group/{id}/Force',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
