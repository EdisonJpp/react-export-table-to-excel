export interface UseExcel {
  filename: string;
  sheet?: string;
  currentTableRef: any;
}

export interface ExcelReturn {
  onDownload: () => boolean;
}
