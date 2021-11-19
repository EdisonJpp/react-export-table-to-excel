"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = exports.uri = exports.format = exports.base64 = void 0;
function base64(uriComponent) {
    return window.btoa(unescape(encodeURIComponent(uriComponent)));
}
exports.base64 = base64;
function format(s, c) {
    return s.replace(/{(\w+)}/g, (_, p) => c[p]);
}
exports.format = format;
exports.uri = "data:application/vnd.ms-excel;base64,";
exports.template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
    'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
    'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
    "lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>" +
    "</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></" +
    "xml><![endif]--></head><body>{table}</body></html>";
