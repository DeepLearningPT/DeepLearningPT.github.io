import PropTypes from 'prop-types';

import s from '../styles/FoodGrid.module.scss';

function TeamGrid({ items }) {
	const orderedItems = items.map((item) => ({ ...item.frontmatter, ...item })).sort((a, b) => a.slug > b.slug);

	return (
		<ol className={s.TeamList}>
			{orderedItems.map(({
				name, photo, slug, bio, linkedinUrl,
			}) => (
				<li className={s.TeamMember} key={slug}>
					<a href={linkedinUrl}>
						<img src={photo} alt={name} />
					</a>
					<div>
						<p>
							<strong>{name}</strong>
							&nbsp;{bio}
							&nbsp;<a href={linkedinUrl}>LinkedIn</a>
						</p>
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
