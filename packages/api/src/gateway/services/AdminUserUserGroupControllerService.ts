/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserUserGroupDto } from '../models/CreateUserUserGroupDto';
import type { SetGroupUsersDto } from '../models/SetGroupUsersDto';
import type { SetUserGroupsDto } from '../models/SetUserGroupsDto';
import type { UpdateUserUserGroupDto } from '../models/UpdateUserUserGroupDto';
import type { UserUserGroupResultDto } from '../models/UserUserGroupResultDto';
import type { UserUserGroupResultDtoPaginationResultDto } from '../models/UserUserGroupResultDtoPaginationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminUserUserGroupControllerService {
    /**
     * دریافت لیست همه ارتباط‌های کاربر-گروه
     * @returns UserUserGroupResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminUserUserGroup(): CancelablePromise<Array<UserUserGroupResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/UserUserGroup',
        });
    }
    /**
     * ایجاد ارتباط کاربر-گروه
     * @param requestBody ورودی ایجاد
     * @returns number OK
     * @throws ApiError
     */
    public static postApiV1AdminUserUserGroup(
        requestBody?: CreateUserUserGroupDto,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/UserUserGroup',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش ارتباط کاربر-گروه
     * @param requestBody ورودی ویرایش
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminUserUserGroup(
        requestBody?: UpdateUserUserGroupDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/UserUserGroup',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست با صفحه‌بندی
     * @param userId
     * @param groupId
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns UserUserGroupResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminUserUserGroupPagination(
        userId?: string,
        groupId?: string,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<UserUserGroupResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/UserUserGroup/Pagination',
            query: {
                'UserId': userId,
                'GroupId': groupId,
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
     * دریافت گروه‌های یک کاربر
     * @param userId شناسه کاربر
     * @returns UserUserGroupResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminUserUserGroupByUser(
        userId: string,
    ): CancelablePromise<Array<UserUserGroupResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/UserUserGroup/ByUser/{userId}',
            path: {
                'userId': userId,
            },
        });
    }
    /**
     * دریافت کاربران یک گروه
     * @param groupId شناسه گروه
     * @returns UserUserGroupResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminUserUserGroupByGroup(
        groupId: string,
    ): CancelablePromise<Array<UserUserGroupResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/UserUserGroup/ByGroup/{groupId}',
            path: {
                'groupId': groupId,
            },
        });
    }
    /**
     * دریافت لیست شناسه گروه‌های یک کاربر
     * @param userId شناسه کاربر
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1AdminUserUserGroupGroupIdsByUser(
        userId: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/UserUserGroup/GroupIdsByUser/{userId}',
            path: {
                'userId': userId,
            },
        });
    }
    /**
     * دریافت لیست شناسه کاربران یک گروه
     * @param groupId شناسه گروه
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1AdminUserUserGroupUserIdsByGroup(
        groupId: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/UserUserGroup/UserIdsByGroup/{groupId}',
            path: {
                'groupId': groupId,
            },
        });
    }
    /**
     * دریافت یک مورد با شناسه
     * @param id شناسه
     * @returns UserUserGroupResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminUserUserGroup1(
        id: number,
    ): CancelablePromise<UserUserGroupResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/UserUserGroup/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف ارتباط کاربر-گروه
     * @param id شناسه
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminUserUserGroup(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/UserUserGroup/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * به‌روزرسانی گروه‌های یک کاربر (جایگزینی با لیست جدید)
     * @param requestBody ورودی شامل شناسه کاربر و لیست شناسه گروه‌ها
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminUserUserGroupSetUserGroups(
        requestBody?: SetUserGroupsDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/UserUserGroup/SetUserGroups',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * به‌روزرسانی کاربران یک گروه (جایگزینی با لیست جدید)
     * @param requestBody ورودی شامل شناسه گروه و لیست شناسه کاربران
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminUserUserGroupSetGroupUsers(
        requestBody?: SetGroupUsersDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/UserUserGroup/SetGroupUsers',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
