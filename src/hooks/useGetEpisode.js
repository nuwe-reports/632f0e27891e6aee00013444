import { useState } from "react";

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
      alert("There was an error while fetching the data...")
    }
  }, [url]);
  return episode;
};

export { useGetEpisode };
