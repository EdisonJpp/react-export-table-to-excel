import React from "react";
import { renderToString } from "react-dom/server";

const acceptTypes = ["string", "number", "boolean"];

export interface ITablePayload {
  header: string[];
  body:
    | Array<{ [key: string]: string | number | boolean }>
    | Array<(string | number | boolean)[]>;
}

export default function createTable({ header, body }: ITablePayload) {
  const headers = (
    <tr>
      {header.map((head) => (
        <th key={head}>{head}</th>
      ))}
    </tr>
  );

  const bodies = body.map((val, i) => {
    if (Array.isArray(val)) {
      return (
        <tr key={i}>
          {val.map((value, i) => (
            <th key={i}> {value} </th>
          ))}
        </tr>
      );
    }

    if (val !== null && typeof val === "object") {
      return (
        <tr key={i}>
          {Object.entries(val).map(([key, value], i) => {
            if (typeof value === "object") {
              console.error(
                `typeof ${key} is incorrect, only accept ${acceptTypes.join(
                  ", "
                )} `
              );

              return <th key={i}></th>;
            }

            return (
              <th key={i}>
                <>{value}</>
              </th>
            );
          })}
        </tr>
      );
    }

    console.error(
      `
       data structure is incorrect,  
       data structure type -> 
       " type data = Array<{ [key: string]: string | number | boolean }> 
                         or 
        type data = Array<(string | number | boolean)[]>"
      `
    );

    return null;
  });

  return renderToString(
    <table>
      <tbody>
        {headers}
        {bodies}
      </tbody>
    </table>
  );
}
