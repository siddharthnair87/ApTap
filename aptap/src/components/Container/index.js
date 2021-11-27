import axios from "./axios";
import { useEffect, useState } from "react";
import Item from "../Item";

export default function Container() {
  // const url = "https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals";
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const request = await axios.get();
      return setData(request.data.deals);
    }
    getData();
  }, []);

  return (
    <div>
      {data.map((individualRow) => {
        return <Item row={individualRow} />;
      })}
    </div>
  );
}
