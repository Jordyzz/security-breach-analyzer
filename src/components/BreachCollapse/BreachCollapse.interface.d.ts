import { Breach } from '@redux/redux.interface';

export interface BreachCollapseProps {
  breach: Breach;
  isSelected?: boolean;
  onSelectedClick: () => void;
}
