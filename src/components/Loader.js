import React from 'react';

export const Loader = () => {
  const styledWrap = {
    background: 'rgba(247, 244, 244, 0.842)',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%'
  };

  const styledLoader = {
    transform: 'translate(-50%, -50%)',
    position: 'fixed',
    top: '50%',
    left: '50%'
  };

  return (
    <div style={styledWrap}>
      <div className="text-center" style={styledLoader}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};
