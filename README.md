# ReactExportTableToExcel

Provides a client side generation of Excel (.xls) file from HTML table element.

[![NPM](https://nodei.co/npm/react-export-table-to-excel.png)](https://npmjs.org/package/react-export-table-to-excel)

---

#### No additional dependencies

---

#### [ReactExportTableToExcel's samples in React.js ( CodeSandbox )](https://codesandbox.io/s/react-export-table-to-excel-sample-dvzkms)

#### [ReactExportTableToExcel's samples in Next.js ( CodeSandbox )](https://codesandbox.io/s/react-export-table-to-excel-next-js-yzl74q)

---

## Installation

```
npm install react-export-table-to-excel
yarn add react-export-table-to-excel
```

## Features

- Download HTML table as Excel file in .xls format
- No server side code
- Set desired .xls filename and sheet
- Hook to export to excel
- Component to export to excel
- Method to export to excel

## Options

- #### Component

A list of available properties can be found below. These must be passed to the containing `DownloadTableExcel` component.

| Property            | Type           | Description                                                                                    |
| ------------------- | -------------- | ---------------------------------------------------------------------------------------------- |
| **filename**        | _string_       | Name of Excel file.                                                                            |
| **sheet**           | _string_       | Name of Excel sheet.                                                                           |
| **children**        | _ReactElement_ | component that will obtain the onClick event to export to excel (the most common is a button). |
| **currentTableRef** | _HTMLElement_  | the current of the table reference.                                                            |

#### Example

```javascript
import React, {useRef} from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';

const Test = () =>  {
    const tableRef = useRef(null);

        return (
            <div>
                <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                   <button> Export excel </button>

                </DownloadTableExcel>

                <table  ref={tableRef}>
                 <tbody>
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
                  </tbody>
                </table>

            </div>
        );
    }
}

export default Test
```

- #### Hook

A list of available properties can be found below. These must be passed to the containing `useDownloadExcel` hook.

| Property            | Type          | Description                         |
| ------------------- | ------------- | ----------------------------------- |
| **filename**        | _string_      | Name of Excel file.                 |
| **sheet**           | _string_      | Name of Excel sheet.                |
| **currentTableRef** | _HTMLElement_ | the current of the table reference. |

#### Example

```javascript
import React, {useRef} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

const Test = () =>  {
    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })

        return (
            <div>
                <button onClick={onDownload}> Export excel </button>

                 <table  ref={tableRef}>
                  <tbody>
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
                  </tbody>
                </table>

            </div>
        );
    }
}

export default Test

```

- #### Method

A list of available properties can be found below. These must be passed to the downloadExcel method.

| Property         | Type     | Description                |
| ---------------- | -------- | -------------------------- |
| **filename**     | _string_ | Name of Excel file.        |
| **sheet**        | _string_ | Name of Excel sheet.       |
| **tablePayload** | _object_ | payload to download excel. |

#### Example

```javascript
import React from "react";
import { downloadExcel } from "react-export-table-to-excel";

const Test = () => {
  const header = ["Firstname", "Lastname", "Age"];
  const body = [
    ["Edison", "Padilla", 14],
    ["Cheila", "Rodrigez", 56],
  ];

  /**
   * @description:
   *  also accepts an array of objects; the method (downloadExcel) will take
   *  as order of each column, the order that each property of the object brings with it.
   *  the method(downloadExcel) will only take the value of each property.
   */
  const body2 = [
    { firstname: "Edison", lastname: "Padilla", age: 14 },
    { firstname: "Cheila", lastname: "Rodrigez", age: 56 },
  ];

  function handleDownloadExcel() {
    downloadExcel({
      fileName: "react-export-table-to-excel -> downloadExcel method",
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        // accept two different data structures
        body: body || body2,
      },
    });
  }

  return (
    <div>
      <button onClick={handleDownloadExcel}>download excel</button>

      <table>
        <tbody>
          <tr>
            {header.map((head) => (
              <th key={head}> {head} </th>
            ))}
          </tr>

          {body.map((item, i) => (
            <tr key={i}>
              {item.map((it) => (
                <td key={it}>{it}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
```
