import React, { useState, useEffect } from 'react';
import { GiphList } from './GiphList';
import { SearchGiph } from './SearchGiph';
import { useLoader } from '../useLoader';

export const Giph = () => {
  const [giphs, setGiph] = useState([]);
  const [loader, showLoader, hideLoader] = useLoader();

  useEffect(() => {
    getTrend();
  }, []);

  const getTrend = () => {
    showLoader();
    fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=ap7ebrt6E0e7JUaH7PtUgiUm76UtQaaa&limit=32'
    )
      .then(response => response.json())
      .then(giphs => {
        setGiph(giphs);
        hideLoader();
      })
      .catch(error => {
        console.log(error);
        hideLoader();
      });
  };

  const performSearch = query => {
    showLoader();
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=ap7ebrt6E0e7JUaH7PtUgiUm76UtQaaa&limit=32`
    )
      .then(response => response.json())
      .then(giphs => {
        setGiph(giphs);
        hideLoader();
      })
      .catch(error => {
        console.log(error);
        hideLoader();
      });
  };

  return (
    <div className="wrapContent">
      <SearchGiph onSearch={performSearch} />
      <GiphList giphs={giphs.data} />
      {loader}
    </div>
  );
};
