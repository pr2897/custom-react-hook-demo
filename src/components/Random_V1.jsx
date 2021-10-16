import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const src = data.data.images.downsized_large.url;
    setGif(src);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random Img</h1>
      <img width={500} height={300} src={gif} alt="Random-gif" />
      <button onClick={handleClick}>Click for New</button>
    </div>
  );
};

export default Random;
