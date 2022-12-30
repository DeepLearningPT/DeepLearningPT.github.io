/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/base.css';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

MyApp.defaultProps = {
	pageProps: {},
};

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object,
};

export default MyApp;
