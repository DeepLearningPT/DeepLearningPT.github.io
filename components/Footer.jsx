import PropTypes from 'prop-types';
import Links from './Links';

import s from '../styles/Common.module.scss';

function Footer({ config }) {
	const { contact } = config;
	return (
		<footer className={s.Footer}>
			<div className="l-container">
				<ol>
					<li>
						©
						{' '}
						{new Date().getFullYear()}
						{' '}
						DeepLearningPT
					</li>
					<li><Links contact={contact} /></li>
				</ol>
			</div>
		</footer>
	);
}

Footer.defaultProps = {
	config: {},
};

Footer.propTypes = {
	config: PropTypes.object,
};

export default Footer;
