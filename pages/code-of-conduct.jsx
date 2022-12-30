import MDX from 'mdx-scoped-runtime';

import { allContentDefaultProps, allContentPropTypes, loadAllContentFromFiles } from '../utils';
import BaseLayout from '../layouts/Base';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CodeOfConduct({
	codeOfConductContent, config,
}) {
	return (
		<BaseLayout {...config}>
			<Header config={config} />

			<div className="l-container">
				<section>
					<h2>Code of Conduct</h2>
					<MDX>{codeOfConductContent}</MDX>
				</section>
			</div>
			<Footer config={config} />
		</BaseLayout>
	);
}

CodeOfConduct.defaultProps = allContentDefaultProps;
CodeOfConduct.propTypes = allContentPropTypes;

export async function getStaticProps() {
	const allContentFromFiles = await loadAllContentFromFiles();

	return {
		props: allContentFromFiles,
	};
}

export default CodeOfConduct;
