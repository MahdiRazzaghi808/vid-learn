/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetFileReferenceResultDto } from '../models/GetFileReferenceResultDto';
import type { GetJobResultDto } from '../models/GetJobResultDto';
import type { GetPhotoResultDto } from '../models/GetPhotoResultDto';
import type { NumberInfoResultDto } from '../models/NumberInfoResultDto';
import type { UpdateDescriptionRequestDto } from '../models/UpdateDescriptionRequestDto';
import type { UpdateJobIdRequestDto } from '../models/UpdateJobIdRequestDto';
import type { UpdateServicesRequestDto } from '../models/UpdateServicesRequestDto';
import type { UpdateStatusRequestDto } from '../models/UpdateStatusRequestDto';
import type { UpdateTitleRequestDto } from '../models/UpdateTitleRequestDto';
import type { UpdateWebsiteRequestDto } from '../models/UpdateWebsiteRequestDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PanelNumberInfoControllerService {
    /**
     * اطلاعات کلی شماره
     * @returns NumberInfoResultDto OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfo(): CancelablePromise<NumberInfoResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfo',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * عنوان شماره
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfoGetTitle(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfo/GetTitle',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * ویرایش عنوان شماره
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1PanelNumberInfoUpdateTitle(
        requestBody?: UpdateTitleRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Panel/NumberInfo/UpdateTitle',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * وضعیت تکمیل شماره
     * @returns boolean OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfoGetHasCompleted(): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfo/GetHasCompleted',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * معکوس کردن وضعیت تکمیل
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1PanelNumberInfoToggleHasCompleted(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Panel/NumberInfo/ToggleHasCompleted',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * وضعیت آنلاین، حضوری، مغازه ثابت
     * @returns UpdateStatusRequestDto OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfoGetStatus(): CancelablePromise<UpdateStatusRequestDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfo/GetStatus',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * ویرایش وضعیت آنلاین، حضوری، مغازه
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1PanelNumberInfoUpdateStatus(
        requestBody?: UpdateStatusRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Panel/NumberInfo/UpdateStatus',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * آدرس وب‌سایت
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfoGetWebsite(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfo/GetWebsite',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * ویرایش وب‌سایت
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1PanelNumberInfoUpdateWebsite(
        requestBody?: UpdateWebsiteRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Panel/NumberInfo/UpdateWebsite',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * توضیحات شماره
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfoGetDescription(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfo/GetDescription',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * ویرایش توضیحات
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1PanelNumberInfoUpdateDescription(
        requestBody?: UpdateDescriptionRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Panel/NumberInfo/UpdateDescription',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * عکس پروفایل شماره
     * @returns GetPhotoResultDto OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfoGetPhoto(): CancelablePromise<GetPhotoResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfo/GetPhoto',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * ویرایش عکس پروفایل
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1PanelNumberInfoUpdatePhoto(
        formData?: {
            PhotoFile?: Blob;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Panel/NumberInfo/UpdatePhoto',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * شغل شماره
     * @returns GetJobResultDto OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfoGetJob(): CancelablePromise<GetJobResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfo/GetJob',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * ویرایش شغل
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1PanelNumberInfoUpdateJobId(
        requestBody?: UpdateJobIdRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Panel/NumberInfo/UpdateJobId',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * لیست خدمات شماره
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfoGetServices(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfo/GetServices',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * ویرایش خدمات شماره
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV1PanelNumberInfoUpdateServices(
        requestBody?: UpdateServicesRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Panel/NumberInfo/UpdateServices',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * لیست تصاویر شماره
     * @returns GetFileReferenceResultDto OK
     * @throws ApiError
     */
    public static getApiV1PanelNumberInfoGetFileReferences(): CancelablePromise<Array<GetFileReferenceResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Panel/NumberInfo/GetFileReferences',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * افزودن تصاویر به شماره
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static postApiV1PanelNumberInfoAddFileReferences(
        formData?: {
            PhotoFiles?: Array<Blob>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Panel/NumberInfo/AddFileReferences',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * حذف تصویر از شماره
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV1PanelNumberInfoRemoveFileReference(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Panel/NumberInfo/RemoveFileReference/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
