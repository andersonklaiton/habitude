import {
	useCallback,
	useEffect,
	useContext,
	useState,
	createContext,
} from 'react';
import api from '../../services/api';

export const AllGroupsContext = createContext();

export const AllGroupsProvider = ({ children }) => {
	const [cardGroups, setCardGroups] = useState([]);
	const [nextPage, setNextPage] = useState(1);

	const loadGroups = useCallback(() => {
		api.get(`groups/?page=${nextPage}`)
			.then((response) => setCardGroups(response.data.results))
			.catch((error) => console.error(error));
	}, [nextPage]);

	const FPage = () => {
		if (nextPage < 10) {
			setNextPage(nextPage + 1);
		}
	};

	const BPage = () => {
		if (nextPage > 1) {
			setNextPage(nextPage - 1);
		}
	};
	useEffect(() => {
		loadGroups();
	}, [nextPage, loadGroups]);

	return (
		<AllGroupsContext.Provider
			value={{ cardGroups, loadGroups, FPage, BPage }}
		>
			{children}
		</AllGroupsContext.Provider>
	);
};
export const useGroups = () => useContext(AllGroupsContext);
