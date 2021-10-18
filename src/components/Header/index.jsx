import { AddButton, ExpandedButton, HeaderField, Title } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdAddCircle } from 'react-icons/md';

const Header = () => {
	return (
		<HeaderField>
			<ExpandedButton>
				<GiHamburgerMenu />
			</ExpandedButton>
			<Title>Groups</Title>
			<AddButton>
				<MdAddCircle />
			</AddButton>
		</HeaderField>
	);
};

export default Header;
