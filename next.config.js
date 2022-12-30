const path = require('path');
// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

module.exports = {
  webpack(config) {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		});
		config.resolve.alias['@'] = path.join(__dirname, '.');
		return config;
	},
}
