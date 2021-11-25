import axios from "./axios";
import { useEffect, useState } from "react";
import Item from "../Item";

export default function Container() {
  const url = "https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals";
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      return setData(request.data.deals);
    }
    fetchData();
  }, [url]);

  return (
    <div>
      <Item key={1} data={data} />
    </div>
  );
}
