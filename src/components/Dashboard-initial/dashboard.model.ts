export interface List {
  title: string;
  value: string;
}

export type BarChart = {
  name: string;
  data: [number, number] | number[];
};

export interface Content {
  title: string;
  value?: number;
  prev?: string;
  current?: string;
  items?: List[] | BarChart[];
}

export interface DataFormat {
  widgets: Content[];
}
