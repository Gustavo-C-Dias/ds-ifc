export interface Tokens {
    borderRadius: BorderRadius;
    borderWidth: BorderWidth;
    color: Color;
    fontFamily: FontFamily;
    fontSize: FontSize;
    fontWeight: FontWeight;
    spacing: Spacing;
    transitionDuration: TransitionDuration;
    transitionType: TransitionType;
}
export interface BorderRadius {
    '0-5': string;
    '1': string;
    pill: string;
    circle: string;
}
export interface BorderWidth {
    '0-1': string;
    '0-25': string;
    '0-5': string;
    '1': string;
}
export interface Color {
    'primary-100': string;
    'primary-200': string;
    'primary-300': string;
    'primary-400': string;
    'primary-500': string;
    'primary-600': string;
    'primary-700': string;
    'secondary-100': string;
    'secondary-200': string;
    'secondary-300': string;
    'secondary-400': string;
    'secondary-500': string;
    'secondary-600': string;
    'secondary-700': string;
    'neutral-100': string;
    'neutral-200': string;
    'neutral-300': string;
    'neutral-400': string;
    'neutral-500': string;
    'neutral-600': string;
    'neutral-700': string;
}
export interface FontFamily {
    'fontFamily': string;
}
export interface FontSize {
    '1-75': string;
    '2': string;
    '3': string;
    '4': string;
}
export interface FontWeight {
    regular: string;
    semibold: string;
    bold: string;
}
export interface Spacing {
    '0-5': string;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
    '9': string;
    '10': string;
}
export interface TransitionDuration {
    '1': string;
    '2': string;
    '4': string;
}
export interface TransitionType {
    linear: string;
    'ease-in': string;
    'ease-out': string;
    'ease-in-out': string;
}
