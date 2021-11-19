import React, { FC } from "react";
import { IProps } from "./interfaces/react-export-table-excel";
import { useDownloadExcel } from "./hooks/useExcel";

const DownloadTableExcel: FC<IProps> = ({
  currentTableRef,
  filename,
  children,
}) => {
  const { onDownload } = useDownloadExcel({ currentTableRef, filename });
  return <span onClick={onDownload}>{children}</span>;
};

export { DownloadTableExcel, useDownloadExcel };
