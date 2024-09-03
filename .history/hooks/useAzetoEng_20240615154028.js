import { useLocale } from "next-intl";

const useAzerbaijaniNormalization = () => {
    const lang =  window.location.pathname.split('/')[1]

    console.log(lang);
    const azLatinToCyrillicMap = {
        "ə": "e",
        "ç": "c",
        "ğ": "g",
        "ı": "i",
        "ö": "o",
        "ş": "s",
        "ü": "u"
    };

    const normalizeAzerbaijani = (text) => {
        return text.replace(/[əçğıöüş]/g, char => azLatinToCyrillicMap[char] || char).toLowerCase();
    };

    return normalizeAzerbaijani;
};

export default useAzerbaijaniNormalization;
