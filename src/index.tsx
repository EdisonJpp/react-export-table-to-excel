import React, { FC, cloneElement, memo } from "react";
import { IProps } from "./interfaces/react-export-table-excel";
import { useDownloadExcel } from "./hooks/useExcel";

const DownloadTableExcel: FC<IProps> = memo(
  ({ tableRef, filename, children }) => {
    const { onDownload } = useDownloadExcel({ tableRef, filename });
    return (
      <>{cloneElement(<span></span>, children, { onClick: onDownload })}</>
    );
  }
);

export { DownloadTableExcel, useDownloadExcel };
