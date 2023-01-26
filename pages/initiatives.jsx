import { allContentDefaultProps, allContentPropTypes, loadAllContentFromFiles } from '../utils';
import BaseLayout from '../layouts/Base';
import BlogEntries from '../components/BlogEntries';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home({
	blogEntries, config,
}) {
	return (
		<BaseLayout pageTitle="Welcome!" {...config}>
			<Header config={config} />

			<div className="l-container">
				<section>
					<h2>Initiatives</h2>
					<BlogEntries items={blogEntries} />
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
