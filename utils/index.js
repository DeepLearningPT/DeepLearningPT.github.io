import PropTypes from 'prop-types';
import matter from 'gray-matter';

function getSlugFromPath(path) {
	// eslint-disable-next-line no-useless-escape
	return path.replace(/^.*[\\\/]/, '').slice(0, -3);
}

export function getContentFromFile(file) {
	const contents = matter(file.default);

	return {
		// this frontmatter includes date, which nextjs doesn't like
		// to serialize, so we do it before
		frontmatter: JSON.parse(JSON.stringify(contents.data)),
		markdownBody: contents.content,
	};
}

// TODO: check if we could reduce duplication
// between this and getSlugs()
export function getFileContentFromContext(context, urlPrefix) {
	const keys = context.keys();
	const values = keys.map(context);
	const data = keys.map((key, index) => {
		const slug = getSlugFromPath(key);
		const value = values[index];

		return {
			...getContentFromFile(value),
			slug,
			// TODO: move this into a routes file
			url: `${urlPrefix}${slug}`,
		};
	});
	return data;
}

export function getSlugs(context) {
	const keys = context.keys();
	const data = keys.map((key) => {
		const slug = getSlugFromPath(key);

		return slug;
	});
	return data;
}

export async function loadAllContentFromFiles() {
	const codeOfConductFile = await import('../content/code-of-conduct.md');
	const codeOfConductFileContents = getContentFromFile(codeOfConductFile);
	const events = ((context) => getFileContentFromContext(context, '/events/'))(
		require.context('../content/events', true, /\.md$/),
	);
	const blogEntries = ((context) => getFileContentFromContext(context, '/initiatives/'))(
		require.context('../content/initiatives', true, /\.md$/),
	);
	const team = ((context) => getFileContentFromContext(context, '/team/'))(
		require.context('../content/team', true, /\.md$/),
	);
	const config = await import('../siteconfig.json');

	return {
		events,
		blogEntries,
		team,
		codeOfConductContent: codeOfConductFileContents.markdownBody,
		config: config.default,
	};
}

export const allContentDefaultProps = {
	events: null,
	blogEntries: null,
	team: null,
	codeOfConductContent: null,
	config: null,
};

export const allContentPropTypes = {
	codeOfConductContent: PropTypes.string,
	events: PropTypes.array,
	blogEntries: PropTypes.array,
	team: PropTypes.array,
	config: PropTypes.object,
};
