import { Context, ContextTypes } from "../interfaces/context";

export function base64(uriComponent: string | number | boolean) {
  return window.btoa(unescape(encodeURIComponent(uriComponent)));
}

export function format(s: string, c: Context) {
  return s.replace(/{(\w+)}/g, (_: string, p: ContextTypes) => c[p]);
}

export const uri = "data:application/vnd.ms-excel;base64,";
export const template =
  '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
  'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
  'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
  "lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>" +
  "</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></" +
  "xml><![endif]--></head><body>{table}</body></html>";
