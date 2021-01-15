import { ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
export interface DonutChartModel {
  chartData: number[];
  chartLabels: Label[];
  chartOptions: ChartOptions;
  chartColors: Color[];
  chartLegend: boolean;
  chartType: ChartType;
  chartPlugins: [];
}
export interface PieChartModel {
  chartData: number[];
  chartLabels: Label[];
  chartOptions: ChartOptions;
  chartColors: Color[];
  chartLegend: boolean;
  chartType: ChartType;
  chartPlugins: [];
}
export interface LineChartModel {
  chartData: ChartDataSets[];
  chartLabels: Label[];
  chartOptions: ChartOptions;
  chartColors: Color[];
  chartLegend: boolean;
  chartType: ChartType;
  chartPlugins: [];
}
export interface BarChartModel {

  chartData: ChartDataSets[];
  chartLabels: Label[];
  chartOptions: ChartOptions;
  chartColors: Color[];
  chartLegend: boolean;
  chartType: ChartType;
  chartPlugins: [];
}
export interface DonutChartDataModel {
  dataSets: number[];
  chartLabel: string[];
}
export interface PieChartDataModel {
  dataSets: number[];
  chartLabel: string[];
}
export interface LineChartDataModel {
  dataSets: dataSetChartModel[];
  chartLabel: string[];
}
export interface dataSetChartModel{
  data: number[];
  label: string;
}
