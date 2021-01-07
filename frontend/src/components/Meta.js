import { Helmet } from 'react-helmet';
import React from 'react';

const Meta = ({ title, description, keywords }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='name' content={keywords} />
      </Helmet>
    </>
  );
};

Meta.defaultProps = {
  title: 'Shop it! | Home',
  description: 'We sell the best used ingredients.',
  keywords: 'used, food',
};

export default Meta;
