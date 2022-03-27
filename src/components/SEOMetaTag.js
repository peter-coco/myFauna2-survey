import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTag = (props) => {
  return (
    <Helmet>
      {/* <title>{props.title}</title> */}

      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:site_name" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.imgsrc} />
      <meta property="og:url" content={props.url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <link rel="canonical" href={props.url} />
    </Helmet>
  );
};

export default MetaTag;
