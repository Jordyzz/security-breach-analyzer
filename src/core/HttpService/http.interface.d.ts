export interface ApiMap {
  [type: string]: ApiMapItem;
}

export interface ApiMapItem {
  url: string;
  method: 'post' | 'get' | 'put' | 'delete';
}

export interface HttpRequestCfg {
  type: string;
  data?: any;
  urlParams?: any;
  disableBI?: boolean;
}

export interface BreachesResponse {
  items: Array<any>;
  total: number;
  error: string;
}
