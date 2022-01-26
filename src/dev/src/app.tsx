import React, { useRef } from "react";
import { useDownloadExcel } from "../../hooks/useExcel";

const App = () => {
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  return (
    <div>
      <button onClick={onDownload}> Export excel </button>
      <table ref={tableRef}>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Edison</td>
          <td>Padilla</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Alberto</td>
          <td>Lopez</td>
          <td>94</td>
        </tr>
      </table>
    </div>
  );
};

export default App;
