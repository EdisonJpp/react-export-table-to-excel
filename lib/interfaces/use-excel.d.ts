import { MutableRefObject } from "react";
export interface UseExcel {
    filename: string;
    tableRef: MutableRefObject<any>;
}
export interface UseExcelReturn {
    onDownload: () => boolean;
}
