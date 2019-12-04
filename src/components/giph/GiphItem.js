import React from 'react';

export const GiphItem = ({ gif }) => {
  const gifImageInfo = gif.images.fixed_height_small;

  return (
    <div className="gif-item p-1">
      <img
        src={gifImageInfo.url}
        alt={gifImageInfo.slug}
        height={gifImageInfo.height}
        width="125"
      ></img>
    </div>
  );
};
