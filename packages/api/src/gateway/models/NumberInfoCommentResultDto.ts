/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NumberInfoCommentFileReferenceDto } from './NumberInfoCommentFileReferenceDto';
export type NumberInfoCommentResultDto = {
    fullName?: string | null;
    commentText?: string | null;
    score?: number | null;
    numberInfoId?: string | null;
    numberInfoServiceId?: number | null;
    photoFiles?: Array<Blob> | null;
    isConfirmed?: boolean;
    numberInfoCommentId?: string;
    persianCreatedDate?: string | null;
    fileReferences?: Array<NumberInfoCommentFileReferenceDto> | null;
};

