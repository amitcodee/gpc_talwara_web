export interface Notice {
  id: number;
  title: string;
  content: string;
  createdby : string;
  createdDate : Date;
  modifiedby : string;
  link?: string[];
}

export interface Column {
  label: string;
  property: string;
}
