/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetByMobileNumberInfoResultDto } from '../models/GetByMobileNumberInfoResultDto';
import type { GetFileReferenceResultDto } from '../models/GetFileReferenceResultDto';
import type { GetJobResultDto } from '../models/GetJobResultDto';
import type { GetPhotoResultDto } from '../models/GetPhotoResultDto';
import type { NumberInfoResultDto } from '../models/NumberInfoResultDto';
import type { UpdateStatusRequestDto } from '../models/UpdateStatusRequestDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralNumberInfoControllerService {
    /**
     * اطلاعات کلی شماره
     * @param obfuscatedId
     * @returns NumberInfoResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoGetInfo(
        obfuscatedId: string,
    ): CancelablePromise<NumberInfoResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/GetInfo/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * بررسی تکمیل پروفایل شماره
     * @param mobileNumber
     * @returns GetByMobileNumberInfoResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoCheckCompleted(
        mobileNumber: string,
    ): CancelablePromise<GetByMobileNumberInfoResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/checkCompleted',
            query: {
                'MobileNumber': mobileNumber,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * عنوان شماره
     * @param obfuscatedId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoGetTitle(
        obfuscatedId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/GetTitle/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * وضعیت تکمیل شماره
     * @param obfuscatedId
     * @returns boolean OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoGetHasCompleted(
        obfuscatedId: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/GetHasCompleted/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * وضعیت آنلاین، حضوری، مغازه ثابت
     * @param obfuscatedId
     * @returns UpdateStatusRequestDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoGetStatus(
        obfuscatedId: string,
    ): CancelablePromise<UpdateStatusRequestDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/GetStatus/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * آدرس وب‌سایت
     * @param obfuscatedId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoGetWebsite(
        obfuscatedId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/GetWebsite/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * توضیحات شماره
     * @param obfuscatedId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoGetDescription(
        obfuscatedId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/GetDescription/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * عکس پروفایل شماره
     * @param obfuscatedId
     * @returns GetPhotoResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoGetPhoto(
        obfuscatedId: string,
    ): CancelablePromise<GetPhotoResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/GetPhoto/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * شغل شماره
     * @param obfuscatedId
     * @returns GetJobResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoGetJob(
        obfuscatedId: string,
    ): CancelablePromise<GetJobResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/GetJob/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * لیست خدمات شماره
     * @param obfuscatedId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoGetServices(
        obfuscatedId: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/GetServices/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * لیست تصاویر شماره
     * @param obfuscatedId
     * @returns GetFileReferenceResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralNumberInfoGetFileReferences(
        obfuscatedId: string,
    ): CancelablePromise<Array<GetFileReferenceResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/NumberInfo/GetFileReferences/{obfuscatedId}',
            path: {
                'obfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
