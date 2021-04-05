export interface Content {
  title: string;
  value: number;
  prev: string;
  current: string;
}

export interface DataFormat {
  widgets: Content[];
}
