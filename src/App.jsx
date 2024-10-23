import React, { useEffect, useState } from "react";
import PokeList from "./components/PokeList";

const App = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  //Creating handler function for pagination

  const pagination = async (url, isNext) => {
    const res = await fetch(url);
    const resJson = await res.json();
    setResponse(resJson);
    if (isNext) setPageNumber(pageNumber + 1);
    else setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    pokeApiCall();
  }, []);

  const pokeApiCall = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const resJson = await res.json();
      setResponse(resJson);
    } catch (err) {
      console.log("error is", err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  console.log("response is: ", response);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <PokeList
        response={response}
        pagination={pagination}
        pageNumber={pageNumber}
      />
    </>
  );
};

export default App;
