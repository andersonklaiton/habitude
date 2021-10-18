import Header from '../Header';
import PermanentSidebar from '../PermanentSidebar';

import { TemplateContainer } from './styles';

export const Template = () => {
	return (
		<TemplateContainer>
			<Header />
			<PermanentSidebar />
		</TemplateContainer>
	);
};
