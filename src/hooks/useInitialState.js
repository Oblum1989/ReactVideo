import { useState, useEffect } from 'react';

const useInitializeState = (API) => {
  const [videos, setVideos] = useState({
    myList: [],
    trends: [],
    originals: [],
  });
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitializeState;
