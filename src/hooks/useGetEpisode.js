import { useState } from "react";
import { useEffect } from "react";

const useGetEpisode = (url) => {
  const [episode, setEpisode] = useState();
  useEffect(() => {
    try {
      ;(async () => {
        const data = await fetch(url);
        const serializedData = await data.json();
        setEpisode(serializedData);
      })();
    } catch (error) {
      console.log("ERROR", error);
    }
  }, [url]);
  return episode;
};

export { useGetEpisode };
