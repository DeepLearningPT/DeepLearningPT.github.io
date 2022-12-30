import { allContentDefaultProps, allContentPropTypes, loadAllContentFromFiles } from '../utils';
import BaseLayout from '../layouts/Base';
import EventGrid from '../components/EventGrid';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Events({
	events, config,
}) {
	return (
		<BaseLayout {...config}>
			<Header config={config} />

			<div className="l-container">
				<section>
					<h2>Event Photos</h2>
					<EventGrid items={events} />
				</section>
			</div>
			<Footer config={config} />
		</BaseLayout>
	);
}

Events.defaultProps = allContentDefaultProps;
Events.propTypes = allContentPropTypes;

export async function getStaticProps() {
	const allContentFromFiles = await loadAllContentFromFiles();

	return {
		props: allContentFromFiles,
	};
}

export default Events;
