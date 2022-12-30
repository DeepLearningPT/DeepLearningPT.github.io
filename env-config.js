const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	'process.env.BACKEND_URL': isProduction ? '/new-site' : '',
};
