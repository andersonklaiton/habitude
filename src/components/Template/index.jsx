import Header from '../Header';
import PermanentSidebar from '../PermanentSidebar';

import { TemplateContainer } from './styles';

export const Template = ({ children }) => {
	return (
		<TemplateContainer>
			<Header />
			<PermanentSidebar>{children}</PermanentSidebar>
		</TemplateContainer>
	);
};
