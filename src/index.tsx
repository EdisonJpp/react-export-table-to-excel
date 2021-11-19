import React, { FC, cloneElement, memo } from "react";
import { IProps } from "./interfaces/react-export-table-excel";
import { useExcel } from "./hooks/useExcel";

const TableExcelComponent: FC<IProps> = memo(
  ({ tableRef, filename, children }) => {
    const { onDownload } = useExcel({ tableRef, filename });
    return (
      <>{cloneElement(<span></span>, children, { onClick: onDownload })}</>
    );
  }
);

export { TableExcelComponent, useExcel };
