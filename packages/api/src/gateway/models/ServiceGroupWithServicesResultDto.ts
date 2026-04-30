/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceGroupServiceResultDto } from './ServiceGroupServiceResultDto';
export type ServiceGroupWithServicesResultDto = {
    title?: string | null;
    numberInfoId?: string;
    photoFile?: Blob | null;
    serviceGroupId?: number;
    numberInfoTitle?: string | null;
    photoPath?: string | null;
    services?: Array<ServiceGroupServiceResultDto> | null;
};

