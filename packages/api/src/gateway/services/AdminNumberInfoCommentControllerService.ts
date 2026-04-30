/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NumberInfoCommentResultDto } from '../models/NumberInfoCommentResultDto';
import type { NumberInfoCommentResultDtoPaginationResultDto } from '../models/NumberInfoCommentResultDtoPaginationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminNumberInfoCommentControllerService {
    /**
     * دریافت لیست همه نظرات
     * @returns NumberInfoCommentResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoComment(): CancelablePromise<Array<NumberInfoCommentResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoComment',
        });
    }
    /**
     * ایجاد نظر جدید
     * @param formData
     * @returns string OK
     * @throws ApiError
     */
    public static postApiV1AdminNumberInfoComment(
        formData?: {
            FullName?: string;
            CommentText?: string;
            Score?: number;
            NumberInfoId?: string;
            NumberInfoServiceId?: number;
            PhotoFiles?: Array<Blob>;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Admin/NumberInfoComment',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * ویرایش نظر
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1AdminNumberInfoComment(
        formData?: {
            NumberInfoCommentId?: string;
            FullName?: string;
            CommentText?: string;
            Score?: number;
            NumberInfoId?: string;
            NumberInfoServiceId?: number;
            PhotoFiles?: Array<Blob>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Admin/NumberInfoComment',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * دریافت لیست نظرات با صفحه‌بندی
     * @param numberInfoId
     * @param numberInfoServiceId
     * @param isConfirmed
     * @param q
     * @param currentPage
     * @param pageSize
     * @returns NumberInfoCommentResultDtoPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoCommentPagination(
        numberInfoId?: string,
        numberInfoServiceId?: number,
        isConfirmed?: boolean,
        q?: string,
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<NumberInfoCommentResultDtoPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoComment/Pagination',
            query: {
                'NumberInfoId': numberInfoId,
                'NumberInfoServiceId': numberInfoServiceId,
                'IsConfirmed': isConfirmed,
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
     * دریافت یک نظر با شناسه
     * @param id شناسه
     * @returns NumberInfoCommentResultDto OK
     * @throws ApiError
     */
    public static getApiV1AdminNumberInfoComment1(
        id: string,
    ): CancelablePromise<NumberInfoCommentResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Admin/NumberInfoComment/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * حذف نظر
     * @param id شناسه
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1AdminNumberInfoComment(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Admin/NumberInfoComment/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * تغییر وضعیت تأیید نظر (برعکس کردن IsConfirmed)
     * @param id شناسه نظر
     * @returns boolean OK
     * @throws ApiError
     */
    public static patchApiV1AdminNumberInfoCommentToggleConfirm(
        id: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/Admin/NumberInfoComment/{id}/ToggleConfirm',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
