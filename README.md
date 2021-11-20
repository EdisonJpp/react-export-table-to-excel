# ReactExportTableToExcel

Provides a client side generation of Excel (.xls) file from HTML table element.

[![NPM](https://nodei.co/npm/react-export-table-to-excel.png)](https://npmjs.org/package/react-export-table-to-excel)

---

No additional dependencies

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

                   <Button> Export excel </Button>

                </DownloadTableExcel>

                <table  ref={tableRef}>
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
                <Button onClick={onDownload}> Export excel </Button>

                <table  ref={tableRef}>
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
    }
}

export default Test
```
