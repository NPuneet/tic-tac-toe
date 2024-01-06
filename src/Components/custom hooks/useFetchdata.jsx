import React, { useEffect, useState } from "react";
const useFetchdata = () => {
  const [a, seta] = useState();
  const [b, setb] = useState();
  useEffect(() => {
    helper();
    setInterval(() => {
      helper();
    }, 60000);
  }, []);
  const helper = async () => {
    try {
      const data = await fetch("https://api.adviceslip.com/advice");
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data.json();
      console.log(json.slip.advice);
      seta(json.slip.advice);
      setb(json.slip.id);
    } catch (error) {
      console.error("There was a problem fetching the data:", error.message);
    }
  };
  return [a, b];
};

export default useFetchdata;
