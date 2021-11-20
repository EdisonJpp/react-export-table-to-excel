import * as utils from "../utils";

import { UseExcel, UseExcelReturn } from "../interfaces/use-excel";
import { Context } from "../interfaces/context";

export function useDownloadExcel({
  currentTableRef,
  filename,
  sheet,
}: UseExcel): UseExcelReturn {
  function valEnv(): boolean {
    if (!document) {
      if (process?.env.NODE_ENV !== "production") {
        console.error("Failed to access document object");
      }
      return false;
    }
    return true;
  }

  function download(fileName: string, context: Context): boolean {
    const element = window.document.createElement("a");
    element.href =
      utils.uri + utils.base64(utils.format(utils.template, context));
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    return true;
  }

  function getTable() {
    if (!currentTableRef) return;
    const cloneTable = currentTableRef.cloneNode(true);
    cloneTable.deleteRow(0);
    return cloneTable.outerHTML;
  }

  function onDownload(): boolean {
    if (!valEnv()) return false;

    const table = getTable();
    const fileName = `${filename}.xls`;

    const context: Context = {
      worksheet: sheet || "Worksheet",
      table,
    };

    return download(fileName, context);
  }

  return { onDownload };
}
