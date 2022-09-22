
export const randomInRange = (min: number, max: number): number => min + Math.random() * (max - min);

export const map = (x: number, min0: number, max0: number, min1: number, max1: number): number => min0 + ((x - min0) * ((max1 - min1) / (max0 - min0)));
