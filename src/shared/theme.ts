type Color = {
    50: string;
    100: string;
    150: string;
    200: string;
    250: string;
    300: string;
    350: string;
    400: string;
    450: string;
};

export const colors = {
    primary: {
        50:  '#EAF9E8',
        100: '#CDF3C6',
        150: '#9ED696',
        200: '#5DB057', // base
        250: '#008539',
        300: '#006D23',
        350: '#00550C',
        400: '#004700',
        450: '#003F00',
    } as Color,

    neutral: {
        50:  '#F7F9FA',
        100: '#E7EBEE',
        150: '#CFD9E0',
        200: '#AEC1CC',
        250: '#67728A',
        300: '#5A657C',
        350: '#414D63',
        400: '#1B273A',
        450: '#111B2B',
    } as Color,

    text: {
        primary: '#1D1D1D',
        secondary: '#334655',
        muted: '#647F8B',
    },

    state: {
        error: '#FF1C30',
        success: '#00B54E',
        warning: '#FFD960',
        delete: '#FFE0E0',
        update: '#CDF3C6',
    },

    default: {
        white: '#FFFFFF',
        black: '#1D1D1D',
    },
} as const;

export const theme = {
    colors,
} as const;

export type Theme = typeof theme;