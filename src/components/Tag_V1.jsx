import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('dog');
  const [gif, setGif] = useState('');

  const fetchGif = async tag => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const src = data.data.images.downsized_large.url;
    setGif(src);
  };

  useEffect(() => {
    fetchGif(tag);
  }, []);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif!</h1>
      <img width={500} height={300} src={gif} alt="Tag-gif" />
      <input value={tag} onChange={e => setTag(e.target.value)} />
      <button onClick={handleClick}>Click for New</button>
    </div>
  );
};

export default Tag;
