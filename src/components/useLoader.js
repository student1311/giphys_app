import React, { useState } from 'react';
import { Loader } from './Loader';

export const useLoader = props => {
  const [visible, setVisible] = useState(false);

  const showLoader = () => setVisible(true);
  const hideLoader = () => setVisible(false);
  const loader = visible ? <Loader /> : null;

  return [loader, showLoader, hideLoader];
};
