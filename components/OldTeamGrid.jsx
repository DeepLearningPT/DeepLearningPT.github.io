import PropTypes from 'prop-types';

import s from '../styles/FoodGrid.module.scss';

function OldTeamGrid({ items }) {
	const orderedItems = items.map((item) => ({ ...item.frontmatter, ...item })).sort((a, b) => a.slug > b.slug);

	return (
		<ol className={s.TeamList}>
			{orderedItems.map(({
				name, photo, slug, linkedinUrl,
			}) => (
				<li className={s.TeamMember} key={slug}>
					<a href={linkedinUrl}>
						<img src={photo} alt={name} style={{ grayscale: 0.7 }} />
					</a>
				</li>
			))}
		</ol>
	);
}

OldTeamGrid.defaultProps = {
	items: [],
};

OldTeamGrid.propTypes = {
	items: PropTypes.array,
};

export default OldTeamGrid;
