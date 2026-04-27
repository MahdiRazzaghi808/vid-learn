export interface ChartSeries {
  name: string;
  data: number[];
}

export interface ChartProps {
  title: string;
  series: ChartSeries[];
  categories: string[];
  yAxisFormatter?: (value: number) => string;
  tooltipFormatter?: (value: number) => string;
}
