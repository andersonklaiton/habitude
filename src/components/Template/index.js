import Header from '../Header';
import PermanentSidebar from '../PermanentSidebar';

import { Body, MainContent, TemplateContainer } from './styles';

export const Template = ({ children }) => {
	return (
		<TemplateContainer>
			<Header />
			<Body>
				<PermanentSidebar />
				<MainContent>{children}</MainContent>
			</Body>
		</TemplateContainer>
	);
};
