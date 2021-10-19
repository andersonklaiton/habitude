import Header from '../Header';
import PermanentSidebar from '../PermanentSidebar';

import { MainContent, TemplateContainer } from './styles';

export const Template = ({ children }) => {
	return (
		<TemplateContainer>
			<Header />
			<PermanentSidebar />
			<MainContent>{children}</MainContent>
		</TemplateContainer>
	);
};