/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceTimeSlotResultDto } from './ServiceTimeSlotResultDto';
export type ServiceTimeResultDto = {
    dayTypeId?: number;
    dayTypeTitle?: string | null;
    is24Hours?: boolean;
    isClosed?: boolean;
    timeSlots?: Array<ServiceTimeSlotResultDto> | null;
};

