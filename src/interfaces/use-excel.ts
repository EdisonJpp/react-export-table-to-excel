export interface UseExcel {
  filename: string;
  currentTableRef: any;
}

export interface UseExcelReturn {
  onDownload: () => boolean;
}
