import { FC } from "react";
import { IProps } from "./interfaces/react-export-table-excel";
import { useExcel } from "./hooks/useExcel";
declare const TableExcelComponent: FC<IProps>;
export { TableExcelComponent, useExcel };
