import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';

function Layout({ children }) {
  return (
    <div className="bg-gray-900 flex flex-col min-h-screen text-white">
      <Helmet>
        <script
          data-ad-client="ca-pub-5238815526449068"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/technologist-light-skin-tone_1f9d1-1f3fb-200d-1f4bb.png"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
