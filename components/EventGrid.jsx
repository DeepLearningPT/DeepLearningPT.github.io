import PropTypes from 'prop-types';

import s from '../styles/EventGrid.module.scss';

function EventGrid({ items }) {
	const orderedItems = items.map((item) => ({ ...item.frontmatter, ...item })).sort((a, b) => a.date > b.date);

	return (
		<ol className={s.EventList}>
			{orderedItems.map(({ title, photos, slug }) => (
				<li className={s.Event} key={slug}>
					<h3>{title}</h3>
					<div>
						{photos.map((p) => <img src={p} alt="" />)}
					</div>
				</li>
			))}
		</ol>
	);
}

EventGrid.defaultProps = {
	items: [],
};

EventGrid.propTypes = {
	items: PropTypes.array,
};

export default EventGrid;
