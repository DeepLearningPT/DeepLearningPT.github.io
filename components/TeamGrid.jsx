import PropTypes from 'prop-types';

import s from '../styles/FoodGrid.module.scss';

function TeamGrid({ items }) {
	const orderedItems = items.map((item) => ({ ...item.frontmatter, ...item })).sort((a, b) => a.slug > b.slug);

	return (
		<ol className={s.TeamList}>
			{orderedItems.map(({
				name, photo, slug, bio,
			}) => (
				<li className={s.TeamMember} key={slug}>
					<img src={photo} alt={name} />
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
