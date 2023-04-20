import { useState } from "react";

export default function useHttp() {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(null);

  const sendRequest = (requestConfig) => {
    const { url, method = "GET", header = "", body = {} } = requestConfig;
    setPending(true);
    fetch(url, { method, header, body: JSON.stringify(body) })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setPending(false);
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  };
  return { error, pending, sendRequest };
}
