import PropTypes from 'prop-types';
import MDX from 'mdx-scoped-runtime';

import s from '../styles/BasicListItem.module.scss';

function Initiatives({ items }) {
	if (!items.length) {
		return null;
	}

	const orderedEducation = items.map((item) => ({ ...item.frontmatter, ...item })).sort((a, b) => a.date < b.date);

	return (
		<ol className={s.List}>
			{orderedEducation.map(({
				title, externalUrl, markdownBody,
			}) => (
				<li className={`${s.Item} ${s.ItemWithoutBorders}`} key={externalUrl}>
					<a href={externalUrl} target="_blank" rel="noreferrer">
						<h3 className={s.Title}>
							{title}
						</h3>
						{markdownBody && (
							<div>
								<MDX>{markdownBody}</MDX>
							</div>
						)}
					</a>
				</li>
			))}
		</ol>
	);
}

Initiatives.defaultProps = {
	items: [],
};

Initiatives.propTypes = {
	items: PropTypes.array,
};

export default Initiatives;
