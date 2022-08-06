import * as utils from "./utils";

import { UseExcel, ExcelReturn } from "./interfaces/use-excel";
import { Context } from "./interfaces/context";
import { ITablePayload } from "./utils/create-table";

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

function getTable(currentTableRef?: any, tablePayload?: ITablePayload) {
  if (currentTableRef) {
    const cloneTable = currentTableRef.cloneNode(true);
    return cloneTable.outerHTML;
  }
  if (tablePayload) return utils.createTable(tablePayload);

  console.error("currentTableRef or tablePayload does not exist");
}

function handleDownload(
  {
    fileName,
    sheet,
    tablePayload,
  }: { fileName: string; sheet: string; tablePayload?: ITablePayload },
  currentTableRef?: HTMLElement
) {
  if (!valEnv()) return false;

  const table = getTable(currentTableRef, tablePayload);
  const context: Context = {
    worksheet: sheet || "Worksheet",
    table,
  };

  return download(fileName, context);
}

function excel({ currentTableRef, filename, sheet }: UseExcel): ExcelReturn {
  function onDownload(): boolean {
    if (!valEnv()) return false;

    const table = getTable(currentTableRef);
    const fileName = `${filename}.xls`;

    const context: Context = {
      worksheet: sheet || "Worksheet",
      table,
    };

    return download(fileName, context);
  }

  return { onDownload };
}

export { excel, handleDownload as downloadExcel };
