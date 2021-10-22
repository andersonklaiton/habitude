import { useHistory, useParams } from 'react-router';
import { Template } from '../../components/Template';
import { useAuth } from '../../providers/auth';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { BiWalk } from 'react-icons/bi';
import {
	Container,
	ContentContainer,
	DataContainer,
	NameContainer,
	SubmitButton,
} from './styles';
import { TextField } from '@material-ui/core';

const CreateActivity = () => {
	const { auth } = useAuth();
	const history = useHistory();
	const { id } = useParams();
	const token = JSON.parse(localStorage.getItem('token'));

	if (!auth) {
		history.push('/');
	}

	const schema = yup.object().shape({
		title: yup.string().required('Campo obrigatório'),
		realization_time: yup.string().required('Campo obrigatório'),
		group: yup.number().default(() => Number(id)),
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const handleCreateActivity = (data) => {
		api.post('/activities/', data, {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((_) => toast.success('Atividade criada!'))
			.catch((_) => toast.error('Erro!'));
		history.push(`/group/${id}/`);
	};

	return (
		<Template>
			<Container onSubmit={handleSubmit(handleCreateActivity)}>
				<NameContainer>
					<ContentContainer>
						<BiWalk style={{ fontSize: '25px' }} />
						<h1>Activity</h1>
					</ContentContainer>
				</NameContainer>
				<DataContainer>
					<TextField
						variant="standard"
						label="Titulo"
						style={{ width: '70%' }}
						{...register('title')}
					></TextField>
					<TextField
						variant="standard"
						label="Tempo"
						style={{ width: '70%' }}
						{...register('realization_time')}
					></TextField>
					<SubmitButton type="submit">Criar</SubmitButton>
				</DataContainer>
			</Container>
		</Template>
	);
};

export default CreateActivity;
