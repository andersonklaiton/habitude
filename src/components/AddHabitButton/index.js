import { AddButton } from './styles';

const AddHabitButton = (handler) => {
	return <AddButton onClick={handler}>Adicionar</AddButton>;
};

export default AddHabitButton;
