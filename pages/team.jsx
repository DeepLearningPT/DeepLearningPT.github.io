import { allContentDefaultProps, allContentPropTypes, loadAllContentFromFiles } from '../utils';
import BaseLayout from '../layouts/Base';
import TeamGrid from '../components/TeamGrid';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Food({
	team, config,
}) {
	return (
		<BaseLayout {...config}>
			<Header config={config} />

			<div className="l-container">
				<section>
					<h2>Team</h2>
					<TeamGrid items={team} />
				</section>
			</div>
			<Footer config={config} />
		</BaseLayout>
	);
}

Food.defaultProps = allContentDefaultProps;
Food.propTypes = allContentPropTypes;

export async function getStaticProps() {
	const allContentFromFiles = await loadAllContentFromFiles();

	return {
		props: allContentFromFiles,
	};
}

export default Food;
