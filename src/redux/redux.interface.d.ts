export interface StoreState {
  config: ConfigState;
  breaches: BreachesState;
}

export interface StoreAction {
  type: string;
  payload: any;
}

export interface ConfigState {
  theme: string;
  busyCounter: number;
  errorMessages: Array<string>;
}

export interface BreachesState {
  items: Array<Breach>;
  offset: number;
  hasNext: boolean;
}

export interface Breach {
  name: string;
  title: string;
  breachDate: string;
  tags: Array<string>;
  logo: string;
  description: string;
}
