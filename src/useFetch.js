import { useState, useEffect } from "react";

const useEfecth = (url) => {
  const [data, setData] = useState(null);
  const [isPending, SetisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Your data could not be fetched");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          SetisPending(false);
          setError(null);
        })
        .catch((err) => {
          SetisPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  return { data, isPending, error };
};

export default useEfecth;
