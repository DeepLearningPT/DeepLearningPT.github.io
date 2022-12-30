import Script from 'next/script';
import PropTypes from 'prop-types';
import Head from 'next/head';

function BaseLayout({
	title, description, ogTitle, ogType, ogUrl, ogImage, themeColor, className, children,
}) {
	return (
		<div className={className}>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta property="og:title" content={ogTitle} />
				<meta property="og:type" content={ogType} />
				<meta property="og:url" content={ogUrl} />
				<meta property="og:image" content={ogImage} />

				<link rel="manifest" href="site.webmanifest" />
				<link rel="apple-touch-icon" href="icon.png" />
				<meta name="theme-color" content={themeColor} />
			</Head>

			{children}

			<Script src="https://kit.fontawesome.com/2c567e1b44.js" crossOrigin="anonymous" />
		</div>
	);
}

BaseLayout.defaultProps = {
	className: 'l-wrapper',
};

BaseLayout.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	ogTitle: PropTypes.string.isRequired,
	ogType: PropTypes.string.isRequired,
	ogUrl: PropTypes.string.isRequired,
	ogImage: PropTypes.string.isRequired,
	themeColor: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.array.isRequired,
};

export default BaseLayout;
