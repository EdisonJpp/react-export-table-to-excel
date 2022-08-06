import { UseExcel } from "../interfaces/use-excel";
import { useMemo } from "react";
import { excel } from "../lib";

export function useDownloadExcel({
  currentTableRef,
  filename,
  sheet,
}: UseExcel) {
  return useMemo(
    () => excel({ currentTableRef, filename, sheet }),
    [currentTableRef, filename, sheet]
  );
}
