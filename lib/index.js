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
exports.useExcel = exports.TableExcelComponent = void 0;
const react_1 = __importStar(require("react"));
const useExcel_1 = require("./hooks/useExcel");
Object.defineProperty(exports, "useExcel", { enumerable: true, get: function () { return useExcel_1.useExcel; } });
const TableExcelComponent = (0, react_1.memo)(({ tableRef, filename, children }) => {
    const { onDownload } = (0, useExcel_1.useExcel)({ tableRef, filename });
    return (react_1.default.createElement(react_1.default.Fragment, null, (0, react_1.cloneElement)(react_1.default.createElement("span", null), children, { onClick: onDownload })));
});
exports.TableExcelComponent = TableExcelComponent;
