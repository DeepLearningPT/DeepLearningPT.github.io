import { allContentDefaultProps, allContentPropTypes, loadAllContentFromFiles } from '../utils';
import BaseLayout from '../layouts/Base';
import Header from '../components/Header';
import Footer from '../components/Footer';

import s from '../styles/Home.module.scss';

function Home({
	config,
}) {
	return (
		<BaseLayout pageTitle="Welcome!" {...config}>
			<Header config={config} />

			<div className="l-container">

				<section className={s.Intro}>
					<img src="/profile.jpg" alt="DeepLearningPT" />

					<div>
						<h1>Welcome to Deep Learning Sessions Portugal!</h1>
						<p>
							We are a volunteer group of deep learning enthusiasts who come together to organize events and create content about deep learning advancements in Portugal.
							<br />
							Our goal is to share knowledge and promote collaboration among professionals and students interested in deep learning as well as improve AI literacy in Portugal. We hold regular events to help build an active and engaged community around this exciting area of technology.
							In addition, we create content to keep you informed about the latest news and developments in deep learning in Portugal and around the world.
							<br />
							<br />
							If you are interested in deep learning and want to join us on our journey, please don&apos;t hesitate to reach out and attend our events. We look forward to meeting you!
							{/* eslint-disable-next-line */}
						</p>
					</div>
				</section>

				<section>
					<h2>Where you can find us:</h2>
					<ol className={s.FindUs}>
						<li>
							<a href={config.contact.meetupURL} target="_blank" rel="noreferrer">
								<i className="fab fa-meetup" />
								<span>Meetup</span>
							</a>
						</li>
						<li>
							<a href={config.contact.linkedinURL} target="_blank" rel="noreferrer">
								<i className="fab fa-linkedin" />
								<span>Linkedin</span>
							</a>
						</li>
						<li>
							<a href={config.contact.twitterURL} target="_blank" rel="noreferrer">
								<i className="fab fa-twitter" />
								<span>Twitter</span>
							</a>
						</li>
						<li>
							<a href={config.contact.youtubeURL} target="_blank" rel="noreferrer">
								<i className="fab fa-youtube" />
								<span>Youtube</span>
							</a>
						</li>
						<li>
							<a href={config.contact.githubURL} target="_blank" rel="noreferrer">
								<i className="fab fa-github" />
								<span>GitHub</span>
							</a>
						</li>
						<li>
							<a href={config.contact.mediumURL} target="_blank" rel="noreferrer">
								<i className="fab fa-medium" />
								<span>Medium</span>
							</a>
						</li>
					</ol>
				</section>

				<section>
					<h3>Contact</h3>
					<p>
						To discuss any issues or concerns relating to the code of conduct or the behavior of anyone at a DL meetup, please contact one of the organizers.
					</p>
					<code>deep.learning.lx (at) gmail (dot) com</code>
				</section>
			</div>
			<Footer config={config} />
		</BaseLayout>
	);
}

Home.defaultProps = allContentDefaultProps;
Home.propTypes = allContentPropTypes;

export async function getStaticProps() {
	const allContentFromFiles = await loadAllContentFromFiles();

	return {
		props: allContentFromFiles,
	};
}

export default Home;
