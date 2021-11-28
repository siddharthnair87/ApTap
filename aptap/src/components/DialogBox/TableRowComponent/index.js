import React from "react";

export default function TableRowComponent({ selectedValue, arg, heading }) {
  console.log("arg", arg);
  return (
    <div>
      <tr>
        <th scope="row">{heading}</th>
        {selectedValue.map((value) => {
          return <td>{value.arg}</td>;
        })}
      </tr>
    </div>
  );
}
