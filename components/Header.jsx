import PropTypes from 'prop-types';
import Link from 'next/link';

import Links from './Links';

import s from '../styles/Common.module.scss';

function Header({ config }) {
	const { contact } = config;

	return (
		<header className={s.Header}>
			<div className="l-container">
				<ol>
					<li>
						<Link href="/">
							<a>
								DeepLearningPT
							</a>
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<a>
								Blog
							</a>
						</Link>
					</li>
					<li>
						<Link href="/events">
							<a>
								Photos
							</a>
						</Link>
					</li>
					<li>
						<Link href="/team">
							<a>
								Team
							</a>
						</Link>
					</li>
					<li>
						<Link href="/code-of-conduct">
							<a>
								Code of Conduct
							</a>
						</Link>
					</li>
					<li>
						<Links contact={contact} />
					</li>
				</ol>
			</div>
		</header>
	);
}

Header.defaultProps = {
	config: null,
};

Header.propTypes = {
	config: PropTypes.object,
};

export default Header;
