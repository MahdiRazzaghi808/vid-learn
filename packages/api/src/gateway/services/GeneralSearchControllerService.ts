/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GuidPaginationResultDto } from '../models/GuidPaginationResultDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralSearchControllerService {
    /**
     * همه شناسه شماره‌های مرتبط با یک خدمت
     * @param serviceId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByService(
        serviceId: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByService/{serviceId}',
            path: {
                'serviceId': serviceId,
            },
        });
    }
    /**
     * شناسه شماره‌های مرتبط با یک خدمت با صفحه‌بندی
     * @param serviceId
     * @param currentPage
     * @param pageSize
     * @returns GuidPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByServicePagination(
        serviceId: number,
        currentPage: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<GuidPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByService/{serviceId}/Pagination',
            path: {
                'serviceId': serviceId,
            },
            query: {
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * همه شناسه شماره‌های مرتبط با یک تگ
     * @param tagId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByTag(
        tagId: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByTag/{tagId}',
            path: {
                'tagId': tagId,
            },
        });
    }
    /**
     * شناسه شماره‌های مرتبط با یک تگ با صفحه‌بندی
     * @param tagId
     * @param currentPage
     * @param pageSize
     * @returns GuidPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByTagPagination(
        tagId: number,
        currentPage: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<GuidPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByTag/{tagId}/Pagination',
            path: {
                'tagId': tagId,
            },
            query: {
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * همه شناسه شماره‌های مرتبط با یک شغل
     * @param jobId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByJob(
        jobId: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByJob/{jobId}',
            path: {
                'jobId': jobId,
            },
        });
    }
    /**
     * شناسه شماره‌های مرتبط با یک شغل با صفحه‌بندی
     * @param jobId
     * @param currentPage
     * @param pageSize
     * @returns GuidPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByJobPagination(
        jobId: number,
        currentPage: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<GuidPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByJob/{jobId}/Pagination',
            path: {
                'jobId': jobId,
            },
            query: {
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * همه شناسه شماره‌های مرتبط با یک شهر
     * @param cityId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByCity(
        cityId: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByCity/{cityId}',
            path: {
                'cityId': cityId,
            },
        });
    }
    /**
     * شناسه شماره‌های مرتبط با یک شهر با صفحه‌بندی
     * @param cityId
     * @param currentPage
     * @param pageSize
     * @returns GuidPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByCityPagination(
        cityId: number,
        currentPage: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<GuidPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByCity/{cityId}/Pagination',
            path: {
                'cityId': cityId,
            },
            query: {
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * همه شناسه شماره‌های مرتبط با یک استان
     * @param provinceId
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByProvince(
        provinceId: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByProvince/{provinceId}',
            path: {
                'provinceId': provinceId,
            },
        });
    }
    /**
     * شناسه شماره‌های مرتبط با یک استان با صفحه‌بندی
     * @param provinceId
     * @param currentPage
     * @param pageSize
     * @returns GuidPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByProvincePagination(
        provinceId: number,
        currentPage: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<GuidPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByProvince/{provinceId}/Pagination',
            path: {
                'provinceId': provinceId,
            },
            query: {
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * همه شناسه شماره‌هایی که میانگین امتیازشان بیشتر از حد مشخص است
     * @param minScore
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByMinScore(
        minScore?: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByMinScore',
            query: {
                'minScore': minScore,
            },
        });
    }
    /**
     * شناسه شماره‌هایی که میانگین امتیازشان بیشتر از حد مشخص است با صفحه‌بندی
     * @param minScore
     * @param currentPage
     * @param pageSize
     * @returns GuidPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByMinScorePagination(
        minScore?: number,
        currentPage: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<GuidPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByMinScore/Pagination',
            query: {
                'minScore': minScore,
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * همه شناسه شماره‌هایی که آدرسشان در محدوده جغرافیایی است
     * @param minLatitude
     * @param maxLatitude
     * @param minLongitude
     * @param maxLongitude
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByLatLongBounds(
        minLatitude?: number,
        maxLatitude?: number,
        minLongitude?: number,
        maxLongitude?: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByLatLongBounds',
            query: {
                'minLatitude': minLatitude,
                'maxLatitude': maxLatitude,
                'minLongitude': minLongitude,
                'maxLongitude': maxLongitude,
            },
        });
    }
    /**
     * شناسه شماره‌هایی که آدرسشان در محدوده جغرافیایی است با صفحه‌بندی
     * @param minLatitude
     * @param maxLatitude
     * @param minLongitude
     * @param maxLongitude
     * @param currentPage
     * @param pageSize
     * @returns GuidPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByLatLongBoundsPagination(
        minLatitude?: number,
        maxLatitude?: number,
        minLongitude?: number,
        maxLongitude?: number,
        currentPage: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<GuidPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByLatLongBounds/Pagination',
            query: {
                'minLatitude': minLatitude,
                'maxLatitude': maxLatitude,
                'minLongitude': minLongitude,
                'maxLongitude': maxLongitude,
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * همه شناسه شماره‌هایی که آدرسشان در فاصله مشخص از نقطه است
     * @param latitude
     * @param longitude
     * @param distanceKm
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByLatLongDistance(
        latitude?: number,
        longitude?: number,
        distanceKm?: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByLatLongDistance',
            query: {
                'latitude': latitude,
                'longitude': longitude,
                'distanceKm': distanceKm,
            },
        });
    }
    /**
     * شناسه شماره‌هایی که آدرسشان در فاصله مشخص از نقطه است با صفحه‌بندی
     * @param latitude
     * @param longitude
     * @param distanceKm
     * @param currentPage
     * @param pageSize
     * @returns GuidPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByLatLongDistancePagination(
        latitude?: number,
        longitude?: number,
        distanceKm?: number,
        currentPage: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<GuidPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByLatLongDistance/Pagination',
            query: {
                'latitude': latitude,
                'longitude': longitude,
                'distanceKm': distanceKm,
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * همه شناسه شماره‌ها مرتب‌شده بر اساس میانگین امتیاز (نزولی)
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByScoreOrder(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByScoreOrder',
        });
    }
    /**
     * شناسه شماره‌ها مرتب‌شده بر اساس امتیاز با صفحه‌بندی
     * @param currentPage
     * @param pageSize
     * @returns GuidPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchByScoreOrderPagination(
        currentPage: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<GuidPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/ByScoreOrder/Pagination',
            query: {
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * جستجوی ترکیبی با فیلترهای اختیاری (خدمت، تگ، شغل، شهر، استان، امتیاز، لت‌لانگ، فاصله)
     * @param serviceId
     * @param tagId
     * @param jobId
     * @param cityId
     * @param provinceId
     * @param minScore
     * @param latitude
     * @param longitude
     * @param distanceKm
     * @param minLatitude
     * @param maxLatitude
     * @param minLongitude
     * @param maxLongitude
     * @returns string OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchCombined(
        serviceId?: number,
        tagId?: number,
        jobId?: number,
        cityId?: number,
        provinceId?: number,
        minScore?: number,
        latitude?: number,
        longitude?: number,
        distanceKm?: number,
        minLatitude?: number,
        maxLatitude?: number,
        minLongitude?: number,
        maxLongitude?: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/Combined',
            query: {
                'serviceId': serviceId,
                'tagId': tagId,
                'jobId': jobId,
                'cityId': cityId,
                'provinceId': provinceId,
                'minScore': minScore,
                'latitude': latitude,
                'longitude': longitude,
                'distanceKm': distanceKm,
                'minLatitude': minLatitude,
                'maxLatitude': maxLatitude,
                'minLongitude': minLongitude,
                'maxLongitude': maxLongitude,
            },
        });
    }
    /**
     * جستجوی ترکیبی با صفحه‌بندی
     * @param serviceId
     * @param tagId
     * @param jobId
     * @param cityId
     * @param provinceId
     * @param minScore
     * @param latitude
     * @param longitude
     * @param distanceKm
     * @param minLatitude
     * @param maxLatitude
     * @param minLongitude
     * @param maxLongitude
     * @param currentPage
     * @param pageSize
     * @returns GuidPaginationResultDto OK
     * @throws ApiError
     */
    public static getApiV1GeneralSearchCombinedPagination(
        serviceId?: number,
        tagId?: number,
        jobId?: number,
        cityId?: number,
        provinceId?: number,
        minScore?: number,
        latitude?: number,
        longitude?: number,
        distanceKm?: number,
        minLatitude?: number,
        maxLatitude?: number,
        minLongitude?: number,
        maxLongitude?: number,
        currentPage: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<GuidPaginationResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/General/Search/Combined/Pagination',
            query: {
                'serviceId': serviceId,
                'tagId': tagId,
                'jobId': jobId,
                'cityId': cityId,
                'provinceId': provinceId,
                'minScore': minScore,
                'latitude': latitude,
                'longitude': longitude,
                'distanceKm': distanceKm,
                'minLatitude': minLatitude,
                'maxLatitude': maxLatitude,
                'minLongitude': minLongitude,
                'maxLongitude': maxLongitude,
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }
}
