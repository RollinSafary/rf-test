import React, { useEffect } from 'react';

const RootPage = () => {
  useEffect(() => {
    console.log('Root Page Mounted');
  }, []);

  return <>Root Page</>;
};

export default RootPage;
