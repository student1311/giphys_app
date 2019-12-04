import React from 'react';
import { GiphItem } from './GiphItem';

export const GiphList = ({ giphs }) => {
  let giphItems;
  if (giphs) {
    giphItems = giphs.map(function(gif) {
      return <GiphItem key={gif.id} gif={gif} />;
    });
  }

  return <div className="d-flex flex-wrap">{giphItems}</div>;
};
