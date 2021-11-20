import React, { FC } from "react";
import { IProps } from "./interfaces/react-export-table-excel";
import { useDownloadExcel } from "./hooks/useExcel";

const DownloadTableExcel: FC<IProps> = ({
  currentTableRef,
  filename,
  sheet,
  children,
}) => {
  const { onDownload } = useDownloadExcel({ currentTableRef, filename, sheet });
  return <span onClick={onDownload}>{children}</span>;
};

export { DownloadTableExcel, useDownloadExcel };
