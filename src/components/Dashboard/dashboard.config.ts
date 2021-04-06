import { WidgetTemplateConfig } from "src/components/Dashboard/dashboard.model";

import { BarChartTemplate } from "src/components/Dashboard/templates/BarChart";
import { BlockTemplate } from "src/components/Dashboard/templates/Block";
import { ListTemplate } from "src/components/Dashboard/templates/List";

export type WidgetType = "COMPARISON" | "METRIC" | "FUNNEL";
export type WidgetPosition = "FULL" | "HALF" | "QUARTER";
export type WidgetTemplate = "LIST" | "PIE_CHART" | "BAR_CHART" | "BLOCK";

export const templateComponents: WidgetTemplateConfig = {
  BLOCK: BlockTemplate,
  LIST: ListTemplate,
  BAR_CHART: BarChartTemplate,
};
