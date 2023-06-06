import { allContentDefaultProps, allContentPropTypes, loadAllContentFromFiles } from '../utils';
import BaseLayout from '../layouts/Base';
import Initiatives from '../components/InitiativesList';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home({
	eventsInitiatives, challengesInitiatives, contentInitiatives, toolsInitiatives, config,
}) {
	return (
		<BaseLayout pageTitle="Welcome!" {...config}>
			<Header config={config} />

			<div className="l-container">
				<section>
					<h2>Initiatives</h2>
					<h3>Events</h3>
					<Initiatives items={eventsInitiatives} />
					<br/><br/>
					<h3>Challenges</h3>
					<Initiatives items={challengesInitiatives} />
					<br/><br/>
					<h3>Content</h3>
					<Initiatives items={contentInitiatives} />
					<br/><br/>
					<h3>Tools</h3>
					<Initiatives items={toolsInitiatives} />
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
