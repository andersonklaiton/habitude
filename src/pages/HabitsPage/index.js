import { useCallback, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import CardHabits from '../../components/CardDashbord';
import { Template } from '../../components/Template';
import { useAuth } from '../../providers/auth';

import api from '../../services/api';

const HabitsPage = () => {
	const history = useHistory();
	const { auth } = useAuth();

	const token = JSON.parse(localStorage.getItem('token'));

	const [habits, setHabits] = useState([]);

	const getHabits = useCallback(() => {
		api.get('/habits/personal/', {
			headers: { Authorization: `Bearer ${token}` },
		}).then((response) => setHabits(response.data));
	}, [token]);


    const [change, setChange] = useState(false);

    const getHabits = useCallback(() => {
        api.get("/habits/personal/", { headers: { Authorization: `Bearer ${token}` } })
            .then(response => setHabits(response.data))
    }, [token])

    useEffect(() => {
        getHabits()
        setChange(false)
    }, [setHabits, getHabits, change]);
if (!auth) {
		history.push('/');
	}
    return (
        <Template>
            {
                habits.map((habit, index) => {
                    return <CardHabits key={index} habits={habit} setChange={setChange} />
                })
            }


	return (
		<Template>
			{habits.map((teste) => {
				return <CardHabits habits={teste} />;
			})}
			<button></button>
		</Template>
	);
};

export default HabitsPage;
