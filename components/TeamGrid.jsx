import PropTypes from 'prop-types';

import s from '../styles/FoodGrid.module.scss';

function TeamGrid({ items }) {
	const orderedItems = items.map((item) => ({ ...item.frontmatter, ...item })).sort((a, b) => a.slug > b.slug);

	return (
		<ol className={s.TeamList}>
			{orderedItems.map(({
				name, photo, slug, bio, url,
			}) => (
				<li className={s.TeamMember} key={slug}>
					<a href={url}>
						<img src={photo} alt={name} />
					</a>
					<div>
						<p dangerouslySetInnerHTML={{ __html: bio }} />
					</div>
				</li>
			))}
		</ol>
	);
}

TeamGrid.defaultProps = {
	items: [],
};

TeamGrid.propTypes = {
	items: PropTypes.array,
};

export default TeamGrid;
