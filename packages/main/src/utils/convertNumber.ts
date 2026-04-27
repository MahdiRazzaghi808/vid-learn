const enToFa: Record<string, string> = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
};

const faToEn: Record<string, string> = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
};

export const toPersianNumbers = (value: string) =>
    value.replace(/\d/g, (d) => enToFa[d] || "");

export const toEnglishNumbers = (value: string) =>
    value.replace(/[۰-۹]/g, (d) => faToEn[d] || "");