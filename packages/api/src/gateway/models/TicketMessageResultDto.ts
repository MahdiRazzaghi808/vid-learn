/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TicketMessageFileReferenceDto } from './TicketMessageFileReferenceDto';
export type TicketMessageResultDto = {
    ticketMessageId?: string;
    message?: string | null;
    ticketId?: string | null;
    senderId?: string | null;
    persianCreatedDate?: string | null;
    senderName?: string | null;
    ticketSubject?: string | null;
    fileReferences?: Array<TicketMessageFileReferenceDto> | null;
};

