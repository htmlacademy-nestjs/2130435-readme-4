type PngJpgformat<T extends string> = `${T}.png` | `${T}.jpg`;
export type PhotoFormat = PngJpgformat<string>
