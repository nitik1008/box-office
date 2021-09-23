import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box-Office"
        subtitle="are you looking for a movie or a actor?"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
