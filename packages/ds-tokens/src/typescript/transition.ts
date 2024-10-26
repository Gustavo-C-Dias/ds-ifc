import { TransitionDuration, TransitionType } from "../types";

export const transitionDuration: TransitionDuration = {
    '1': 'var(--transition-duration-1)',
    '2': 'var(--transition-duration-2)',
    '4': 'var(--transition-duration-4)',
}

export const transitionType: TransitionType = {
    'ease-in': 'var(--transition-type-ease-in)',
    'ease-out': 'var(--transition-type-ease-out)',
    'ease-in-out': 'var(--transition-type-ease-in-out)',
    linear: 'var(--transition-type-linear)',
}