import PropTypes from 'prop-types';

import s from '../styles/Links.module.scss';

function Links({ contact }) {
	const {
		githubURL,
		linkedinURL,
		meetupURL,
		twitterURL,
		youtubeURL,
		mediumURL,
	} = contact;
	const showLinks = contact && (githubURL || linkedinURL || meetupURL || twitterURL || youtubeURL || mediumURL);
	return showLinks ? (
		<ul className={s.Links}>
			{githubURL && (
				<li>
					<a target="_blank" href={githubURL} rel="noreferrer">
						<i className="fab fa-github" />
					</a>
				</li>
			)}
			{linkedinURL && (
				<li>
					<a target="_blank" href={linkedinURL} rel="noreferrer">
						<i className="fab fa-linkedin" />
					</a>
				</li>
			)}
			{meetupURL && (
				<li>
					<a target="_blank" href={meetupURL} rel="noreferrer">
						<i className="fab fa-meetup" />
					</a>
				</li>
			)}
			{twitterURL && (
				<li>
					<a target="_blank" href={twitterURL} rel="noreferrer">
						<i className="fab fa-twitter" />
					</a>
				</li>
			)}
			{youtubeURL && (
				<li>
					<a target="_blank" href={youtubeURL} rel="noreferrer">
						<i className="fab fa-youtube" />
					</a>
				</li>
			)}
			{mediumURL && (
				<li>
					<a target="_blank" href={mediumURL} rel="noreferrer">
						<i className="fab fa-medium" />
					</a>
				</li>
			)}
		</ul>
	) : null;
}

Links.defaultProps = {
	contact: {},
};

Links.propTypes = {
	contact: PropTypes.object,
};

export default Links;
