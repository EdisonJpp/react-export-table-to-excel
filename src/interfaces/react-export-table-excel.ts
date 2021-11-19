import { ReactElement } from "react";
import { UseExcel } from "./use-excel";

export interface IProps extends UseExcel {
  children: ReactElement | ReactElement[];
}
