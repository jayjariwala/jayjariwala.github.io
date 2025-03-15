/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');
module.exports = {
	siteMetadata: {
		title: `Jay Jariwala Portfolio`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-resolve-src',
			options: {
				srcPath: path.resolve(__dirname, 'src'),
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/images/brand.jpg',
			},
		},
		'gatsby-plugin-postcss',
		'gatsby-plugin-material-ui',
	],
};
