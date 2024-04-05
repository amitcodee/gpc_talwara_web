export interface Notice {
  id: number;
  title: string;
  content: string;
  createdby : string;
  createdDate : Date;
  modifiedby : string;
  link?: string[];
  status?: string;
  action?: string;
}

export interface Column {
  label: string;
  property: string;
}
