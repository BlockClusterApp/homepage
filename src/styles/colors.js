import { mix, lighten } from 'polished';

export const primary = '#2C92C4';

export const secondary = '#104380';

export const tertiary = '#00FFD3';

export const backgroundSecondaryText = '#46D7FF';

export const background = secondary;

export const grey = '#f8f8f8';

export const link = '#2d79be';

export const disabled = '#c1c1c1';

export const bgBody = '#fff';

export const border = '#e5e5e5';

export const error = '#ff3c3d';

export const success = '#1cd800';

const textMixShade = secondary; // '#0043ff';

const textBaseShade = '#444';

export const text = mix(0.055, textMixShade, textBaseShade);

export const textPrimary = '#c1fff6';
