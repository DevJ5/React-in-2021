import { useState, useEffect } from 'react';

import axios, { baseParams } from '../api/youtube';

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const response = await axios.get('/search', {
      params: { ...baseParams, q: term },
    });
    const videos = response.data.items;
    setVideos(videos);
  };

  return [videos, search];
};

export default useVideos;
