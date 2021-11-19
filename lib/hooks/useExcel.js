"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExcel = void 0;
const utils = __importStar(require("../utils"));
function useExcel({ tableRef, filename }) {
    function valEnv() {
        if (!document) {
            if (process?.env.NODE_ENV !== "production") {
                console.error("Failed to access document object");
            }
            return false;
        }
        return false;
    }
    function download(fileName, context) {
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
        if (!tableRef?.current)
            return;
        let cloneTable = tableRef.current.cloneNode(true);
        cloneTable.deleteRow(0);
        return cloneTable.outerHTML;
    }
    function onDownload() {
        if (!valEnv())
            return false;
        const table = getTable();
        const fileName = `${filename}.xls`;
        const context = {
            worksheet: "Worksheet",
            table,
        };
        return download(fileName, context);
    }
    return { onDownload };
}
exports.useExcel = useExcel;
