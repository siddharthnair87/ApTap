import React from "react";

export default function ReusableTableCell({ h1text, ptext }) {
  return (
    <div>
      {" "}
      <div style={{ fontWeight: "700" }}>
        <h1>{h1text} </h1>
        <p>{ptext}</p>
      </div>
    </div>
  );
}
