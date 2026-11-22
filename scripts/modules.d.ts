declare module 'subset-font' {
  export default function subsetFont(
    font: Buffer,
    text: string,
    options: {
      targetFormat?: string;
      variationAxes?: Record<string, number | { min: number; max: number }>;
      keepFeatures?: string[];
      noHinting?: boolean;
    },
  ): Promise<Buffer>;
}
