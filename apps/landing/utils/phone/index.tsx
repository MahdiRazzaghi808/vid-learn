import { NumberInfoResultDto } from "@repo/api/gateway";

export const mergePhone = (user: NumberInfoResultDto | null) => {
    return `${user?.prefixCodeId}${user?.numberBodyId}`
}