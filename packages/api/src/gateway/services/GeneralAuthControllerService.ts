/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDto } from '../models/LoginDto';
import type { LoginResultDto } from '../models/LoginResultDto';
import type { SendOtpRequestDto } from '../models/SendOtpRequestDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralAuthControllerService {
    /**
     * ورود
     * @param requestBody اطلاعات احراز
     * @returns LoginResultDto OK
     * @throws ApiError
     */
    public static postApiV1GeneralAuth(
        requestBody?: LoginDto,
    ): CancelablePromise<LoginResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/General/Auth',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * TOTP
     * @param obfuscatedId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralAuthTopt(
        obfuscatedId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Auth/TOPT',
            query: {
                'ObfuscatedId': obfuscatedId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * ارسال رمز یک‌بار مصرف ۶ رقمی به شماره موبایل
     * @param requestBody شناسه obfuscated
     * @returns any OK
     * @throws ApiError
     */
    public static postApiV1GeneralAuthSendOtp(
        requestBody?: SendOtpRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/General/Auth/SendOtp',
            body: requestBody,
            mediaType: 'application/json; x-api-version=1.0',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
